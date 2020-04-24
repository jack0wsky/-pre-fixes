import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:
      "https://api-eu-central-1.graphcms.com/v2/ck9bubr8609f101yy3yt05dsw/master",
    fetch,
  }),
})
