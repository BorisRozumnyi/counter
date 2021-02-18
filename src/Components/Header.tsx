import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { frontendUrls } from '../routes/frontendUrls';

export const Header = () => (
  <NavWrapper>
    <StyledLink to={frontendUrls.about}>About</StyledLink>
    <StyledLink to={frontendUrls.counter}>Counter</StyledLink>
  </NavWrapper>
);

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(NavLink)`
  color: #63abb7;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  padding: 1rem 3rem;
  margin: 0.5rem 1rem;
  background: transparent;
  border: 2px solid #63abb7;
  transition: 0.2s all;
  &:hover {
    background: #63abb7;
    color: white;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    width: 50%;
  }
`;
