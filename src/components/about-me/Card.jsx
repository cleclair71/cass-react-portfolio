import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    const {Icon, title, description} = props;
    return (
        <Container>
            <span className="dark"><Icon /></span>
            <h3>{title}</h3>
            <p>{description}</p>
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: var(--background)!important;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 0 10px #000;
    span {
        font-size: 4rem;
        }
        h3 {
            font-size: 2rem;
            padding-bottom: 1rem;
            font-family: "Just Me Again Down Here", cursive;
            font-weight: 400;
            font-family: 'Barlow Condensed', sans-serif;

        }
        
        p {
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
        }`;