import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

  
function Gallery({data}) {
  
  let resultData = data ? data.reduce((acc,item) => {
    return [...acc, {original: `https://toolx321.herokuapp.com/${item.filename}`, thumbnail: `https://toolx321.herokuapp.com/${item.filename}`}]
  }, []) : []

  
    return (
        <div>
            <ImageGallery items={resultData} />
        </div>
    )
}

export default Gallery
