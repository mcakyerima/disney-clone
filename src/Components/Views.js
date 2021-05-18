import styled from 'styled-components';

const Views = (prop) => {
    return (
        <Container>
            <Wrapper>
                <img src={"./images/viewers-disney.png"} />
                <video autoPlay={true} loop={true} playsInLine={true} muted={true}>
                    <source src="/Videos/1564674844-disney.mp4" type='video/mp4' />
                </video>
            </Wrapper>
            <Wrapper>
                <img src={"./images/viewers-marvel.png"} />
                <video autoPlay={true} loop={true} playsInLine={true} muted={true}>
                    <source src="/Videos/1564676115-marvel.mp4" type='video/mp4' />
                </video>
            </Wrapper>
            <Wrapper>
                <img src={"./images/viewers-national.png"} />
                <video autoPlay={true} loop={true} playsInLine={true} muted={true}>
                    <source src="/Videos/1564676296-national-geographic.mp4" type='video/mp4' />
                </video>
            </Wrapper>
            <Wrapper>
                <img src={"./images/viewers-pixar.png"} />
                <video autoPlay={true} loop={true} playsInLine={true} muted={true}>
                    <source src="/Videos/1564676714-pixar.mp4" type='video/mp4' />
                </video>
            </Wrapper>
            <Wrapper>
                <img src={"./images/viewers-starwars.png"} />
                <video autoPlay={true} loop={true} playsInLine={true} muted={true}>
                    <source src="/Videos/1608229455-star-wars.mp4" type='video/mp4' />
                </video>
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
    
    padding-top:56%;
    position: relative;
     /* width:260px;
    height:150px; */
    border:4px solid grey;
    border-radius:10px;
    overflow:hidden;
    /* padding-top:55%; */
    box-shadow: rgba(0 0 0 /69% ) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;

    video{
        width:100%;
        z-index:0;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        opacity:0;
        
        
    }
    
    &:hover{
        cursor: pointer;
        border: 4px solid white;
        transform:scale(1.05);
        transition: transform cubic-bezier(.04,.52,.92,.39) 0.2s;
        video{
            opacity:1
        }
       
    }
    img{
        position: absolute;
        display: block;
        width: 100%;
        height:100%;
        inset:0px;
        /* object-fit:cover; */
        z-index:1;
        top:0;
        opacity:1;
        transition:opacity 500ms ease-in-out;
        padding:0px;
       
    }
    `

