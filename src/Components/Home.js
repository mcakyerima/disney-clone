import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlide';
import Views from './Views';



function Home() {
    return (
        <Container>
            <ImageSlider/>
            <Views/>
        </Container>
            
    )
};
const Container = styled.main`
    position: relative;
    background-image: url('/images/home-background.png');
    background-size: cover;
    background-position: fixed;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding:0 calc(3.5vh + 5px);
    width: 100%;

    &:after{
        content: "";
        background: url("/images/home-background.png") cover center no-repeat fixed;
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
        

    }
    
    `

export default Home
