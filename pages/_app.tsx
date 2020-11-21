import {AppProps} from "next/app"
import Head from "next/head";

import React, {Component} from "react"
import "../styles/_reset.css"
import "../styles/global.scss"

const App = ({Component, pageProps}: AppProps) =>
  <>
    <Head>
      <title>Learn While Doing</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <Component {...pageProps} />
  </>

export default App
