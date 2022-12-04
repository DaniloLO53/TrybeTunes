/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Rectangle({ blocks }) {
  // console.log(blocks);

  // const animationLoop = setInterval(() => {
  //   console.log(0);
  // }, 3000);

  return (
    <StyledRectangle>
      {blocks}
    </StyledRectangle>
  );
}

const StyledRectangle = styled.span`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column-reverse;
  /* align-items: flex-end; */
  justify-content: flex-start;
`;

Rectangle.propTypes = {
  blocks: PropTypes.string.isRequired,
};

export default Rectangle;
