import styled from 'styled-components';

const Recomendation = () =>{
    return(
        <Container>
        <h4>Recommended for You.</h4>
          <Content>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              
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
        grid-auto-rows: minmax(60px, auto)
    }
    `
export default Recomendation;