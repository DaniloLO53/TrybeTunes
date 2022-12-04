import React from 'react';
import styled from 'styled-components';
import PlayerAnimation from '../components/PlayerAnimation';

function Login() {
  return (
    <StyledLogin>
      <PlayerAnimation />
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  background-color: #333333;
  min-width: 100vw;
  min-height: 100vh;
`;

export default Login;
