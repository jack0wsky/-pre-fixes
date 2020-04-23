import React, { Component } from "react"
import {
  HomeWrapper,
  HomeContent,
  ContentHead,
  Title,
  SearchInput,
  ActionBtn,
  Or,
  HomeBackground,
  GreenShape,
  DotGrid,
  Grid,
  Icon,
} from "./homePage.styled"
import dotgrid from "../../static/dotgrid.svg"
import explore from "../../static/globe.svg"
import Browser from "../browsers/browser"
import Result from "../result"

class Home extends Component {
  state = {
    counter: 0,
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.counter < 3) {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
      } else {
        this.setState({ counter: 0 })
      }
    }, 3000)
  }

  changeBrowser = () => {
    switch (this.state.counter) {
      case 0: {
        return <Browser browser={"chrome"} />
      }
      case 1: {
        return <Browser browser={"firefox"} />
      }
      case 2: {
        return <Browser browser={"opera"} />
      }
      case 3: {
        return <Browser browser={"safari"} />
      }
      default: {
        return <Browser browser={"chrome"} />
      }
    }
  }
  render() {
    return (
      <HomeWrapper>
        <HomeContent>
          <ContentHead>
            <Title>Make your code</Title>
            {this.changeBrowser()}
            <Title>compatible</Title>
          </ContentHead>
          <SearchInput type="text" placeholder="Find prefixes for your code" />
          <Or>OR</Or>
          <ActionBtn>
            <Icon style={{ width: 30 }} src={explore} />
            Explore all
          </ActionBtn>
          <Result />
        </HomeContent>
        <HomeBackground>
          <GreenShape></GreenShape>
          <DotGrid>
            <Grid src={dotgrid} alt="dotgrid" />
          </DotGrid>
        </HomeBackground>
      </HomeWrapper>
    )
  }
}

export default Home
