
import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850703/screen1_ibajko.jpg",
        disc : "Work Day Scheduler is a simple calendar application that allows the user to save events for each hour of the day.",
        link : "https://cleclair71.github.io/05-workday-calendar/"
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850619/The_weather_dj_1_hxwsmd.jpg",
        disc : "Weather DJ uses two API's, YouTube and OpenWeather, to create a unique and personalized musical experience",
        link : "https://cleclair71.github.io/The-Weather-DJ/"
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850526/transparentwhite_kooyrl.png",
        disc : "Nomad Nebula is an interactive full-stack web app that serves as a stargazing companion and social platform for stargazers.",
        link : "https://nomad-nebula.herokuapp.com/"
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683850738/Capture_gwoxcq.jpg",
        disc : "Weather Dashboard allows users to retrieve weather information by city",
        link: "https://cleclair71.github.io/Weather-Dashboard/"
    },
    {
        img : "https://res.cloudinary.com/dpwluiwee/image/upload/v1683851172/Capture_ek2ckg.jpg",
        disc : "CrewCard is a CLI app that is designed to help managers keep track of their employees",
        link : "https://github.com/cleclair71/CrewCard"
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
    width: 3.5rem;
    height: 3.5rem;
    background-color: rgba(19, 38, 42, 0.4);
    cursor: pointer;
    color: var(--white);
    border: none;
    position: absolute;
    top: 45%;
    font-size: 1.5rem;
    right: -3rem;
    border-radius: 5px;
  }

  .back{
    left: -3rem;
    
  }

  @media (max-width: 640px) {
    width: 2rem;
    height: 2rem;
    right: -2rem;
    top: 50%;
  }
    .back{
      left: -1rem;
    }

    .next{
      right: -1rem;
    }
  
    
`