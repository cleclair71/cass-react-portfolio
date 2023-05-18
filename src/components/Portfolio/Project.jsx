import React from 'react'
import styled from 'styled-components';


// This is the Portfolio layout component
const Project = ({ item }) => {
    return (
        <Container className='project'>
            <img src={item.img} alt="project" />
            <div className="disc">
                
                <p>{item.disc}
                <a href={item.link} target="_blank" rel="noopener noreferrer">VIEW</a>
                </p>
            </div>
        </Container>
    )
}


export default Project;

const Container = styled.div`
    height: 10rem;
    bbackdrop-filter: blur(10px);
    background: rgba(255,255,255,0.3);
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(19, 38, 42, 0.5), rgba(19, 38, 42, 0.9));
        transition: all 400ms ease-in-out;
      
    
        p{
            width: 90%;
            font-size: 0.8rem;
            font-family: 'Montserrat', sans-serif;
            a{
                margin-left: 0.4rem;
                color: white;
                text-transform: uppercase;
                font-weight: 600;
                text-decoration: none;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
        opacity: 0.5;
        transition: all 400ms ease-in-out;
    }

    :hover > .disc{
        bottom: 0;
    }

`