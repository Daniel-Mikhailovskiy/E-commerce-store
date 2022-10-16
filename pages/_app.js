import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components'
import { StateContex } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <StateContex>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContex>
  );
}

export default MyApp
