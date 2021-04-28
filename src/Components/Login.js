import styled from 'styled-components';
import React from 'react'

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogo src='/images/cta1.svg' alt='logo' />
                </CTA>

                <Background />
            </Content>
        </Container>
    )
}
const Container = styled.section`
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

`;
const Content = styled.div`
    min-height: 100vh;
    width:100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10vw;
    padding:80px 40px;
    height: 100%;
    `
const Background = styled.div`
    background-image: url("/images/bg.png");
    height:100vh;
    width:100%;
    background-size: cover;
    position: absolute;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
    top:0;
    right:0;
    left:0;`
const CTA = styled.div`
    border: 1px solid green;
    margin-bottom: 2vw;
    max-width: 650px;
    display: flex;
    flex-wrap:wrap;

    `
const CTALogo = styled.img`
    min-width: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    margin-bottom: 15px;
    `

export default Login
