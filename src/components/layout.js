import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./header/header"

//import "./layout.css"

const GlobalStyle = createGlobalStyle`
  *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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
