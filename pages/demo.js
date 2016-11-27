// example adapted from https://github.com/jxnblk/rebass/demo/entry.js

import css from 'next/css'
import React from 'react'
import Head from 'next/head'
// import Icon from 'react-geomicons'
// import { Flex, Box } from 'reflexbox'
import ReactDOM from 'react-dom'
import App from '../components/App'
import Rebass from 'rebass'
var data = require('pkginfo')

data.components = Object.keys(Rebass).length

const style = css(
  {
    html: {
      "-webkit-text-size-adjust": "100%",
    },
    body: {
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      color: "#111",
      backgroundColor: "#fff",
      lineHeight: 1.5,
      margin: 0,
    },
    ".Button:hover": {
      boxShadow: "inset 0 0 0 999px rgba(0, 0, 0, .25)",
    },
    ".Input": {
      "input:focus": {
        outline: "none",
        boxShadow: "0 0 0 2px #00749d",
      }
    }
  }
)

export default () => (
  <div className={style}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
    <App {...data} />
  </div>
)