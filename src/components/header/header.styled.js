import styled from "styled-components"
import { mobile, medium } from "../breakpoints/breakpoints"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 5vw 0;
  background-color: #fff;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Logo = styled.div`
  width: 20%;
  @media all and (max-width: ${mobile}) {
    width: 60%;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    width: 30%;
  }
`
export const SVG = styled.img`
  width: 50%;
`
export const Nav = styled.nav`
  display: flex;
  width: 30%;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${mobile}) {
    display: none;
  }
`
export const NavBtn = styled.button`
  width: max-content;
  border: none;
  background: none;
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }
  :hover {
    transition: 0.3s ease-in-out;
    transform: translateX(1vw);
  }
  :before {
    content: "/";
    display: block;
    opacity: 0;
    height: 100%;
    color: rgb(35, 150, 149);
    transition: 0.3s ease-in-out;
  }
  :hover:before {
    transition: 0.3s ease-in-out;
    opacity: 1;
    transform: translateX(-1vw);
  }
`

export const BurgerMenu = styled.section`
  display: none;
  @media all and (max-width: ${mobile}) {
    display: block;
    width: 15vw;
    height: 15vw;
    cursor: pointer;
    position: fixed;
    bottom: 5vw;
    left: 5vw;
    z-index: 100;
  }
`
export const BurgerIcon = styled.div`
  display: none;
  @media all and (max-width: ${mobile}) {
    display: flex;
    align-items: center;
    flex-flow: column;
    -webkit-flex-flow: column;
    -webkit-align-items: center;
    justify-content: space-evenly;
    padding: 20% 0 20%;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color: rgb(35, 150, 149);
    box-shadow: 0 1.4px 1.9px rgba(35, 150, 150, 0.023),
      0 3.2px 4.3px rgba(35, 150, 150, 0.034),
      0 5.8px 7.7px rgba(35, 150, 150, 0.041),
      0 9.6px 12.8px rgba(35, 150, 150, 0.049),
      0 15.9px 21.2px rgba(35, 150, 150, 0.056),
      0 27.7px 37px rgba(35, 150, 150, 0.067),
      0 60px 80px rgba(35, 150, 150, 0.09);
    span:nth-child(1) {
      transform: ${props =>
        props.menu === false ? null : "translateX(5px) rotate(45deg)"};
      transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      width: ${props => (props.menu === false ? "40%" : "45%")};
      transform-origin: 0 50%;
    }
    :focus {
      transform: translateX(5px);
    }
    span:nth-child(2) {
      transform-origin: 50% 50%;
    }
    span:nth-child(2) {
      width: ${props => (props.menu === false ? "40%" : 0)};
      transition: 0.3s ease-in-out;
    }
    span:nth-child(3) {
      transform: ${props =>
        props.menu === false ? null : "translateX(5px) rotate(-45deg)"};
      transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      transform-origin: 0 50%;
      width: ${props => (props.menu === false ? "40%" : "45%")};
    }
  }
`
export const Path = styled.span`
  display: block;
  width: 40%;
  height: 4px;
  border-radius: 3px;
  background-color: #fff;
  transition: 0.3s ease-in-out;
  transform-origin: 0 0;
`
export const BurgerNav = styled.nav`
  position: absolute;
  z-index: 90;
  width: 80vw;
  height: 100vh;
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
  left: ${props => (props.menu === false ? "-80vw" : 0)};
  bottom: 0;

  padding: 5vw 5vw 30vw;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
`
export const BurgerLinks = styled.button`
  border: none;
  font-size: 2.8em;
  font-weight: 500;
  line-height: 2em;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  display: flex;
  :hover {
    transform: translateX(4vw);
    color: rgb(35, 150, 149);
  }
  :before {
    content: "/";
    display: block;
    height: 100%;
    color: rgb(35, 150, 149);
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  :hover:before {
    opacity: 1;
    transform: translateX(-4vw);
    transition: 0.3s ease-in-out;
  }
`
