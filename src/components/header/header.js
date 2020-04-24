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
  ToggleTheme,
  Dot,
  DotGridBurger,
  GridBurger,
} from "./header.styled"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import logoLight from "../../static/-pre-fixes.svg"
import logoDark from "../../static/-pre-fixes-dark.svg"
import { useSelector, useDispatch } from "react-redux"
import { isDarkMode } from "../../actions"
import dotgrid from "../../static/dotgrid.svg"

const Header = () => {
  const [isMenu, setMenu] = useState(false)
  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()
  return (
    <HeaderWrapper darkmode={darkMode}>
      <Logo>
        <SVG src={darkMode ? logoDark : logoLight} />
      </Logo>
      <Nav>
        <AniLink paintDrip to="/">
          <NavBtn>Home</NavBtn>
        </AniLink>
        <AniLink paintDrip to="/explore">
          <NavBtn>Explore</NavBtn>
        </AniLink>
      </Nav>
      <ToggleTheme onClick={() => dispatch(isDarkMode())}>
        <Dot darkMode={darkMode}></Dot>
      </ToggleTheme>
      <BurgerNav menu={isMenu}>
        <AniLink paintDrip to="/">
          <BurgerLinks>Home</BurgerLinks>
        </AniLink>
        <AniLink paintDrip to="/explore">
          <BurgerLinks>Explore</BurgerLinks>
        </AniLink>
        <DotGridBurger>
          <GridBurger src={dotgrid} alt="dotgrid" />
        </DotGridBurger>
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
