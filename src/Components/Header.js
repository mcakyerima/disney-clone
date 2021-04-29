import styled from 'styled-components';

const Header = (props) => {
    return (
        <Nav>
            <NavLogo>
                <img src="/images/main-logo.svg" />
            </NavLogo> 
            <NavLink>LOGIN</NavLink>
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
const NavLink = styled.a`
    border: solid 3px #f9f9f9;
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
    border-radius: 6px;
    
    @media
    &:hover{
        cursor:pointer;
        background-color:#0483ee;
    }
    `
    export default Header;