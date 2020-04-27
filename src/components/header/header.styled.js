import styled from "styled-components"
import { mobile, medium, large } from "../breakpoints/breakpoints"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 5vw 0;
  background-color: ${props => props.theme.colors.background};
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
export const Links = styled.section`
  width: 35%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${mobile}) {
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    width: 50%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 40%;
  }
`
export const Nav = styled.nav`
  display: flex;
  width: 60%;
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
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  color: ${props => props.theme.colors.fontColor};

  :focus {
    outline: none;
  }
  :hover {
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transform: translateX(1vw);
    -webkit-transform: translateX(1vw);
    -ms-transform: translateX(1vw);
  }
  :before {
    content: "/";
    display: block;
    opacity: 0;
    height: 100%;
    color: rgb(35, 150, 149);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
  }
  :hover:before {
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    opacity: 1;
    transform: translateX(-1vw);
    -webkit-transform: translateX(-1vw);
    -ms-transform: translateX(-1vw);
  }
`
export const ToggleTheme = styled.input`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  width: 50px;
  border-radius: 50px;
  height: 25px;
  background: rgb(35, 150, 149);
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  :focus {
    outline: none;
  }
  :after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 20px;
    margin: 0 0 0 6px;
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    -o-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  :checked:after {
    background-color: #000;
    transform: translateX(150%);
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    -o-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
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
    z-index: 999;
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
      -webkit-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      -o-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
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
      -webkit-transform: ${props =>
        props.menu === false ? null : "translateX(5px) rotate(-45deg)"};
      -ms-transform: ${props =>
        props.menu === false ? null : "translateX(5px) rotate(-45deg)"};
      transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      -webkit-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      -o-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
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
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transform-origin: 0 0;
`
export const BurgerNav = styled.nav`
  display: none;
  @media all and (max-width: ${mobile}) {
    position: absolute;
    z-index: 999;
    width: 80vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.greyBackground};
    transition: all 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    left: ${props => (props.menu === false ? "-80vw" : 0)};
    bottom: 0;
    overflow: hidden;

    padding: 5vw 5vw 30vw;
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
  }
`
export const DotGridBurger = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  position: absolute;
  right: -10vw;
  bottom: 5vw;
`
export const GridBurger = styled.img`
  height: 100%;
  opacity: 0.4;
`
export const BurgerLinks = styled.button`
  border: none;
  font-size: 2.8em;
  font-weight: 500;
  line-height: 2em;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  color: ${props => props.theme.colors.fontColor};
  background: none;

  display: flex;
  :hover {
    transform: translateX(4vw);
    -webkit-transform: translateX(4vw);
    -ms-transform: translateX(4vw);
    color: rgb(35, 150, 149);
  }
  :focus {
    outline: none;
  }
  :before {
    content: "/";
    display: block;
    height: 100%;
    color: rgb(35, 150, 149);
    opacity: 0;
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
  }
  :hover:before {
    opacity: 1;
    transform: translateX(-4vw);
    -webkit-transform: translateX(-4vw);
    -ms-transform: translateX(-4vw);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
  }
`
