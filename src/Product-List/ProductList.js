import React from "react";
import './ProductList.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./Components/Cards";
import OutfitCards from "./Components/OutfitCards";
import config from "./config/config";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40393/styles`,
      { headers: { authorization: `${config.Token}` } }
    )
      .then((data) => {
        console.log(data.data.results);
        this.setState({
          products: data.data,
        });
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>

        <div className="product -mx-1">RELATED PRODUCT</div>
        <div className="grid grid-cols-6 justify-center grid-rows-2 gap-2 min-h-screen m-3">

          <div className="col-start-2 col-end-6 flex justify-center gap-x-6">
            <div className="row-start-1 row-end-2 text-gray-500">
              <Cards results={this.state.products.results} />
            </div>
          </div>

          <div className="col-start-2 col-end-6 flex justify-center gap-x-6">
            <div className="row-start-1 row-end-2 mt-6">
              <OutfitCards results={this.state.products.results} />
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
