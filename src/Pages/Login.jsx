import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <StyledLogin>
      <button
        type="button"
      >
        <Link to="/search">
          Botao
        </Link>
      </button>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
`;

export default Login;
