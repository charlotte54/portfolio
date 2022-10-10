import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Github from './fontawesome/Github'
import Hackerrank from './fontawesome/Hackerrank'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom:0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}


@media screen and (max-width: 480px) {
    top:15vh;}

@media screen and (max-width: 370px) {
    left: 0.5rem;}


`
const Hover = styled.div`
&:hover{
   transform: scale(1.2);

`

const Line = styled.div`
width: 4px;
height: 8rem;

background-color:#fff;

@media screen and (max-width: 480px) {
    display:none;}
`

const SocialIcons = () => {
    return (
        <Icons>

            <div>
                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.4 }}
                >  <Hover>
                        <NavLink style={{ color: 'inherit' }} target='_blamk' to={{ pathname: 'https://www.hackerrank.com/charlotte73' }}>
                            <Hackerrank />
                        </NavLink>
                    </Hover></motion.div>
            </div>
            <div>
                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1 }}
                >
                    <Hover>
                        <NavLink style={{ color: 'inherit' }} target='_blamk' to={{ pathname: "https://github.com/charlotte54" }}>
                            <Github />
                        </NavLink>
                    </Hover></motion.div>
            </div>



            <Line />
        </Icons>
    )
}

export default SocialIcons
