import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {sliderItems} from "../data";
import {useState} from "react";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position:relative;
overflow: hidden;
`

 const Arrow = styled.div`
   width:50px;
   height:50px;
   background-color: white;

   border-radious: 50%
   display:flex;
   align-items: center;
   justify-content: center;
   position:absolute;
   top: 0;
   bottom: 0;
   margin:auto;
   left: ${(props) => props.direction === "left" && "100px"};
   right: ${(props) => props.direction === "right" && "100px"};
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;

`;
const Wrapper = styled.div`
height:100%;
display: flex;

transition: all 0.2s ease;
transform: translateX(${(props)=> props.slideIndex * -100}vw);
`;
const Slide = styled.div`
height:100vh;
width:100vw;
display:flex;

align-items: center;
background-color: ${props=>props.bg};
`;
const ImgContainer = styled.div`

height: 100%;
flex: 1;`;

const Image = styled.img`
margin: 5px;

height: 80%`;
const InfoContainer = styled.div`
padding:50px;
flex:1;`
const Title = styled.h1`
font-size:70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;

font-weight: 500;
leatter-spacing: 3px;`;

const Button = styled.button`
padding: 10px;
font-size:20px;
backgound-color: transparent;
cursor: pointer;
`;




export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

   if(direction==="left") {
       setSlideIndex(slideIndex > 0 ? slideIndex -1 : 7 )
   } else {
       setSlideIndex(slideIndex < 7 ? slideIndex +1 : 0)
   }
            
   };

    return (
  


        <Container>
                             <Arrow direction="left" onClick={() =>handleClick("left")}>

<ArrowLeftOutlined/>
</Arrow >
<Wrapper slideIndex={slideIndex}>
  {sliderItems.map(item=>(
   <Slide bg={item.bg}>
   <ImgContainer>
   <Image src={item.img} />
   </ImgContainer>
   <InfoContainer>
       <Title>{item.title}</Title>
       <Desc> {item.desc}</Desc>
       <Button>SHOW NOW </Button>
   </InfoContainer>
   </Slide>

   
   
      
  ))}
  
</Wrapper>
<Arrow direction="right" onClick={() =>handleClick("right")}>

<ArrowRightOutlined/>
</Arrow>

        </Container>
     
     )
    }