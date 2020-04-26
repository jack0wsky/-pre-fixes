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
import dotGrid from "../../static/dotgrid.svg"
import explore from "../../static/globe.svg"
import Browser from "../browsers/browser"
import SearchResult from "../searchResult/searchResult"
import anime from "animejs/lib/anime.es"

class Home extends Component {
  state = {
    counter: 0,
    search: "",
  }
  componentDidMount() {
    const tl = anime.timeline({
      duration: 1700,
      easing: "cubicBezier(.5, .05, .1, .3)",
    })
    tl.add({
      targets: "#greenShape",
      translateY: ["30vw", 0],
      duration: 700,
    }).add({
      targets: "#dotGrid",
      opacity: [0, 1],
      duration: 1000,
    })
    setInterval(() => {
      if (this.state.counter < 3) {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
      } else {
        this.setState({ counter: 0 })
      }
    }, 3000)
  }

  handleSearch = e => {
    this.setState({ [e.target.name]: e.target.value })
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
          <SearchInput
            value={this.state.search}
            autoComplete="off"
            name="search"
            onChange={e => this.handleSearch(e)}
            type="text"
            placeholder="Find prefixes for your code"
          />
          <Or>OR</Or>
          <ActionBtn>
            <Icon style={{ width: 30 }} src={explore} />
            Explore all
          </ActionBtn>
        </HomeContent>
        <HomeBackground>
          <GreenShape id="greenShape"></GreenShape>
          <DotGrid id="dotGrid">
            <Grid src={dotGrid} alt="dotgrid" />
          </DotGrid>
        </HomeBackground>
        <SearchResult search={this.state.search} />
      </HomeWrapper>
    )
  }
}

export default Home
