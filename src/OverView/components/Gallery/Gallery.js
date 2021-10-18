import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery'


function Gallery({styles}) {
    


    if (styles !== null) {
        const images = [
            {
                original: styles.results[0].photos[1].thumbnail_url,
                thumbnail: styles.results[0].photos[1].thumbnail_url,
            },
          
            {
                original: styles.results[0].photos[4].thumbnail_url,
                thumbnail: styles.results[0].photos[4].thumbnail_url,
            },

        ];
        return (
            <div className="w-full  h-96">
                <ImageGallery originalHeight="200" items={images} thumbnailPosition="left" showPlayButton={false} infinite={false} useBrowserFullscreen={false} />
            </div>
        )
    }
    else {
        return 'please wait...'
    }




}
export default Gallery
