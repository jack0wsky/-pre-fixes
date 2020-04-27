import styled from "styled-components"
import { mobile, medium, large } from "../breakpoints/breakpoints"

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 5vh;
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.colors.background};
  padding: 0 35vw 0;

  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${mobile}) {
    height: 8vh;
    padding: 0 5vw 0 25vw;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    padding: 0 20vw 0;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    padding: 0 30vw 0;
  }
`
export const Note = styled.p`
  color: ${props => props.theme.colors.fontColor};
  font-weight: normal;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const Link = styled.a`
  margin: 0 10px 0;
  color: ${props => props.theme.colors.action};
`
export const Emoji = styled.img`
  margin: 0 10px 0;
`
export const Github = styled.a`
  width: auto;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  color: ${props => props.theme.colors.fontColor};
`
