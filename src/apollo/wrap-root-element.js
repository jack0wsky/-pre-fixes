import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./client"
import { store } from "../pages"
import { Provider } from "react-redux"
import ToggleTheme from "../themes/toggleTheme"

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ToggleTheme>{element}</ToggleTheme>
      </Provider>
    </ApolloProvider>
  )
}
