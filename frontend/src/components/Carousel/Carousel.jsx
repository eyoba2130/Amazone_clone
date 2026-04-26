import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Carousel.css';

import './Carousel.css';
export default function CarouselEffect() {    

    return (
        <div className="carousel">
            <div className="carousel-item">
            
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                    {img.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Carousel Item ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}               
                  