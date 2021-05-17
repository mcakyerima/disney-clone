import styled from 'styled-components';

const Views = (prop) => {
    return(
        <Container>
           <Wrapper>
               <img src={"./images/viewers-disney.png"}/>
           </Wrapper>
           <Wrapper>
                <img src={"./images/viewers-marvel.png"}/>
           </Wrapper>
           <Wrapper>
                <img src={"./images/viewers-national.png"}/>
           </Wrapper>
           <Wrapper>
                <img src={"./images/viewers-pixar.png"}/>
           </Wrapper>
           <Wrapper>
                <img src={"./images/viewers-starwars.png"}/>
           </Wrapper>
        </Container>
        
    )
};
//
export default Views;
const Container = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(5, minmax(0, 1fr));
    margin-top: 50px;
    padding:10px;
    margin-bottom: 20px;
    @media (max-width: 760px) {
        grid-template-columns:repeat(1, minmax(0, 1fr));
        grid-gap:40px;
    
}

    `


const Wrapper = styled.div`
    /* width:260px;
    height:150px; */
    border:4px solid grey;
    border-radius:10px;
    /* padding-top:55%; */
    box-shadow: rgba(0 0 0 /69% ) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    
    &:hover{
        cursor: pointer;
        border: 4px solid white;
        transform:scale(1.05);
        transition: transform ease-in 0.1s;
       
    }
    img{
        width: 100%;
        height:100%;
        inset:0px;
        object-fit:cover;
        z-index:4;
        padding:10px;
    }
    `

