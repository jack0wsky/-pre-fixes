import React, { Component } from "react"
import { Title } from "../homePage/homePage.styled"
import anime from "animejs/lib/anime.es"

class Safari extends Component {
  componentDidMount() {
    anime({
      targets: "#browser",
      opacity: [0, 1],
      translateY: ["10px", 0],
    })
  }

  render() {
    return <Title id="browser">safari</Title>
  }
}

export default Safari
