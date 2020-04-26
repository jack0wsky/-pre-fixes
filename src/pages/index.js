import React from "react"

import Layout from "../components/layout"
import HomePage from "../components/homePage/homePage"
import Image from "../components/image"
import SEO from "../components/seo"
import { createStore } from "redux"
import Reducer from "../reducers"

export let store = createStore(Reducer)

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
)

export default IndexPage
