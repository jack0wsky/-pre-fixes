import styled from "styled-components"
import { mobile, medium } from "../breakpoints/breakpoints"

export const HomeWrapper = styled.main`
  width: 100vw;
  height: 90vh;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const HomeContent = styled.section`
  width: 70%;
  height: 50%;
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-evenly;

  @media all and (max-width: ${mobile}) {
    height: 90%;
    justify-content: flex-start;
    width: 80%;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    height: 70%;
    width: 80%;
  }

  @media all and (min-width: 1100px) and (max-width: 1401px) {
    height: 65%;
  }
`
export const HomeBackground = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`
export const GreenShape = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 45%;
  height: 62%;
  background-color: ${props => props.theme.colors.backgroundGreen};
  //background-color:
  border-radius: 0 50px 0 0;

  @media all and (max-width: ${mobile}) {
    height: 70%;
  }
`
export const DotGrid = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  position: absolute;
  right: 10vw;
  bottom: 5vw;

  @media all and (max-width: ${mobile}) {
    right: 0;
    bottom: 15vw;
  }
`
export const Grid = styled.img`
  height: 100%;
`
export const ContentHead = styled.section`
  width: 70%;
  text-align: center;
  justify-content: center;
  -webkit-justify-content: center;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  -webkit-flex-flow: row wrap;
  position: relative;
  z-index: 2;
  h2:nth-child(1) {
    margin: 0 1vw 0 0;
  }
  h2:nth-child(2) {
    width: 10vw;
  }
  @media all and (max-width: 1401px) {
    h2:nth-child(2) {
      width: 20vw;
      display: flex;
      justify-content: center;
    }
  }
`
export const Title = styled.h2`
  font-size: 4em;
  color: ${props => props.theme.colors.fontColor};
  @media all and (max-width: ${mobile}) {
    font-size: 3.2em;
  }
`
export const SearchInput = styled.input`
  height: 60px;
  width: 35%;
  font-family: "JetBrains Mono", serif;
  padding: 10px 10px 10px 20px;
  background: none;
  border: 2px solid #cdcdcd;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  font-size: 1.2em;
  position: relative;
  z-index: 2;
  color: ${props => props.theme.colors.fontColor};

  :focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.action};
  }
  :hover {
    border: 2px solid ${props => props.theme.colors.action};
  }

  @media all and (max-width: ${mobile}) {
    width: 100%;
    height: 70px;
    margin: 5vw 0 5vw;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    width: 50%;
  }
`
export const Or = styled.p`
  position: relative;
  color: ${props => props.theme.colors.fontColor};
  z-index: 2;
`
export const ActionBtn = styled.button`
  width: 35%;
  height: 60px;
  border: none;
  background-color: #239695;
  color: #fff;
  border-radius: 10px;
  font-size: 1.2em;
  cursor: pointer;
  position: relative;
  z-index: 2;
  font-weight: 600;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  transition: transform 0.4s ease-in-out;
  overflow: hidden;

  :focus {
    outline: none;
  }
  :hover {
    transition: transform 0.4s ease-in-out;
    transform: scale(1.05);
  }

  :before {
    content: "";
    display: block;
    height: 100%;
    width: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: skew(-20deg, 0deg);
    left: -15vw;
    position: absolute;
    z-index: 0;
    transition: 0.2s ease-in-out;
  }
  :hover:before {
    left: 110%;
    transition: 0.2s ease-in-out;
  }
  @media all and (max-width: ${mobile}) {
    width: 100%;
    height: 70px;
    margin: 5vw 0 5vw;
  }
  @media all and (min-width: ${mobile}) and (max-width: ${medium}) {
    width: 50%;
  }
`
export const Icon = styled.img`
  margin: 0 1vw 0 0;
  @media all and (max-width: ${mobile}) {
    margin: 0 4vw 0 0;
  }
`
