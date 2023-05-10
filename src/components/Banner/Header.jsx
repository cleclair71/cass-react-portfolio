import React, { useState } from 'react';
import styled from 'styled-components';
import { GiPaintBrush } from 'react-icons/gi';

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <span className="black"><GiPaintBrush /></span>
                <h1>portfolio</h1>
            </Logo>
            <Nav bar={bar}>
                <span><a href="#about">about me</a></span>
                <span><a href="#project">portfolio</a></span>
                <span><a href="#footer">contact</a></span>
                <span><a href="#resume">resume</a></span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 1.7rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media (max-width: 840px) {
        width: 90%;
        }
        @media (max-width: 640px) {
            .bars{
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 100;
                padding: 0.5rem;
                .bar {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: ${props => props.bar ? "transparent" : "#fff"};
                    transition: background-color 400ms ease-in-out;
                    :before, :after {
                        content: "";
                        height: 2px;
                        width: 100%;
                        background-color: var(--background);
                        position: absolute;
                    }
                    :before {
                        transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                        transition: all 400ms ease-in-out;
            }`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        font-size: 2rem;
        }
        h1 {
            font-size: 2rem;
            font-weight: 200;
            font-family: 'Just Me Again Down Here';
            text-transform: uppercase;`

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
    height: ${props => props.bar ? "100vh" : 0};
    z-index: 100;
    transition: height 400ms ease-in-out;
}
span {
    margin-left: 1rem;
    a {
        color: var(--black);
        text-decoration: none;
        font-family: 'Just Me Again Down Here', cursive;
        font-size: 1.4rem;
        position: relative;
        font-weight: 300;
        :before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 2px;
            background-color: var(--red);
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
                    };`