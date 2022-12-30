import React from 'react'
import RouteWrapper from '../../route-wrapper'
import Link from 'next/link'
import Head from 'next/head'
import { NotFoundPageWrapper } from './styled'

function NotFoundPage () {
  return (
    <RouteWrapper colorScheme='green'>
      <Head>
        <title>Nic nenalezeno</title>
      </Head>
      <NotFoundPageWrapper>
        <h1>Nic nenalezeno</h1>
        <Link href="/">Zpět na úvod</Link>
      </NotFoundPageWrapper>
    </RouteWrapper>
  )
}


export default NotFoundPage