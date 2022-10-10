import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PawButton from '../subComponents/PawButton';
import BigTitle from '../subComponents/BigTitlte'

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




const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Nunito', sans-serif;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 25px;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
              
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
 <HomeTips>
            <PawButton /></HomeTips>
            <Main>
<Title>
     Full Stack Skills
</Title>

<Description>
<strong>Front End</strong>
<p>
HTML, CSS, React.js
</p>
</Description>
<Description>
<strong>Database</strong>
<p>
MongoDB
</p>
</Description>
<Description>
<strong>Back End</strong>
<p>
Node.js, Express, Python
</p>
</Description>
<Description>
<strong>DevOps</strong>
<p>
AWS
</p>
</Description>

            </Main>
            <Main>
<Title>
    Salesforce Skills
</Title>
<Description>
<strong>Administrator</strong>
<p>
custom objects, fields, relationships, rules, reports and dashboards, approval processes, profiles, teams, and security, Flows
</p>
</Description>
<Description>
<strong>Developer</strong>
<p>
VF pages, LWCs, Aura Components
</p>
</Description>
<Description>
<strong>Pardot</strong>
<p>
Pardot form, List Emails, landing pages
</p>
</Description>
<Description>
<strong></strong>
<p>

</p>
</Description>


            </Main>

             <BigTitle text="My Skills" top="75%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage