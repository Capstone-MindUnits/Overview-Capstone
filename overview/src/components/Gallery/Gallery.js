import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery'
import { useSelector, } from 'react-redux';
import { style } from '../../feature/ProductSlice';




function Gallery() {
    // const style = useSelector(style);


    // if (style !== null) {
    //     const images = [
    //         {
    //             original: style.results[0].photos[0].thumbnail_url,
    //             thumbnail: style.results[0].photos[0].thumbnail_url,
    //         },
    //         {
    //             original: style.results[0].photos[0].url,
    //             thumbnail: style.results[0].photos[0].url,
    //         },

    //     ];
    //     return (
    //         <div className="w-full  h-96">
    //             <ImageGallery originalHeight="200" items={images} thumbnailPosition="left" showPlayButton={false} infinite={false} useBrowserFullscreen={false} />
    //         </div>
    //     )
    // }
    // else {
        return 'please wait...'
    // }




}
export default Gallery
