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

const style = css({
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  color: '#111',
  backgroundColor: '#fff',
  lineHeight: 1.5,
  margin: 0,
})

export default () => (
  <div className={style}>
    <Head>
      <meta charSet="utf-8" />
    </Head>
    <App {...data} />
</div>
)