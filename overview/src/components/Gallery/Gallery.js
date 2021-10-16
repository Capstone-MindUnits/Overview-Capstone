import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery'
import { useSelector, useDispatch } from 'react-redux';
import {styleAsync,selectStyle} from '../../feature/ProductSlice';




function Gallery() {
    const style = useSelector(selectStyle);
    

      if(style !== null){
          const images = [
        {
            original: style.results[0].photos[0].thumbnail_url,
            thumbnail: style.results[0].photos[0].thumbnail_url,
        },
        {
            original: style.results[0].photos[0].url,
            thumbnail: style.results[0].photos[0].url,
        },
       
    ];
    return (
        <div className="w-full  h-96">
            <ImageGallery originalHeight="200" items={images} thumbnailPosition="left" showPlayButton={false} infinite={false} useBrowserFullscreen={false}  />
        </div>
    )}
    else{
        return 'please wait...'
    }




}
export default Gallery
