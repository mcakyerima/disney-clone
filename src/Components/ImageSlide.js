import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageSlider = (props) => {
    //set the slider settings for the slider component
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScrool: 1,
        swipeToSlide: true,
        autoplay: true,
    };
    return (
        
            <Carousel {...settings}>
               <wrap>
                   <a>
                       <img src="images/slider-badging.jpg"/>
                   </a>
               </wrap>
               <wrap>
                   <a>
                       <img src="images/slider-badging.jpg"/>
                   </a>
               </wrap><wrap>
                   <a>
                       <img src="images/slider-badging.jpg"/>
                   </a>
               </wrap><wrap>
                   <a>
                       <img src="images/slider-badging.jpg"/>
                   </a>
               </wrap><wrap>
                   <a>
                       <img src="images/slider-badging.jpg"/>
                   </a>
               </wrap><wrap>
                   <a>
                       <img src="images/slider-badging.jpg"/>
                   </a>
               </wrap>

           </Carousel>
       )
};

const Carousel = styled(Slider)`
    margin-top: 20px;
    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index:1;
    }
    &:hover{
        button{
            opacity: 1;
            transition: opacity 0.5s ease 0s;
            }
    }
    ul li button {
        &:before{
            font-size:10px;
            color: rgb(150, 159, 171);
        }
    }
    li.slick-active button:before {
        color: white;
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: -75;
    }
    .slick-next {
        right:-75;
    }
    `
export default ImageSlider;

