import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    const {Icon, title, description} = props;
    return (
        <Container>
            <span className="red"><Icon /></span>
            <h3>{title}</h3>
            <p>{description}</p>
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: var(---background)!important;
    padding: 1rem;
    text-align: center;
    span {
        font-size: 4rem;
        }
        h3 {
            font-size: 2rem;
            padding-bottom: 1rem;
            font-family: "Just Me Again Down Here", cursive;
            font-weight: 400;

        }
        
        p {
            font-size: 1rem;
            font-family: "josefin slab", serif;
        }`;