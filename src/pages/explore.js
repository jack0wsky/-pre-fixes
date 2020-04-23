import React, { Component } from "react"
import Layout from "../components/layout"
import {
  ExploreWrapper,
  Navigator,
  Content,
  Head,
} from "../explore/explore.styled"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { graphql, StaticQuery } from "gatsby"

const STYLES = gql`
  {
    statements {
      style
    }
  }
`

class Explore extends Component {
  render() {
    return (
      <Layout>
        <ExploreWrapper>
          <Navigator>
            <Head>Explore</Head>
          </Navigator>
          <Content></Content>
        </ExploreWrapper>
      </Layout>
    )
  }
}

export default Explore
