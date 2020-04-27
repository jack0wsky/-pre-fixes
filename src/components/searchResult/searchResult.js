import React, { Component } from "react"
import {
  SearchWrapper,
  CodeArea,
  Hint,
  CodeSnippet,
  TextArea,
} from "./searchResult.styled"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import copy from "../../static/copy.svg"
import { CodeComment } from "../../explore/explore.styled"

const SEARCH = gql`
  query RESULT($search: String) {
    properties(where: { _search: $search }) {
      prop
      key
      statement {
        style
        key
        properties(where: { prop_not_contains: $search }) {
          prop
        }
      }
    }
  }
`

class SearchResult extends Component {
  state = {
    copyCode: "",
  }
  moveTab = () => {}

  copyResult = e => {
    const homeText = document.querySelector("#homeText")
    this.setState({ copyCode: e.target.innerText }, () => {
      homeText.select()
      document.execCommand("copy")
      this.props.handlePopup()
    })
  }

  render() {
    const { search } = this.props
    return (
      <SearchWrapper onMouseDown={() => this.moveTab()} search={search}>
        {search !== "" ? (
          <CodeArea id="codeArea">
            <CodeSnippet readOnly>
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
                      <span
                        onClick={e => this.copyResult(e)}
                        key={property.key}
                      >
                        {property.prop} <CodeComment>/*value*/</CodeComment>;{" "}
                      </span>
                    )
                  })
                }}
              </Query>
            </CodeSnippet>
            <Hint>/*click property to copy*/</Hint>
          </CodeArea>
        ) : null}
        <TextArea id="homeText" readOnly value={this.state.copyCode} />
      </SearchWrapper>
    )
  }
}

export default SearchResult
