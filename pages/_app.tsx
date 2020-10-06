import '../styles/_reset.css'
import '../styles/global.styl'

import React, {Component} from "react"
import {AppProps} from "next/app"

const App = ({Component, pageProps}: AppProps) =>
  <Component {...pageProps} />

export default App
