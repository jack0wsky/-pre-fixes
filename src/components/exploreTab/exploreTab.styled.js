import styled from "styled-components"
import { mobile } from "../breakpoints/breakpoints"

export const Content = styled.section`
  width: 75vw;
  height: 95%;
  background-color: ${props => props.theme.colors.greyBackground};
  border-radius: 30px 0 0 30px;
  padding: 2vw;
  position: relative;

  @media all and (max-width: ${mobile}) {
    width: 100vw;
    height: 80%;
    padding: 5vw;
    border-radius: 30px 30px 0 0;
  }
`
export const Title = styled.h2`
  font-size: 2em;
  color: ${props => props.theme.colors.fontColor};
`
export const TextArea = styled.textarea`
  position: absolute;
  right: -100%;
`
export const SwitchCode = styled.nav`
  width: 50%;
  display: flex;
  align-items: center;
  height: 3vw;
`
export const StyleText = styled.h4`
  width: max-content;
  padding: 5px 10px 5px;
  background-color: ${props => props.theme.colors.action};
  border-radius: 10px;
  font-size: 1.1em;
  color: ${props => props.theme.colors.fontColor};
  margin: 0 1vw 0 0;
`
export const StyleSyntax = styled.button`
  width: max-content;
  padding: 5px 10px 5px;
  background-color: rgb(255, 255, 255, 0.1);
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  color: ${props => props.theme.colors.fontColor};
  cursor: pointer;
  margin: 0 1vw 0 0;
  :focus {
    outline: none;
  }
  :hover {
    background-color: rgb(255, 255, 255, 0.2);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
  }
`
export const Hint = styled.p`
  margin: 1vw 0 0 1vw;
  opacity: 0.3;
  color: ${props => props.theme.colors.fontColor};
`
export const Code = styled.code`
  font-family: "JetBrains Mono", serif;
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  background-color: #001f2d;
  color: ${props => props.theme.colors.code};
  display: flex;
  flex-flow: column;

  span {
    font-family: "JetBrains Mono", serif;
    line-height: 2em;
  }

  @media all and (max-width: ${mobile}) {
    width: 100%;
  }
`
export const CodeComment = styled.span`
  color: #646464;
  opacity: 0.8;
  margin: 0 0 0 10px;
`
export const Props = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 2vw 0 0;
`
