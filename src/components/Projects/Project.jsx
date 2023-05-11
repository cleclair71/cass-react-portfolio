import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, desc } = props.item;
    return (
        <Container className='project'>
            <img src={img} alt="project" />
            <div className="desc">
                <h1>Description</h1>
                <p>{desc}</p>
                <a href="/">View</a>
            </div>
        </Container>
    )
}

export default Project;

const Container = styled.div``;