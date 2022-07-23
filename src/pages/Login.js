import React,{Fragment} from 'react'
import { Formik, Form, Field } from 'formik'
import {Link} from 'react-router-dom'

import '../assets/css/main.css'

export function Login() {
  return (
    <Fragment>
        <Formik initialValues={{
          email:'',
          password: ''
        }}>
            <Form className='loginform'>
                <Field name="email" type="email"/>
                <Field name="password" type="password"/>
                <button type='submit'>LogIn</button>
                <p>Dont have an account? <Link to="/signin">SignIn</Link></p>
            </Form>
        </Formik>
    </Fragment>
  )
}
