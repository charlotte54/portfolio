import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Cat from '../subComponents/cat/Cat'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 65vw;
height:65vh;
display: flex;
background: linear-gradient(
    to left,
    #9b7a5a 50%,
    ${props => props.theme.body} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    #9b7a5a 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
background-color: ${props => props.theme.text};
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid #9b7a5a;
    z-index:1;
    
`

const CatSize=styled.div`

transform: scale(0.8);

@media screen and (max-height: 520px) {
    transform: scale(0.6);
}

@media screen and (max-height: 400px) {
    transform: scale(0.4);
}

@media screen and (max-height: 340px) {
    transform: scale(0.35);
}
@media screen and (max-height: 300px) {
    transform: scale(0.3);

@media screen and (max-height: 250px) {
    transform: scale(0.2);
}

@media screen and (max-height: 200px) {
    display:none;
}
`

const CatContainer =styled.div`
position: absolute;
top: ${props => '55%'  };
left: ${props => '50%'  };
transform: translate(-50%,-50%);
 
@media screen and (max-width: 480px) {
   top: ${props => '65%'  };
   left: ${props => '50%'  };
}

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
    font-family: 'Nunito', sans-serif;
}
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '65vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Charlotte.</h3>
                    <h6>I'm a junior developer based in London. My interests lie in building React applications. I worked at IoT company for 1 yr 7 mos.
                  </h6>
                    
                 </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                 
                    <CatContainer>
                    <CatSize>
                   <Cat />
                   </CatSize>
                </CatContainer>
               
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
