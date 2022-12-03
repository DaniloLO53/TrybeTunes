import React from 'react';
import styled from 'styled-components';
import Favorites from './Favorites';

function Search() {
  return (
    <StyledSearch>
      Search
      <Favorites />
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
`;

export default Search;
