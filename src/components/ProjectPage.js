import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PawButton  from '../subComponents/PawButton'
import {Blogs} from '../data/BlogData';
import BlogComponent from './BlogComponent'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'

const HomeTips = styled.div`
&:hover{
  &:after {
    content: "Go Bcak to Home";
    font-family: 'Shadows Into Light', cursive;
    color: ${props => props.theme.text};
    position: fixed;
    top: 7rem;
    font-size:1.5rem;
    left:50%;
    transform: translate(-50%,-50%);
  }
}
`


const MainContainer = styled(motion.div)`
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => props.theme.body};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }

const ProjectPage = () => {

    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent />
                <HomeTips>
            <PawButton /></HomeTips>
                <SocialIcons />
            
            
<Center>
<Grid>

{
    Blogs.map(blog => {
        return <BlogComponent key={blog.id} blog={blog} />
    })
}
</Grid>

</Center>
<BigTitle text="My Projects" top="3rem" left="5rem" />
            </Container>
        </MainContainer>
    )
}

export default ProjectPage
