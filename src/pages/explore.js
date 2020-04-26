import React, { Component, createRef } from "react"
import Layout from "../components/layout"
import {
  ExploreWrapper,
  Navigator,
  Head,
  List,
  Statement,
  Welcome,
  WelcomeTitle,
  Description,
} from "../explore/explore.styled"
import ExploreStyle from "../components/exploreTab/exploreTab"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import anime from "animejs/lib/anime.es"

const STYLES = gql`
  query Vendor {
    statements {
      style
      key
      properties {
        prop
        key
      }
      scss {
        key
        code
      }
    }
  }
`

class Explore extends Component {
  constructor() {
    super()
    this.state = {
      textArea: "",
      selectedVendor: null,
      css: true,
      userValue: "",
    }
    this.textArea = createRef()
  }
  componentDidMount() {
    const tl = anime.timeline({ duration: 1000, easing: "linear", delay: 400 })
    tl.add({
      targets: "#explore",
      translateY: ["2vw", 0],
      opacity: [0, 1],
      duration: 400,
      easing: "spring(1, 80, 10, 0)",
    })
      .add({
        targets: "#welcome",
        translateX: ["2vw", 0],
        opacity: [0, 1],
        duration: 300,
      })
      .add({
        targets: "#desc",
        translateY: ["-2vw", 0],
        opacity: [0, 0.4],
        duration: 400,
      })
  }

  copyCode = e => {
    const code = document.querySelector("#codeToCopy")
    this.setState({ textArea: e.target.innerText }, () => {
      code.textContent = this.state.textArea
      code.select()
      document.execCommand("copy")
    })
  }
  showProps = statement => {
    this.setState({ selectedVendor: statement })
  }
  handleSyntax = () => {
    console.log("clicked")
    this.setState({ css: !this.state.css }, () => {
      console.log(this.state.css)
    })
  }
  render() {
    const { css, selectedVendor } = this.state
    console.log(css)
    return (
      <Layout>
        <ExploreWrapper>
          <Navigator>
            <Head id="explore">Explore</Head>
            <List id="statelist">
              <Query query={STYLES}>
                {({ loading, data }) => {
                  if (loading) return <p>loading...</p>
                  const { statements } = data
                  return statements.map(statement => {
                    return (
                      <Statement
                        key={statement.key}
                        onClick={() => this.showProps(statement)}
                      >
                        {statement.style}
                      </Statement>
                    )
                  })
                }}
              </Query>
            </List>
          </Navigator>
          {selectedVendor !== null ? (
            <ExploreStyle
              selectedVendor={selectedVendor}
              textArea={this.state.textArea}
              changeSyntax={this.state.css}
              handleSyntax={this.handleSyntax}
              copyCode={this.copyCode}
            />
          ) : (
            <Welcome>
              <WelcomeTitle id="welcome">
                Welcome in Prefixes Explorer
              </WelcomeTitle>
              <Description id="desc">
                Choose any of CSS style to make your web app cross-browser
                compatible
              </Description>
            </Welcome>
          )}
        </ExploreWrapper>
      </Layout>
    )
  }
}

export default Explore
