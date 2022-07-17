import React, { Fragment } from 'react'

import '../assets/css/main.css'

export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div>
          <p>Powered by</p>
          <a href='https://magicthegathering.io' target={'_blank'}>The MTG API</a>
        </div>
      </footer>
    </Fragment>
  )
}
