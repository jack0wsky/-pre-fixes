import React from "react"
import { HeaderWrapper, Logo, Nav, NavBtn, SVG } from "./header.styled"
import { Link } from "gatsby"
import logo from "../../static/logo.svg"

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <SVG src={logo} />
      </Logo>
      <Nav>
        <Link to="/">
          <NavBtn>Home</NavBtn>
        </Link>
        <Link to="/">
          <NavBtn>Explore</NavBtn>
        </Link>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
