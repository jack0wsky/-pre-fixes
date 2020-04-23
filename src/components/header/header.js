import React, { useState } from "react"
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavBtn,
  SVG,
  BurgerMenu,
  BurgerIcon,
  Path,
  BurgerNav,
  BurgerLinks,
} from "./header.styled"
import { Link } from "gatsby"
import logo from "../../static/logo.svg"

const Header = () => {
  const [isMenu, setMenu] = useState(false)
  return (
    <HeaderWrapper>
      <Logo>
        <SVG src={logo} />
      </Logo>
      <Nav>
        <Link to="/">
          <NavBtn>Home</NavBtn>
        </Link>
        <Link to="/explore">
          <NavBtn>Explore</NavBtn>
        </Link>
      </Nav>
      <BurgerNav menu={isMenu}>
        <Link to="/">
          <BurgerLinks>Home</BurgerLinks>
        </Link>
        <Link to="/explore">
          <BurgerLinks>Explore</BurgerLinks>
        </Link>
      </BurgerNav>
      <BurgerMenu>
        <BurgerIcon menu={isMenu} onClick={() => setMenu(!isMenu)}>
          <Path></Path>
          <Path></Path>
          <Path></Path>
        </BurgerIcon>
      </BurgerMenu>
    </HeaderWrapper>
  )
}

export default Header
