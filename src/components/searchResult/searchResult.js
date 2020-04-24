import React, { Component } from "react"
import {
  SearchWrapper,
  CodeArea,
  Textarea,
  CopyIcon,
  Icon,
  Suggestions,
  CloseResult,
  Control,
  Result,
} from "./searchResult.styled"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import copy from "../../static/copy.svg"

const SEARCH = gql`
  query RESULT($search: String) {
    properties(where: { _search: $search }) {
      prop
      statement {
        style
        properties(where: { prop_not_contains: $search }) {
          prop
        }
      }
    }
  }
`

class SearchResult extends Component {
  moveTab = () => {}

  copyResult = e => {
    e.target.select()
    document.execCommand("copy")
  }

  render() {
    const { search } = this.props
    return (
      <SearchWrapper onMouseDown={() => this.moveTab()} search={search}>
        <CloseResult>
          <Control></Control>
        </CloseResult>
        <Result>
          <CodeArea id="codeArea">
            {search !== "" ? (
              <Query
                query={SEARCH}
                variables={{
                  search: search,
                }}
              >
                {({ loading, data }) => {
                  if (loading) return <p>loading...</p>
                  const { properties } = data
                  return properties.map(property => {
                    return (
                      <Textarea readOnly onClick={e => this.copyResult(e)}>
                        {property.prop}
                      </Textarea>
                    )
                  })
                }}
              </Query>
            ) : null}
          </CodeArea>
          <p>click property to copy</p>
        </Result>
      </SearchWrapper>
    )
  }
}

export default SearchResult
