import React from 'react';
import image from '../images/biblebook.jpg'
import image1 from '../images/biblebook1.jpg'
import Gallery from 'react-photo-gallery' 

const photos = [
    {
        src : '/images/biblebook.jpg',
        width : 4,
        height : 3
    },
    {
        src : '/images/biblebook1.jpg',
        width : 2,
        height : 4
    },
    {
        src : '/images/biblebook2.jpg',
        width : 4,
        height : 3
    },
    {
        src : '/images/biblebook.jpg',
        width : 5,
        height : 3
    }
];
const photos1 = [
    {
        src : '/images/biblebook1.jpg',
        width : 4,
        height : 3
    },
    {
        src : '/images/biblebook2.jpg',
        width : 5,
        height : 4
    },
    {
        src : '/images/biblebook.jpg',
        width : 3,
        height : 1
    },
    {
        src : '/images/biblebook2.jpg',
        width : 4,
        height : 3
    }
];

class ImageGrid extends React.Component{
    render(){
        return(
            <div className="gridImage"> 
                <div className="galleryStyle"  >
                    <Gallery photos={photos} />
                </div>
                <div className="galleryStyle"  >
                    <Gallery photos={photos1} />
                </div>
                {/* <Gallery photos={photos1} className="galleryStyle" /> */}
            </div>          
        );
    }
}
export default ImageGrid;