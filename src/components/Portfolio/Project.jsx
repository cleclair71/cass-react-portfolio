// import React from 'react'
// import styled from 'styled-components';

// const Project = (props) => {
//     const { img, desc } = props.item;
//     return (
//         <Container className='project'>
//             <img src={img} alt="project" />
//             <div className="desc">
//                 <h1>Description</h1>
//                 <p>{desc}</p>
//                 <a href="/">View</a>
//             </div>
//         </Container>
//     )
// }

// export default Project;

// const Container = styled.div`
// height: 10rem;
// background: var(--dark);
// margin: 0 0.5rem;
//     padding: 0.5rem;
//     border-radius: 5px;
// cursor: pointer;
// overflow: hidden;
// position: relative;
// img{
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 400ms ease-in-out;
// }
// .desc{
//     position: absolute;
//     right: 0;
//     bottom: -10rem;
//     left: 0;
//     text-align: left;
//     padding: .5rem;
//     background: var(--background);
//     transition: bottom 400ms ease-in-out;
//     h1{
//         font-size: 1.5rem;
//         font-family: "Just Me Again Down Here", cursive;
//         font-weight: 400;
//     }
//     p{
//         font-size: 1rem;
//         font-family: "josefin slab", serif;
//         width: 90%;
//         a{
//             margin-left: 0.5rem;
//             color: var(--orange);
//         }
//     }
// }

// :hover > img{
//     transform: scale(1.2);
//     }
//     :hover > .desc{
//         bottom: 0;
//         }
//         `

import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>About</h1>
            <p>{disc}
            <a href="/">demo</a>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #13262a;
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
        h1{
            font-size: 1rem;
            font-weight: 200;
    padding-bottom: 1.2rem;
    text-transform: uppercase;
    font-family: 'Josefin Slab', serif;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            font-family: 'Josefin Slab', serif;
            a{
                margin-left: 0.4rem;
                color: red;
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