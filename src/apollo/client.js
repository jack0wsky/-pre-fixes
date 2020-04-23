import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api-euwest.graphcms.com/v1/cjke2kn7p00ol01d2pinkptdj/master",
    fetch,
  }),
})
