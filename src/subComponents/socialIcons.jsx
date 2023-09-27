import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, YouTube } from '../components/AllSvgs';
import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;


    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.theme.text};
`

const SocialIcons = () => {
    return (
        <Icons>
            <div>
                <NavLink style={{color:'inherit'}} to="https://github.com/KraczeX" >
                    <Github width={25} height={25} fill='curentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} to="/" >
                    <Facebook width={25} height={25} fill='curentColor' />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} to="/" >
                    <YouTube width={25} height={25} fill='curentColor' />
                </NavLink>
            </div>

            <Line/>
        </Icons>

    );
}

export default SocialIcons;