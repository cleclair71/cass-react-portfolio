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

const Container = styled.div`
height: 10rem;
background: var(--dark);
border-radius: 0.5rem;
padding: .5rem;
cursor: pointer;
overflow: hidden;
position: relative;
margin: 0 0.5rem;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
}
.desc{
    position: absolute;
    right: 0;
    bottom: -10rem;
    left: 0;
    text-align: left;
    padding: .5rem;
    background: var(--background);
    transition: bottom 400ms ease-in-out;
    h1{
        font-size: 1.5rem;
        font-family: "Just Me Again Down Here", cursive;
        font-weight: 400;
    }
    p{
        font-size: 1rem;
        font-family: "josefin slab", serif;
        width: 90%;
        a{
            margin-left: 0.5rem;
            color: var(--orange);
        }
    }
}

:hover > img{
    transform: scale(1.2);
    }
    :hover > .desc{
        bottom: 0;
        }
        `