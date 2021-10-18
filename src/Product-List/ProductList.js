import React from "react";
import './ProductList.css';
import axios from "axios";
import Cards from "./Components/Cards";
import OutfitCards from "./Components/OutfitCards";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40393/related`,
        { headers: { authorization: (process.env.REACT_APP_Token)}}
      )
      .then(async (response) => {
                const detailsDatas = await response.data.reduce(async (memo, v, i) => {
                    const results = await memo;
                    const detailedData = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${response.data[i]}/styles`,
                        { headers: { Authorization: (process.env.REACT_APP_Token) } })
                    return [...results, ...detailedData.data.results];
                }, []);
                return detailsDatas
            })
            .then((data)=>{
              console.log(data)
              this.setState({
                products: data
              })
            })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>

        
        <div className="grid grid-cols-6 justify-center grid-rows-1 gap-2  m-3">
          <div className="col-start-2 col-end-6 flex justify-center gap-x-6">
            <div className="row-start-1 row-end-2 text-gray-500">
            <div className="product">RELATED PRODUCT</div>
              <Cards results={this.state.products}/>
            </div>
          </div>

          <div className="col-start-2 col-end-6 flex justify-center gap-x-6 ">
            <div className="row-start-1 row-end-2 my-10">
              <OutfitCards results={this.state.products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;



{/* <div className="col-start-3 col-end-7 flex justify-center gap-x-10 ml-16">
  <div className="row-start-1 row-end-2 text-gray-500">
    YOUR OUTFIT
    <AddProCard />
  </div>
  <div className="row-start-1 row-end-2 mt-6">
    <OutfitCards />
  </div>
  <div className="row-start-1 row-end-2 mt-6">
    <OutfitCards />
  </div>
  <div className="row-start-1 row-end-2 mt-6">
    <OutfitCards />
  </div>
</div>; */}
