import { Carousel } from 'react-bootstrap';
import React from 'react';
import image1 from "../../src/image/carosol/3.png"
import image2 from "../../src/image/carosol/1.png"
import image3 from "../../src/image/carosol/image.png"
import style from "./amir.css"
const Amir = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 h-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>ঘাস ফুল শাড়ি</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={image3}
            alt="Second slide"
          />
      
          <Carousel.Caption >
          <h3 >মুসলিন শাড়ি</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 >কাপল সেট</h3>
            <p>Praesent commodo cursus magna.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Amir;