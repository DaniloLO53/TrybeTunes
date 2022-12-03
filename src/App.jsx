/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter, Outlet, Routes, Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/album:id" element={<Album />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="edit" element={<ProfileEdit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

const StyledApp = styled.div`

`;

export default App;
