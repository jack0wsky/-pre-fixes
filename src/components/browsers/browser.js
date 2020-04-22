import React, { Component } from "react"
import { Title } from "../homePage/homePage.styled"
import anime from "animejs"

class Browser extends Component {
  componentDidUpdate() {
    anime({
      targets: "#browser",
      opacity: [0, 1],
      easing: "easeInOutQuint",
      translateY: ["10px", 0],
      duration: 700,
    })
  }
  render() {
    return <Title id="browser">{this.props.browser}</Title>
  }
}

export default Browser
