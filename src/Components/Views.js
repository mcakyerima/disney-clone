import styled from 'styled-components';

const Views = (prop) => {
    return(
        <Container>
           <Box>
               <img src={"./images/viewers-disney.png"}/>
           </Box>
           <Box>
                <img src={"./images/viewers-marvel.png"}/>
           </Box>
           <Box>
                <img src={"./images/viewers-national.png"}/>
           </Box>
           <Box>
                <img src={"./images/viewers-pixar.png"}/>
           </Box>
           <Box>
                <img src={"./images/viewers-starwars.png"}/>
           </Box>
        </Container>
        
    )
};
//
export default Views;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding:10px;
    margin-bottom: 20px;

    `

const Box = styled.div`
    width:260px;
    height:150px;
    border:3px solid white;
    border-radius:10px;
    box-shadow: -1px 12px 27px -3px rgba(0,0,0,0.48), 3px 12px 0px -25px rgba(57,50,91,0.75);
    &:hover{
        cursor: pointer;
        transform:scale(1.05);
        transition: transform 0.3s ease-in-out;
    }
    img{
        width: 100%;
        height:100%;
        padding:10px;
    }
    `

