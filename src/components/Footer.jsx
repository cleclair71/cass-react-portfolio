import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineLocationMarker, HiOutlineMailOpen } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    const columns = [
      {
        title: "Column 1",
        items: ["Item 1", "Item 2", "Item 3", "Item 4"]
      },
    
      {
        title: "Contact",
        items: [
          {
            name: "Toronto, ON",
            icon: <HiOutlineLocationMarker />,
          },
          {
            name: "+1 (555) 555-5555",
            icon: <FiPhoneCall />,
          },
          {
            name: <a href="mailto:cassieleclair71@gmail.com">mail</a>,
            icon: <HiOutlineMailOpen />,
          },
        ]
      }
    ];

      return (
        <FooterContainer id="footer">
          {columns.map((column, index) => (
            <Column key={index}>
              <h2>{column.title}</h2>
              <ul>
                {column.items.map((item, idx) => (
                  <li key={idx}>
                    {typeof item === "object" ? (
                      <>
                        {item.icon}
                        {item.name}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </Column>
          ))}
          <IconContainer>
            <a href="https://github.com/cleclair71">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/cassie-leclair-931093b6/">
              <AiFillLinkedin />
            </a>
          </IconContainer>
        </FooterContainer>
      );
    };

export default Footer;

const FooterContainer = styled.div`
width: 100%;
  backdrop-filter: blur(5px);
  background: rgba(255,255,255,0.3);
  padding: 2rem;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

 
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  a {
    margin: 0 10px;
    color: white;
    font-size: 1.5rem;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    color: var(--white);
    font-size: 2rem;
    font-weight: 200;
  }

  ul {
    list-style: none;
    padding: 0;
    color: var(--white);
  

    li {
      margin-top: 1rem;
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      font-weight: 200;
    }
  }
`;

