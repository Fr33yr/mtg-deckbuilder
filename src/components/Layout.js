import React,{Fragment} from 'react'

import Footer from './Footer'
import Header from './Header'

export function Layout(props) {
  const {children} = props
  return (
    <Fragment>
        <Header></Header>
        {children}
        <Footer></Footer>
    </Fragment>
  )
}
