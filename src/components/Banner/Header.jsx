import React, { useState } from 'react';
import styled from 'styled-components';
import { GiPaintBrush } from 'react-icons/gi';

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <span className="black"><GiPaintBrush /></span>
                <h1>My Portfolio</h1>
            </Logo>
            <Nav bar={bar}>
                <span><a href="#home">Home</a></span>
                <span><a href="#service">Services</a></span>
                <span><a href="#project">Projects</a></span>
                <span><a href="#footer">Portfolio</a></span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header;

const Container = styled.div``
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        font-size: 2rem;
        }
        h1 {
            font-size: 1.5rem;
            font-weight: 600;`
const Nav = styled.div`
@media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    inset: 0;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-weight: 700;
    height: 100vh;
    z-index: 100;
    transition: height 400ms ease-in-out;
}
span {
    margin-left: 1rem;
    a {
        color: var(--black);
        text-decoration: none;
        font-family: var(--hand);
        position: relative;
        font-weight: 300;
        :before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 2px;
            background-color: var(--black);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
            }
            :hover:before {
                transform: scaleX(1);
                transform-origin: left;
                }
                :hover {
                    opacity: 0.8;
                    }
                    }
                    }`