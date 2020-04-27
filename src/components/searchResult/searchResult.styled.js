import styled from "styled-components"
import { mobile, medium } from "../breakpoints/breakpoints"

export const SearchWrapper = styled.main`
  width: 30vw;
  height: auto;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
  bottom: 5vw;
  opacity: ${props => (props.search === "" ? 0 : 1)};
  right: 5vw;
  background-color: ${props => props.theme.colors.resultBackground};
  border-radius: 10px;
  z-index: 100;
  overflow: hidden;
  box-shadow: 0 1px 3px -19px rgba(0, 0, 0, 0.039),
    0 2.5px 7.2px -19px rgba(0, 0, 0, 0.057),
    0 4.6px 13.5px -19px rgba(0, 0, 0, 0.07),
    0 8.3px 24.1px -19px rgba(0, 0, 0, 0.083),
    0 15.5px 45.1px -19px rgba(0, 0, 0, 0.101),
    0 37px 108px -19px rgba(0, 0, 0, 0.14);

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
  }

  @media all and (max-width: ${mobile}) {
    width: 90%;
    height: 30vh;
    top: 45vh;
    left: 50%;
    margin-left: -45%;
  }
  @media all and (max-width: ${mobile}) and (max-height: ${mobile}) {
    height: 30vh;
    top: 50vh;
    opacity: 1;
    display: ${props => (props.search === "" ? 'none' : 'block')};
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    width: 40vw;
    opacity: ${props => (props.search === "" ? 0 : 0.8)};
    left: 50%;
    margin-left: -20vw;
    top: 60vh;
  }
`
export const CodeArea = styled.section`
  font-family: "JetBrains Mono", serif;
  border-radius: 10px;
  padding: 1vw;
  width: 100%;
  background-color: #001f2d;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  p {
    font-family: inherit;
    line-height: 1.5em;
  }
  @media all and (max-width: ${mobile}) {
    padding: 3vw;
    height: 100%;
  }
  @media all and (max-width: ${mobile}) and (max-height: ${mobile}) {
    overflow-y: scroll;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    height: 100%;
  }
`
export const CodeSnippet = styled.code`
  font-family: "JetBrains Mono", serif;
  width: 100%;
  border-radius: 10px;
  padding: 1vw;
  background-color: #001f2d;
  color: ${props => props.theme.colors.code};
  display: flex;
  flex-flow: column;
  position: relative;
  transition: all 0.3s ease-in-out;

  span {
    font-family: inherit;
    line-height: 2em;
  }
`
export const Hint = styled.p`
  color: rgb(255, 255, 255, 0.6);
  margin: 0 0 0 1vw;
  font-style: italic;
`
export const TextArea = styled.textarea`
  position: absolute;
  right: -100vw;
`
