import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/powerButton";
import LogoComponent from "../subComponents/logoComponent";
import SocialIcons from "../subComponents/socialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvgs";


const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2,h3,h4,h5,h6{
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`
const Container = styled.div`
    padding: 2rem;
`
const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
    
`

const Soon = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
    
`
const Work = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
    
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

const About = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
    
`
const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
    
`
const Center = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>:last-child{
        padding-top: 1rem;
    }

`


const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent />
                <SocialIcons />

                <Center>
                    <YinYang width={150} height={150} fill='currentColor'></YinYang>
                    <span>Click Here</span>
                </Center>

                <Contact target="_blank" to="https://discord.gg/yJfcEqPvnB">
                    <h2>
                        Send Message
                    </h2>
                </Contact>

                <Soon to="/">
                    <h2>
                        Soon
                    </h2>
                </Soon>

                <Work to="/work">
                    <h2>
                        Work
                    </h2>
                </Work>


                <BottomBar>
                    <About to="/about">
                        <h2>
                            About
                        </h2>
                    </About>

                    <Skills to="/skills">
                        <h2>
                            My Skills
                        </h2>
                    </Skills>
                </BottomBar>

            </Container>
        </MainContainer>
    )
}

export default Main;

