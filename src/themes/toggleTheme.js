import React from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import lightTheme from "./light"
import darkTheme from "./dark"

const ToggleTheme = ({ children }) => {
  const theme = useSelector(state => state.darkMode)
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default ToggleTheme
