import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Checkbox = ({ label, onCheckboxChange, status }) => {
  const [isActive, setIsActive] = useState(status);
  //   console.log("isActive", isActive);
  //   console.log("status", status);

  useEffect(() => {
    setIsActive(status);
  }, [status]);

  const checkboxHandler = () => {
    const nextIsActive = !isActive;
    setIsActive(nextIsActive);
    // onCheckboxChange(nextIsActive);
    onCheckboxChange(label);
  };

  return (
    <Wrapper onClick={checkboxHandler}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            strokeWidth="1"
            rx="5.5"
            stroke="#b48a39"
          />
          {isActive && (
            <path
              d="M7 12L11.1667 16L17 9"
              stroke="#b48a39"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
      <div className="label">
        <p>{label}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  margin: 10px;
  align-items: center;

  .label {
    margin-left: 10px;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default Checkbox;
