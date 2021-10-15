import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import ProductInfo from './components/productInfo/ProductInfo'
import StyleSelector from './components/StyleSelector/StyleSelector'
import AddToCart from './components/AddToCart/AddToCart'
import Gallery from './components/Gallery/Gallery'
import Description from './components/Description/Description'


function App() {
  return (
    <div className="App ">
      <Nav />
      <div className=" my-4 "><p > SITE-WIDE-ANNOUNCMENT MESSAGE! - SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></p></div>

      <div className="grid grid-rows-3 grid-flow-col gap-4 w-2/3 flex  mx-auto  ">
        <div className="  row-span-3 col-span-2 ..."><Gallery /></div>
        <div className=" col-span-1 ... "><ProductInfo /></div>
        <div className=" col-span-1  ..."><StyleSelector /></div>
        <div className=" col-span-1  ..."><AddToCart /></div>
      </div>
      <div className="ml-96" >
        <Description />
      </div>




    </div>
  );
}

export default App;
