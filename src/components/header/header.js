import React, { useState } from "react"
import {
  HeaderWrapper,
  Logo,
  Links,
  Nav,
  NavBtn,
  SVG,
  BurgerMenu,
  BurgerIcon,
  Path,
  BurgerNav,
  BurgerLinks,
  ToggleTheme,
  DotGridBurger,
  GridBurger,
} from "./header.styled"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import logoLight from "../../static/-pre-fixes.svg"
import logoDark from "../../static/-pre-fixes-dark.svg"
import { useSelector, useDispatch } from "react-redux"
import { isDarkMode } from "../../actions"
import dotGrid from "../../static/dotgrid.svg"

const Header = () => {
  const [isMenu, setMenu] = useState(false)
  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()
  return (
    <HeaderWrapper darkmode={darkMode}>
      <Logo>
        <SVG src={darkMode ? logoDark : logoLight} />
      </Logo>
      <Links>
        <Nav>
          <AniLink
            cover
            direction="right"
            bg={darkMode ? "black" : "white"}
            duration={1}
            to="/"
          >
            <NavBtn>Home</NavBtn>
          </AniLink>
          <AniLink
            cover
            direction="left"
            bg={darkMode ? "black" : "white"}
            to="/explore"
            duration={1}
          >
            <NavBtn>Explore</NavBtn>
          </AniLink>
        </Nav>
        <ToggleTheme type="checkbox" onClick={() => dispatch(isDarkMode())} />
      </Links>
      <BurgerNav menu={isMenu}>
        <AniLink
          cover
          direction="right"
          bg={darkMode ? "black" : "white"}
          duration={1}
          to="/"
        >
          <BurgerLinks>Home</BurgerLinks>
        </AniLink>
        <AniLink
          cover
          direction="left"
          bg={darkMode ? "black" : "white"}
          to="/explore"
          duration={1}
          to="/explore"
        >
          <BurgerLinks>Explore</BurgerLinks>
        </AniLink>
        <DotGridBurger>
          <GridBurger src={dotGrid} alt="dotgrid" />
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
