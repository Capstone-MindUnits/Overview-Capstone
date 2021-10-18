import React from 'react';
import './RatingAndReview.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';
import Header from './components/Header';
import StarChart from './components/StarChart';
import NumberStars from './components/NumberStars';
import Characteristics from './components/Characteristics';
import axios from 'axios';



class RatindAndReview extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      reviewsView: 2,
      reviewButton: true,
      sortedByDate: false,
      sortedByHelpfullness: false,
      sortedByRelevance: true
    }
  }


  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40393', {
      headers: {
        authorization:(process.env.REACT_APP_Token)
      }
    }).then((data) => {
      this.setState({
        reviews: data.data
      })
    })
  }


  //a function to render all the reviews on click after changing the view 
  moreReviews() {
    this.setState({
      reviewsView: this.state.reviewsView + 2,
    })
  }

  hideButtonFunction() {
    this.setState({
      reviewButton: false
    })
  }



  render() {
    return (
      <div className="grid grid-cols-3 gap-6  w-2/3  mx-auto text-gray-600 text-xs mb-550">
        <div className="...">
          <NumberStars reviewData={this.state.reviews.results} />
        </div>
        <div className="col-span-2 ...">
          <Header reviewData={this.state.reviews.results} />
        </div>
        <div className="..." style={{ height: '400px' }}>
          <StarChart reviewData={this.state.reviews.results} />
          <div className="... mt-10" style={{ height: '555px' }}>
            <Characteristics />
          </div>
        </div>
        <div className="col-span-2 ... mt-2 ">
          <ReviewList reviewsView={this.state.reviewsView} reviewData={this.state.reviews.results} />
        </div>
        <div className="col-span-3 ... ml-80 " >
          <ButtonsComp reviewData={this.state.reviews.results} moreReviews={this.moreReviews.bind(this)} />
        </div>
      </div >
    )
  }
}




export default RatindAndReview;
