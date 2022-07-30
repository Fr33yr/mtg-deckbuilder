import React,{Fragment} from 'react'

import Footer from './Footer'
import Header from './Header'

export function Layout(props) {
  const {children, setSearchResults} = props
  return (
    <Fragment>
        <Header setSearchResults={setSearchResults}></Header>
        {children}
        <Footer></Footer>
    </Fragment>
  )
}
