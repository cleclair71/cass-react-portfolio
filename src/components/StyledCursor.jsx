import React, { useEffect, useState } from "react";
import styled from "styled-components";


// event listener for cursor
const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleCursorMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleCursorMove);

        return () => {
            document.removeEventListener("mousemove", handleCursorMove);
        };
    }, []);

    // event listener for cursor hover
    useEffect(() => {
        const handleLinkHoverEvents = () => {
            const clickableElements = document.querySelectorAll('a, button, input');

            clickableElements.forEach((el) => {
                el.addEventListener('mouseover', () => {
                    document.body.classList.add('cursor-hover');
                });

                el.addEventListener('mouseout', () => {
                    document.body.classList.remove('cursor-hover');
                });
            });

            return () => {
                clickableElements.forEach((el) => {
                    el.removeEventListener('mouseover', () => { });
                    el.removeEventListener('mouseout', () => { });
                });
            };
        };

        handleLinkHoverEvents();
    }, []);

    // cursor styling
    return <StyledCursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default Cursor;

const StyledCursor = styled.div`
position: fixed;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  backdrop-filter: blur(7px);
  transition: all 0.3s ease;
  transition-property: background-color, transform;
  z-index: 9999;
  background-color: transparent;
  body.cursor-hover & {
    backdrop-filter: blur(.1px);
    transform: translate(-50%, -50%) scale(1.2);
  }
`;