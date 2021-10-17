import React ,{useEffect} from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import ProductInfo from './components/productInfo/ProductInfo'
import StyleSelector from './components/StyleSelector/StyleSelector'
import AddToCart from './components/AddToCart/AddToCart'
import Gallery from './components/Gallery/Gallery'
import Description from './components/Description/Description'

import { useSelector, useDispatch } from 'react-redux';
import { styleAsync, selectStyle, thisstyle, currentStyle,dataAsync, selectProduct } from './feature/ProductSlice';



function App() {

  const pro = useSelector(selectProduct);
  const styles = useSelector(selectStyle)
  const style = useSelector(thisstyle)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dataAsync())
    dispatch(styleAsync())
    
     dispatch(currentStyle(styles.results[0]))
    

}, [dispatch])

  return (
    <div className="App ">
        <Nav />
        <div className=" my-4 "><p > SITE-WIDE-ANNOUNCMENT MESSAGE! - SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></p></div>

        <div className="grid grid-rows-4 grid-flow-col gap-4 w-2/3 flex  mx-auto  ">
          <div className=" row-span-3 col-span-2  ..."><Gallery style={style} /></div>
          <div className=" col-span-3 ml-60  ..."><Description pro={pro} /></div>
          <div className=" col-span-1 ... "><ProductInfo pro={pro} /></div>
          <div className=" col-span-1 ..."><StyleSelector style={style} styles={styles} /></div>
          <div className=" col-span-1  ..."><AddToCart /></div>
          
        </div>
      
        

      </div>
  )
}

export default App




