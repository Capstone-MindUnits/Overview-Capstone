import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import ProductInfo from './components/productInfo/ProductInfo'
import StyleSelector from './components/StyleSelector/StyleSelector'
import AddToCart from './components/AddToCart/AddToCart'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className=" my-4 "><p className="text-opacity-40"> SITE-WIDE-ANNOUNCMENT MESSAGE! - SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></p></div>

      <div class="grid grid-rows-3 grid-flow-col gap-4 w-2/3 flex  mx-auto  ">
        <div class=" navc row-span-3 col-span-2 ...">1</div>
        <div class=" col-span-1 ... "><ProductInfo /></div>
        <div class=" col-span-1  ..."><StyleSelector/></div>
        <div class=" col-span-1  ..."><AddToCart/></div>
      </div>

    </div>
  );
}

export default App;
