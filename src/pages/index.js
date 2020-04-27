import React from "react"

import Layout from "../components/layout"
import HomePage from "../components/homePage/homePage"
import Image from "../components/image"
import SEO from "../components/seo"
import { createStore } from "redux"
import Reducer from "../reducers"
import { useSelector } from "react-redux"

export let store = createStore(Reducer)

const IndexPage = () => {
  const darkMode = useSelector(state => state.darkMode)
  return (
    <Layout>
      <HomePage darkMode={darkMode} />
    </Layout>
  )
}

export default IndexPage
