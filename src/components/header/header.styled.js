import styled from "styled-components"
import { mobile } from "../breakpoints/breakpoints"

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
  :focus {
    outline: none;
  }
`
