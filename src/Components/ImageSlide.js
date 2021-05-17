import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Views from './Views';

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
            <Wrap>
                <a>
                    <img src="images/slider-scale.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="images/slider-badag.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="images/slider-scales.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="images/slider-badging.jpg" />
                </a>
            </Wrap>


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
            transition: opacity 0.5s ease-in;
            }
    }
    ul > li > button {
        &:before{
            font-size:12px;
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
const Wrap = styled.div`
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    a {
        border-radius:10px;
        display: block;
        box-shadow: rgb(0 0 0/ 69% ) 0px 26px 30px -18px, rgba(0 0 0 / 73%) 0px 15px 10px -10px;
        padding: 20px;
        position: relative;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
    }
    &:hover{
        /* padding: 0; */
        border: 2px solid rgba(249, 248, 258, 0.8);
        transition-duration: 300ms;
    }
`
export default ImageSlider;


