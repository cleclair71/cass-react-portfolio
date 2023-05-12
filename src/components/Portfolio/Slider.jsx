// import React, { useRef } from 'react'
// import Slider from 'react-slick';
// import styled from 'styled-components';
// import Project from './Project';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// let data = [
//     {
//         img : "https://www.pexels.com/photo/photo-of-vintage-stationery-776632/", 
//         desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
//     },
//     {
//         img : "https://www.pexels.com/photo/photo-of-vintage-stationery-776632/", 
//         desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
//     },
//     {
//         img : "https://www.pexels.com/photo/photo-of-vintage-stationery-776632/", 
//         desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
//     },
//     {
//         img : "https://www.pexels.com/photo/photo-of-vintage-stationery-776632/", 
//         desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
//     },
//     {
//         img : "https://www.pexels.com/photo/photo-of-vintage-stationery-776632/", 
//         desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
//     },

// ];

// var settings = {
//     className: "center",
//     centerMode: true,
//     infinite: false,
//     dots: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     arrows: true,
//     responsive: [
//         {
//             breakpoint: 990,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: false,
//                 dots: true,
//                 centerMode: true,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 2,
//               initialSlide: 2,
//               centerMode : false
//             }
//             },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 centerMode : false
//             }
//         }
//     ]
// };

// const SliderComp = () => {
//     const sliderRef = useRef(null);
//     let sliderPro = "";
//     sliderPro = data.map((item, i) => (
//         <Project item = {item} key={i}/>
//     ))
//     return (
//         <Container>
//             <Slider ref={sliderRef} {...settings}>
//                 {sliderPro}
//             </Slider>
//             <Buttons>
//                 <button onClick={() => sliderRef.current.slickPrev()} className='back'><IoIosArrowBack /></button>
//                 <button onClick={() => sliderRef.current.slickNext()}className='next'><IoIosArrowForward /></button>
//             </Buttons>
           
//         </Container>
//     )
// }

// export default SliderComp;

// const Container = styled.div`
//   position: relative;
// `

// const Buttons = styled.div`
// button {
//     width: 2rem;
//     height: 2rem;
//     background-color: var(--dark);
//     border: none;
//     cursor: pointer;
//     position: absolute;
//     top: 45%;
//     right: -1rem;
// }
//     .back{
//         left: -1rem;
//     }
// }`
import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850703/screen1_ibajko.jpg",
        disc : "Work Day Scheduler is a simple calendar application that allows the user to save events for each hour of the day."
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850619/The_weather_dj_1_hxwsmd.jpg",
        disc : "Weather DJ uses two API's, YouTube and OpenWeather, to create a unique and personalized musical experience"
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850526/transparentwhite_kooyrl.png",
        disc : "Nomad Nebula is an interactive full-stack web app that serves as a stargazing companion and social platform for stargazers."
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850738/Capture_gwoxcq.jpg",
        disc : "Weather Dashboard allows users to retrieve weather information by city"
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683851172/Capture_ek2ckg.jpg",
        disc : "CrewCard is a CLI app that is designed to help managers keep track of their employees"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
  export default function SliderComp() {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

// export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(19, 38, 42, 0.4);
    cursor: pointer;
    color: var(--white);
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`