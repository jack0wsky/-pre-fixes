import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./header/header"
import JetBrainsMedium from "../fonts/woff/JetBrainsMono-Medium.woff"
import JetBrainsMedium2 from "../fonts/woff2/JetBrainsMono-Medium.woff2"
import Montserrat700Woff2 from "../fonts/montserrat/montserrat-v14-latin-700.woff2"
import Montserrat700Woff from "../fonts/montserrat/montserrat-v14-latin-700.woff"
//import "./layout.css"

const GlobalStyle = createGlobalStyle`
  *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    @font-face {
    font-family: "JetBrains Mono";
    src: local("JetBrains Mono"), local("JetBrainsMono"),
      url(${JetBrainsMedium2}) format("woff2"),
      url(${JetBrainsMedium}) format("woff");
    font-weight: 300;
    font-style: normal;
    }
    @font-face {
      font-family: "Montserrat";
      src: local("Montserrat"), local("Montserrat"),
        url(${Montserrat700Woff2}) format("woff2"),
        url(${Montserrat700Woff}) format("woff");
      font-weight: 300;
      font-style: normal;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}

export default Layout
