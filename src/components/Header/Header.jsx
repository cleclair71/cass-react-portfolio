import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCandleFlame } from 'react-icons/gi';

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <span className="green"><GiCandleFlame /></span>
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