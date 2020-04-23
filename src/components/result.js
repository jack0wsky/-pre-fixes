import React from "react"
import { graphql } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { useQuery } from "@apollo/react-hooks"

const VENDOR = gql`
  query Vendor {
    vendor {
      statements {
        style
      }
    }
  }
`

const Result = () => {
  return (
    <div>
      <Query query={VENDOR}>
        {({ loading, data }) => {
          if (loading) return <p>loading...</p>
          console.log(data)
          return null
        }}
      </Query>
    </div>
  )
}

export default Result
