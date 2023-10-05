import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./themes";


import PowerButton from "../subComponents/powerButton";
import LogoComponent from "../subComponents/logoComponent";
import SocialIcons from "../subComponents/socialIcons";
import ParticleComponent from '../subComponents/particleComponent';

import spaceman from '../assets/Images/spaceman.png'

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

`

const float = keyframes`
    0% {transform: translateY(-10px)}
    50% {transform: translateY(15px) translateX(15px)}
    100% {transform: translateY(-10px)}
`

const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;
    animation: ${float} 4s ease infinite;

    img{
        width: 100%;
        height: auto;
    }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color:  ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`


const About = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={spaceman} alt="" />
                </Spaceman>

                <Main>

                    I'm a 17-year-old front-end developer and Discord bot developer from Poland. I love creating clean and user-friendly websites that offer a great experience.
                    <br /><br />
                    I'm passionate about exploring the world of front-end technologies and always eager to try new things and work on exciting projects.
                    <br /><br />
                    I believe that putting your heart into your work turns everything into an art form. You can reach out to me through my social links.
                </Main>

            </Box>
        </ThemeProvider>
    );
};


export default About;
