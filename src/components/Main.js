import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PawButton from '../subComponents/PawButton'
import SocialIcons from '../subComponents/SocialIcons'
import { MousePointer } from './AllSvgs'
import Intro from './Intro'

const H1 = styled.h1`
display: inline-block;
font-family: 'Shadows Into Light', cursive;
color:#454551;
`

const ClickHere = styled.h1`
display: inline-block;
font-family: 'Shadows Into Light', cursive;
color:#9b7a5a;
&:hover{
color:#f1f1f1;
}
`

const ProjectTips = styled.div`
&:hover{
  &:after {
    content: "Look at my React.js projects! →";
    font-family: 'Shadows Into Light', cursive;
    color: ${props => props.theme.text};
    position: fixed;
    top: 55%;
    font-size:1.5rem;
    left:85%;
    transform: translate(-50%,-50%);
    @media screen and (max-width: 950px) {
        left:80%;
        }
    @media screen and (max-width: 600px) {
        left:76%;
    }
    @media screen and (max-width: 480px) {
        left:79%;
    }
  }
}
`


const SkillsTips = styled.div`
&:hover{
  &:after {
    content: "Look at my technical skills!";
    font-family: 'Shadows Into Light', cursive;
    color: ${props => props.theme.text};
    position: fixed;
    bottom: 10%;
    font-size:1.5rem;
    left:50%;
    transform: translate(-50%,-50%);
  }
}
`

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`



const PROJECT = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute; 
top: 60%;
right: calc(1rem + 1vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
@media screen and (max-width: 480px) {
    right: -20px;
    }
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const pulse = keyframes`
0% {
       transform: rotate(0);
   }
89% {
       transform: rotate(0) ;
   }
90% {
       transform: rotate(20deg) ;
   }  
91% {
       transform: rotate(0) ;
   }
92% {
       transform: rotate(20deg) ;
   }
93% {
       transform: rotate(0);
   }
 
`



const Pointer = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
color:#9b7a5a;
align-items: center;
transition: all 1s ease;

 
@media screen and (max-width: 720px) {
   top: ${props => props.click ? '85%' : '50%'};
   left: ${props => props.click ? '92%' : '50%'};
}


&>:first-child{
    animation: ${pulse} infinite 5s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
`


const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #9b7a5a;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv click={click} />
            <Container>
                <PawButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />


                <Pointer click={click}>


                    <MousePointer onClick={() => handleClick()} width={click ? 40 : 100} height={click ? 40 : 100} fill='currentColor' />

                    <ClickHere onClick={() => handleClick()}>Click here</ClickHere>

                </Pointer>
                
                <ProjectTips>
                    <PROJECT to="/project">
                        <motion.h4
                            initial={{
                                y: -200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <H1>Projects</H1>
                        </motion.h4>
                    </PROJECT>
                </ProjectTips>
                <BottomBar>
                    <SkillsTips>
                        <SKILLS to="/skills">
                            <motion.h4
                                initial={{
                                    y: 200,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <H1>Skills</H1>
                            </motion.h4>
                        </SKILLS>
                    </SkillsTips>
                </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
