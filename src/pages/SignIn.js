import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'

export function SignIn() {
  return (
    <Fragment>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}>
        <Form className='signinform'>
          <label>email</label>
          <Field name="email" type="email" />
          <label>password</label>
          <Field name="password" type="password" />
          <button type='submit'>SignIn</button>
          <button type='submit'>SignIn <br/>with Google</button>
        </Form>
      </Formik>
    </Fragment>
  )
}
