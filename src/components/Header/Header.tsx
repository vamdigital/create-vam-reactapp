import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { fetchUsers, logout } from "../../features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

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
  width: 20%;
  justify-content: space-between;

  a {
    padding: 0 10px;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  span {
    display: flex;
    font-size: 14px;
  }
`;

interface IProps {
  ctxCount: number;
}
export const HeaderComponent = ({ ctxCount }: IProps) => {
  const {
    users: { userName },
  } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavList>
          <NavListItem>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/users">Users</NavLink>
          </NavListItem>
        </NavList>
      </NavWrapper>
      <CounterWrapper>
        <span>CTXCount: {ctxCount}</span>
        {!userName && (
          <button onClick={() => dispatch(fetchUsers())}>Login</button>
        )}
        {userName && (
          <>
            <span>user : {userName}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        )}
      </CounterWrapper>
    </HeaderWrapper>
  );
};
