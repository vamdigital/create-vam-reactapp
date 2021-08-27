import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  background: #dede;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const NavListItem = styled.li`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const CounterWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;

  span {
    display: flex;
    font-size: 14px;
  }
`;
export const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavList>
          <NavListItem>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
          </NavListItem>
        </NavList>
      </NavWrapper>
      <CounterWrapper>
        <span>CTXCount: 0</span>
        <span>RTKCount: 0</span>
      </CounterWrapper>
    </HeaderWrapper>
  );
};
