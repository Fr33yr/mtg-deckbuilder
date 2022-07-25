import React, { Fragment, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import '../assets/css/main.css'

export function Login() {
  const { loginWithGoogle, login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (email, password) => {
    setError('')
    try {
      await login(email, password)
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Invalid User')
      }
      else if (error.code === 'auth/invalid-email') {
        setError('Invalid email')
      }
      else if (error.code === 'auth/wrong-password') {
        setError('Wrong Password')
      }
      else if (error.code === 'auth/missing-email') {
        setError('Write an email')
      }
    }
  }
  error && console.log(error);

  return (
    <Fragment>
      <Formik initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values)=>handleSubmit(values.email, values.password)}>
        <Form className='loginform'>
          <label>email</label>
          <Field name="email" type="email" />
          <label>password</label>
          <Field name="password" type="password" />
          <button type='submit'>LogIn</button>
          <button onClick={()=>loginWithGoogle()}>Login <br />with Google</button>
          <p>Dont have an account? <Link to="/signin">SignIn</Link></p>
        </Form>
      </Formik>
    </Fragment>
  )
}
