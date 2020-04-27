import styled from "styled-components"
import { mobile, medium } from "../components/breakpoints/breakpoints"

export const ExploreWrapper = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  background-color: ${props => props.theme.colors.background};
  @media all and (max-width: ${mobile}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
`
export const Navigator = styled.aside`
  width: 25vw;
  height: 100%;
  padding: 1vw 0 0 5vw;

  @media all and (max-width: ${mobile}) {
    width: 100vw;
    height: 10vh;
  }
`
export const CodeComment = styled.span`
  color: #646464;
  opacity: 0.8;
  margin: 0 0 0 10px;
`
export const Head = styled.h2`
  font-size: 3em;
  color: ${props => props.theme.colors.fontColor};
`
export const List = styled.section`
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 5vw 0 0;

  @media all and (max-width: ${mobile}) {
    flex-flow: row;
    -webkit-flex-flow: row;
    overflow: scroll;
    width: auto;
    align-items: center;
  }
`
export const Statement = styled.button`
  border: none;
  font-size: 1.2em;
  line-height: 2em;
  cursor: pointer;
  background: none;
  color: ${props => props.theme.colors.fontColor};
  display: flex;
  transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }
  :hover {
    transition: 0.3s ease-in-out;
    transform: translateX(1vw);
    color: ${props => props.theme.colors.action};
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

  @media all and (max-width: ${mobile}) {
    margin: 2vw;
    width: auto;
  }
`
export const Welcome = styled.section`
  width: 75vw;
  height: 70%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: center;
  -webkit-justify-content: center;

  @media all and (max-width: ${mobile}) {
    width: 100vw;
    height: 60%;
    text-align: center;
    align-items: center;
    -webkit-align-items: center;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    width: 60vw;
    text-align: center;
    align-items: center;
    -webkit-align-items: center;
    padding: 0 5vw 0 0;
  }
`
export const WelcomeTitle = styled.h3`
  font-size: 3em;
  color: ${props => props.theme.colors.fontColor};
  
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    font-size: 2.5em;
  }
`
export const Description = styled.p`
  color: ${props => props.theme.colors.fontColor};
  font-size: 1.5em;
  opacity: 0.5;
  width: 50%;

  @media all and (max-width: ${mobile}) {
    width: 100%;
    margin: 2vw 0 0;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    margin: 5vw 0 0;
  }
`
