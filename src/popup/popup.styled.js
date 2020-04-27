import styled from "styled-components"
import { mobile, medium } from "../components/breakpoints/breakpoints"

export const PopupWrapper = styled.main`
  width: max-content;
  padding: 20px 20px 20px 40px;
  height: max-content;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  background-color: ${props => props.theme.colors.action};
  transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  -o-transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateX(${props => (props.copied ? "-10vw" : "100vw")});
  -webkit-transform: translateX(${props => (props.copied ? "-10vw" : "100vw")});
  -ms-transform: translateX(${props => (props.copied ? "-10vw" : "100vw")});

  position: fixed;
  right: -5vw;
  bottom: 40vh;

  @media all and (max-width: ${mobile}) {
    top: -20vw;
    width: 80%;
    z-index: 10;
    left: 50%;
    margin-left: -40%;
    transform: translateY(${props => (props.copied ? "35vw" : "-20vw")});
    -webkit-transform: translateY(
      ${props => (props.copied ? "35vw" : "-20vw")}
    );
    -ms-transform: translateY(${props => (props.copied ? "35vw" : "-20vw")});
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
  top: -20vw;
    z-index: 10;
    left: 50%;
    margin-left: -30%;
  width: 60%;
  justify-content: center;
    transform: translateY(${props => (props.copied ? "35vw" : "-20vw")});
    -webkit-transform: translateY(
      ${props => (props.copied ? "35vw" : "-20vw")}
    );
    -ms-transform: translateY(${props => (props.copied ? "35vw" : "-20vw")});
  }
`
export const PopupMessage = styled.h3`
  font-size: 1em;
  color: #fff;
  display: inherit;
  align-items: inherit;
`
export const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  margin: 0 0 0 10px;
  opacity: 0.5;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }
  :hover {
    opacity: 1;
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
  }
`
