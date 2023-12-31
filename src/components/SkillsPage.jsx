import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
import { Design, Develope } from './AllSvgs';

import PowerButton from "../subComponents/powerButton";
import LogoComponent from "../subComponents/logoComponent";
import SocialIcons from "../subComponents/socialIcons";
import ParticleComponent from '../subComponents/particleComponent';

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;

    font-family: 'Ubuntu mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`;

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
`;

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
`;

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light'/>

                {/* Komponent dla Frontend Developera */}
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        I value the business or brand for which I'm creating, thus I enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, Github, Webstorm, Figma.
                        </p>
                    </Description>
                </Main>

                {/* Komponent dla Bot Developera */}
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Bot Developer
                    </Title>
                    <Description>
                        I specialize in creating powerful and efficient bots using Discord.js to enhance user experiences and automate tasks.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Discord.js, Node.js, Chatbots, API Integration, Bot Frameworks.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, Github, Discord Developer Portal.
                        </p>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    );
};


export default Skills;
