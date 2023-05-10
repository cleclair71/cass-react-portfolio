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

const Container = styled.div``;