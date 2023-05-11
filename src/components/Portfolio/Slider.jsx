import React, { useRef } from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let data = [
    {
        img : 'assets/project.JPG', 
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        img : 'assets/project.JPG',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        img : 'assets/project.JPG',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        img : 'assets/project.JPG',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        img : 'assets/project.JPG',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },

]

var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: true,
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

const SlideShow = () => {
    const sliderRef = useRef(null);
    let sliderPro = "";
    sliderPro = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
    return (
        <Container>
            <Slider {...settings} ref={sliderRef}>
                {sliderPro}
            </Slider>
            <Buttons>
                <button onClick={() => sliderRef.current.slickPrev()} className='back'><IoIosArrowBack /></button>
                <button onClick={() => sliderRef.current.slickNext()}className='next'><IoIosArrowForward /></button>
            </Buttons>
           
        </Container>
    )
}

export default SlideShow;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
button {
    width: 2rem;
    height: 2rem;
    background-color: var(--dark);
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
    
    .back{
        left: -1rem;
    }
}`; 