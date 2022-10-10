import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Box = styled(motion(NavLink))`
width: calc(10rem + 15vw);
text-decoration: none;
height: 15rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;
display: flex;
flex-direction: column;
z-index:5;
&:hover{
    color:${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width:100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
${Box}:hover &{
    border:1px solid ${props => props.theme.body};
}
`

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top:1rem;
font-family: 'Karla',sans-serif;
font-weight:700;
border-bottom: 1px solid ${props => props.theme.text};
${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};
}
`

const HashTags = styled.div`
padding: 0.5rem 0;
`
const Tag= styled.span`
padding-right: 0.5rem;
`

const GithubLink = styled(motion(NavLink))`
width: calc(10rem + 15vw);
text-decoration: none;
height: 1.5rem;
fontSize:1rem;
color: ${props => props.theme.text};
padding: 1rem;
color: ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;
display: flex;
flex-direction: column;
z-index:5;
&:hover{
    color:${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}
`


const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const ProjectComponent = (props) => {
    const {name, tags, imgSrc, github, link} = props.blog;
    return (
        <Container
        variants={Item}
        
        >
            <Box target="_blank" to={{pathname: link}}
        >
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <HashTags>
                {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </HashTags>
        
        </Box>
        <GithubLink target='_blamk' to={{pathname:github}}> 
        <div  style={{display:"inline"}}>
        <FontAwesomeIcon icon={faGithub} style={{paddingRight:"0.5rem"}}/>
 {github}  </div></GithubLink>      
        </Container>
    )
}

export default ProjectComponent