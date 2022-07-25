import React, { Fragment, useState } from 'react'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
import { useAuth } from '../context/AuthContext'

export function SignIn() {
  const {singUp} = useAuth()
  const [error, setError] = useState('')

  const handleSubmit = async (email, password) =>{
    try{
      await singUp(email, password)
    }catch(err){
      setError(err)
    }
  }

  error && console.log(error);

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values)=>handleSubmit(values.email, values.password)}>
        <Form className='signinform'>
          <label>email</label>
          <Field name="email" type="email" />
          <label>password</label>
          <Field name="password" type="password" />
          <button type='submit'>SignIn</button>
        </Form>
      </Formik>
    </Fragment>
  )
}
