import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'

import {useAuth} from '../context/AuthContext'
import '../assets/css/main.css'

export function Login() {
const {loginWithGoogle} = useAuth()

  return (
    <Fragment>
      <Formik initialValues={{
        email: '',
        password: ''
      }}>
        <Form className='loginform'>
          <label>email</label>
          <Field name="email" type="email" />
          <label>password</label>
          <Field name="password" type="password" />
          <button onClick={loginWithGoogle} type='submit'>LogIn</button>
          <button type='submit'>Login <br/>with Google</button>
          <p>Dont have an account? <Link to="/signin">SignIn</Link></p>
        </Form>
      </Formik>
    </Fragment>
  )
}
