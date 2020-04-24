import React, { Component } from "react"
import Layout from "../components/layout"
import {
  ExploreWrapper,
  Navigator,
  Content,
  Head,
  List,
  Statement,
} from "../explore/explore.styled"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Link } from "gatsby"

const STYLES = gql`
  query Vendor {
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
            <List>
              <Query query={STYLES}>
                {({ loading, data }) => {
                  if (loading) return <p>loading...</p>
                  const { statements } = data
                  return statements.map(statement => {
                    return (
                      <Link to="/home">
                        <Statement>{statement.style}</Statement>
                      </Link>
                    )
                  })
                }}
              </Query>
            </List>
          </Navigator>
          <Content></Content>
        </ExploreWrapper>
      </Layout>
    )
  }
}

export default Explore
