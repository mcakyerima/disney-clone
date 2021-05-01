import styled from 'styled-components';

const Header = (props) => {
    return (
        <Nav>
            <NavLogo>
                <img src="/images/main-logo.svg" />
            </NavLogo> 
            <NavLink>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="home"/>
                    <span>HOME</span>
                </a>
               
            </NavLink>
        </Nav>
    )
};



const Nav = styled.nav`
    background-color: #090b13;
    height:70px;
    width: 100vw;
    position: fixed;
    top: 0;
    left:0;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:0 35px;
    letter-spacing: 10px;
    z-index: 3;
    `
const NavLogo = styled.a`
    display: inline-block;
    padding: 0;
    max-height: 100px;
    margin-top: 4px;
    width: 90px;
    img{
        display: block;
        height:100px;
        width: 100%;
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
    `
const NavLink = styled.div`
    //border: solid 3px #f9f9f9;
    font-weight: 400;
    font-size: 20px;
    margin:0px;
    margin-right: auto;
    margin-left:24px;
    letter-spacing: 4px;
    width: 140px;
    text-align: center;
    display: flex;
    //flex flow is a short-hand for flex-direction and flex-wrap.. the first param is for direction and the second is for wrap
    flex-flow: row nowrap;
    height:100%;
    padding: 0px;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    //border-radius: 6px;
    a {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        padding:0 .23px;
        
        img {
            height:20px;
            margin-right: 5px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            font-size: 15px;
            letter-spacing:1.4px;
            line-height: 1.05;
            color: rgb(249, 249, 249);
            padding:2px 0px;
            white-space: nowrap;
            position: relative;
        
            &:before{
                content: " ";
                background-color: rgba(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                height: 2px;            display: block;
                right: 0px;
                left: 0;
                opacity: 0;
                bottom: -5px;
                position: absolute;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width:auto;
            }
        }
        &:hover{
            span:before{
                transform: scale(1);
                visibility: visible;
                opacity: 1;

            }
        }
    
    @media (max-width: 768px){
        display: none
    }
    &:hover{
        cursor: hand;
        //background-color:#0483ee;
    }
    `
export default Header;