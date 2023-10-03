import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
import { Design, Develope } from './AllSvgs';

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    font-family: 'Ubuntu mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);
`
const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;
`


const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Bot Developer
                    </Title>
                    <Description>
                    I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                    <Description>
                   <strong>I like to design</strong>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                    I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default Skills;
