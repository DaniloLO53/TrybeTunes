/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rectangle from './Rectangle';

function PlayerAnimation() {
  const [minQuantity, setMinQuantity] = useState(0);

  const relationships = {
    minorRect: [0, 2, 4, 9, 14],
    mediumRect: [1, 3, 6, 8, 10, 13],
    bigRect: [5, 12],
    biggerRect: [7, 11],
  };

  const values = Object.values(relationships);
  const entries = Object.entries(relationships);

  const playerFunction = (counter) => {
    // function: A * | B*sin(x) + C*sin(D + E*sin(x)) |
    const A = 15;
    const B = 0.2;
    const C = 10;
    const D = 0.3;

    const { sin: s, abs } = Math;
    const x = counter;
    return A * abs(s((D * x) / 20)) + B * s((C * x) / 20);
  };

  const minQuantHandle = () => {
    let counter = 0;
    let delta = 7;

    const intervalHandle = () => {
      counter += delta;

      if (counter > 500 || counter < 0) {
        delta *= -1;
      }
      const quant = Math.floor(playerFunction(counter));
      const subOrAdd = Math.ceil(Math.random() - 0.5);
      setMinQuantity(quant + subOrAdd);
    };

    let interval = setInterval(() => intervalHandle(), 80);

    setInterval(() => {
      clearInterval(interval);
      interval = setInterval(() => intervalHandle(), 80);
    }, 10000);
  };

  useEffect(() => {
    minQuantHandle();
  }, []);

  const block = (index) => (
    <StyledBlock
      color={index}
    />
  );

  // chooses the first element of the "values" element
  const chooseValueByIndex = (index) => values
    .find((array) => array.includes(index))[0];

  const chooseRect = (index) => entries
    .find((entry) => entry[1][0] === chooseValueByIndex(index))[0];

  const chooseBlockQuantity = (type) => {
    let quantity;
    const blocks = [];

    const randomSum = Math.ceil(Math.random() - 0.5);

    switch (type) {
      case 'minorRect':
        quantity = minQuantity + randomSum;
        break;
      case 'mediumRect':
        quantity = minQuantity + 5 + randomSum;
        break;
      case 'bigRect':
        quantity = minQuantity + 8 + randomSum;
        break;
      case 'biggerRect':
        quantity = minQuantity + 11 + randomSum;
        break;
      default:
        return 1;
    }

    const randomizeEachRect = () => quantity + Math.floor(Math.random() * 1);

    for (let i = 0; i < randomizeEachRect(); i += 1) {
      blocks.push(block(i));
    }

    return blocks;
  };

  const rectangles = () => {
    const elements = [];

    for (let i = 0; i < 15; i += 1) {
      elements.push(
        <Rectangle blocks={chooseBlockQuantity(chooseRect(i))} />,
      );
    }

    return elements;
  };

  return (
    <StyledPlayer>
      <StyledObject>
        {rectangles()}
      </StyledObject>
      <StyledGround />
    </StyledPlayer>
  );
}

const StyledBlock = styled.span`
  width: 60px;
  height: 15px;
  margin-top: 5px;
  margin-right: 8px;
  border-radius: 3px;
  background-color: ${({ color }) => {
    if (color >= 0 && color <= 3) return '#4C0168';
    if (color > 3 && color <= 6) return '#B500F7';
    if (color > 6 && color <= 11) return '#D04DFF';
    if (color > 11 && color <= 15) return '#e099f9';
    return '#f5dbff';
  }};

box-shadow: ${({ color }) => {
    if (color >= 0 && color <= 3) return '0 0 20px #4C0168';
    if (color > 3 && color <= 6) return '0 0 20px #B500F7';
    if (color > 6 && color <= 11) return '0 0 20px #D04DFF';
    if (color > 11 && color <= 15) return '0 0 20px #e099f9';
    return '#f5dbff';
  }};
`;

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  min-height: 90vh;
`;

const StyledObject = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 80vw;
  /* background-color: blue; */
  min-height: 60vh;
  /* background-color: green; */
`;

const StyledGround = styled.div`
min-height: 5px;
  min-width: 300px;
  background-color: purple;
`;

export default PlayerAnimation;
