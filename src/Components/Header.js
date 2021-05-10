import styled from 'styled-components';
//dipatch will let us dispatch action to our store, and selector will let us select action from our store
import { useDispatch , useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, selectUserEmail, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';
import { auth, provider  } from '../firebase'

const Header = (props) => {
    //saving our dispatch to a variable for easy call
    const dispatch = useDispatch();
    //saving useHistory to a variable
    const history = useHistory();
    //fetching userName and userPhoto state from our store using useSelector and saving to a variable;
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    

    const handleAuth = () => {
        // sign in with pop up allow you to sign in on click of the login button and then sign in with google
        auth.signInWithPopup(provider)
        //this returns a promise because it waits for you to make a login
        .then((result) => {
            setUser(result.user)
        }).catch((error) => alert(error))
    }
    //the setuser func takes result.user which has all userinfo object and dispatches it to the setuserLoginDetails
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.displayName,
                photo: user.photoURL
            })
        );
    }
    return (
        <Nav>
            <NavLogo>
                <img src="/images/main-logo.svg" />
            </NavLogo>
            {/* when the user logs in? display the users image and the navbar contents. else just display the login button to the user */}
            {
                  !userName? 
                  (<Login onClick={handleAuth}>LOGIN</Login>)
                  :(
                    <>
                    <NavLink>
                
                    <a href="/home">
                        <img src="/images/home-icon.svg" alt="home" />
                        <span>HOME</span>
                    </a>
                    
                    <a href="">
                        <img src="images/search-icon.svg" alt="search"/>
                        <span>SEARCH</span>
                    </a>

                    <a href="">
                        <img src="images/watchlist-icon.svg" alt="watchlist"/>
                        <span>WATCHLIST</span>
                    </a>

                    <a href="">
                          <img src="images/original-icon.svg" alt="originals"/>
                        <span>ORIGINALS</span>
                    </a>
                    
                    <a href="">
                        <img src="images/series-icon.svg" alt="series"/>
                        <span>SERIES</span>
                    </a>
                    <a href="">
                        <img src="images/movie-icon.svg" alt="movies"/>
                        <span>MOVIES</span>
                    </a>
                    
                    
                </NavLink>
                <Profile src={userPhoto}/>
                   
                  </> 
                
                  )}
                     
            
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
    display: block;
    padding: 0;
    max-height: 100px;
    margin-top: 4px;
    margin-right:auto;
    width: 90px;
    img{
        display: block;
        height:100px;
        width: 100%;
        margin-right:20px;
        margin-right: 50px;
        transition: all .5s linear 1s;
    }
    &:hover{
        cursor: pointer;
        transform: scaleX(1.2);
        visibility: visible;
    }
    `
const NavLink = styled.div`
    //border: solid 3px #f9f9f9;
    font-weight: 400;
    font-size: 20px;
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
        padding:0 .40px;
        
        img {
            height:20px;
            margin-right: 5px;
            margin-left: 20px;
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
                cursor: context-menu;

            }
        }
    
    @media (max-width: 768px){
        display: none
    }
    &:hover{
        cursor: hand;
        //background-color:#0483ee;
    }
    }
`
const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 15px;
    letter-spacing: 1.4px;
    border: solid 1px #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    
    &:hover{
        cursor: pointer;
        background-color: #f9f9f9;
        color:#000;
        border: transparent;
    }

    font-size: 20px;
    `
const Profile = styled.img`
    height: 100%;
    padding:10px;
    border-radius: 50%;
    &:hover{
        cursor: pointer;
        border: solid red 2px;
    }`
export default Header;