import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import Slider3 from "./slider3";
import Slider4 from "./slider4";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sliders = [
    <Slider1 key={0} />,
    <Slider2 key={1} />,
    <Slider3 key={2} />,
    <Slider4 key={3} />,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызов при монтировании компонента

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex(
      (prevIndex) =>
        (prevIndex + newDirection + sliders.length) % sliders.length
    );
  };

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -250) {
      paginate(1);
    } else if (offset > 50 || velocity > 250) {
      paginate(-1);
    }
  };

  const animationDirection = isMobile ? 0 : 1300;

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{
            x: direction > 0 ? animationDirection : -animationDirection,
          }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? -animationDirection : animationDirection }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5} // Можно уменьшить для меньшей "резиновости" при свайпе
          onDragEnd={handleDragEnd}
        >
          {sliders[index]}
        </motion.div>
      </AnimatePresence>
      <Button className="prev" onClick={() => paginate(-1)}>
        {"<"}
      </Button>
      <Button className="next" onClick={() => paginate(1)}>
        {">"}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 30px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  z-index: 2;
  box-shadow: var(--shadow-1);
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export default Slider;
