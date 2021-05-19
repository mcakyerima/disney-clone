import styled from 'styled-components';
//import Link from react router dom to avoid reload when Link Clicked
import { Link } from 'react-router-dom';

const Recomendation = () =>{
    return(
        <Container>
        <h4>Recommended for You.</h4>
          <Content>
              <Wrap>
                  <Link to='/'>
                      <img src={"./images/viewers-marvel.png"}/>
                </Link>
              </Wrap>
              <Wrap>
                  <Link to='/'>
                      <img src={"./images/viewers-marvel.png"}/>
                </Link>
              </Wrap>
              <Wrap>
                  <Link to='/'>
                      <img src={"./images/viewers-marvel.png"}/>
                </Link>
              </Wrap>
              <Wrap>
                  <Link to='/'>
                      <img src={"./images/viewers-marvel.png"}/>
                </Link>
              </Wrap>
          </Content>
            
        </Container>
          
    )
};
const Container = styled.div`
    padding: 0 0 26px;
    `

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0 , 1fr));
    grid-gap: 25px;
    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-auto-rows: minmax(0, auto)
    }
    `
const Wrap = styled.div`
    
    `
export default Recomendation;