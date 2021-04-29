import styled from 'styled-components';
import React from 'react'

const Login = (props) => {
    return (
        <Container>
            <Content>
               
                <CTA>
                    <CTALogo src='/images/cta-logo.svg' alt='logo' />
                    <SignUp>Get all there</SignUp>
                    <Description>Get premier Access to Rays and the last Dragon for an additional fee
                         with a 
                        Disney+ subscribtion. as of 03/06/21. the price
                        of Disney+ and The Disney Bundle will increase by $1.
                    <CTALogo2 src="/images/cta-2-hd.svg" alt="logo2"/>
                    </Description>
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
    //border: 1px solid green;
    margin-bottom: 1vw;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;

    `
const CTALogo = styled.img`
   display: block;
   width:100%;
   min-height:1px;
   height:200px;
   top:0;
   left: 0;
   margin-bottom:5px;
    `
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-size: 18px;
    color: #f9f9f9;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 12px;
    text-transform: uppercase;
    text-align: center;
    padding:17px 0;
    letter-spacing:1.5px;
    border-radius: 4px;
    border: solid transparent 1px;
    font-size: 19px;
    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }`

const Description = styled.p`
    font-size: 11px;
    color: hsla(0, 0%, 95.3% , 1);
    text-align: center;
    text-justify:center;
    margin: 0 0 24px;
    line-height:1.5;
    letter-spacing: 1.5px;

    `
const CTALogo2 = styled.img`
    margin-top: 5px;
    width: 100%;
    display: inline-block;
    margin-bottom: 10px;
    `

export default Login;
