import React,{Fragment} from 'react'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'

export function SignIn() {
  return (
    <Fragment>
        <Formik
        initialValues={{
          name:'',
          email:'',
          password: ''
        }}>
            <Form className='signinform'> 
                <Field name="name" type="text"/>
                <Field name="email" type="email"/>
                <Field name="password" type="password"/>
                <button type='submit'>SignIn</button>
            </Form>
        </Formik>
    </Fragment>
  )
}
