import styled, { css } from "styled-components";
import { VscMenu } from "react-icons/vsc";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  padding: 10px 20px;
  width: 100%;

  color: #fff;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.5s ease-in-out;
  transform: translateY(0);

  > a {
    font-size: clamp(1.6rem, 5vw, 2.3rem);
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
  }

  ${(props) =>
    props.elementRef &&
    css`
      opacity: 1;
      transition: 0.5s ease-in-out;
      transform: translateY(0);
      background: #201a16;
    `}
`;
export const IconMenu = styled(VscMenu)`
  font-size: clamp(1.6rem, 5vw, 2rem);
  cursor: pointer;

  @media (min-width: 760px) {
    display: none;
  }
`;
export const NavBarLinks = styled.div`
  display: none;

  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    gap: 10px;

    > a {
      text-decoration: none;
      font-size: 20px;
      color: #fff;
      letter-spacing: 1px;

      :hover {
        text-decoration: underline;
      }
    }

    > button {
      padding: 10px 20px;
      border: 2px solid #fff;
      background: transparent;
      color: #fff;
      letter-spacing: 2px;
      font-size: 18px;
      margin-left: 20px;

      :hover {
        background: #fff;
        color: #000;
        cursor: pointer;
      }
    }
  }
`;
export const SideBar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  height: 100%;
  width: 100%;
  background: #201a16;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  visibility: hidden;
  transition: 0.5s ease-in-out;
  transform: translateY(-100%);

  ${(props) =>
    props.active === true &&
    css`
      visibility: visible;
      transition: 0.5s ease-in-out;
      transform: translateY(0);
    `}

    > a:nth-child(1) {
      font-size: 50px;
      text-decoration: none;
      color: #fff;
      padding-bottom: 4px;
      border-bottom: 2px solid #fff;
      margin-bottom: 20px;

      :hover {
        text-decoration: none;
      }
    }
    > a {
      font-size: 30px;
      text-decoration: none;
      color: #fff;

      :hover {
        text-decoration: underline;
      }
    }

    > button {
      padding: 10px 20px;
      border: 2px solid #fff;
      background: transparent;
      color: #fff;
      letter-spacing: 2px;
      font-size: 18px;
      margin-top: 20px;

      :hover {
        background: #fff;
        color: #000;
        cursor: pointer;
      }
    }

    @media (min-width: 760px) {
      display: none;
    }
`;
