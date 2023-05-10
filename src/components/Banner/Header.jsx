import React, { useState } from 'react';
import styled from 'styled-components';
import { GiPaintBrush } from 'react-icons/gi';

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <span className="green"><GiPaintBrush /></span>
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
const Logo = styled.div``
const Nav = styled.div``