import React, { Fragment, useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'

import { useAuth } from '../context/AuthContext'
import '../assets/css/main.css'

export function Login() {
  const { loginWithGoogle, logIn } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (values) => {
    const { email, password } = values
    setError('')
    try {
      await logIn(email, password)
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
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many attempts')
      }
    }
  }

  useEffect(() => {
    error && toast.error(error, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff"
      }
    })
  }, [error])

  return (
    <Fragment>
      <Toaster
        position='top-center'
      />
      <div  className='loginform'>
        <Formik initialValues={{
          email: '',
          password: ''
        }}
          onSubmit={(values) => handleSubmit(values)}>
          <Form>
            <label>email</label>
            <Field name="email" type="email" />
            <label>password</label>
            <Field name="password" type="password" />
            <button type='submit'>LogIn</button>
          </Form>
        </Formik>
        <button onClick={() => loginWithGoogle()}>Login <br />with Google</button>
        <p>Dont have an account? <Link to="/signin">SignIn</Link></p>
      </div>
    </Fragment>
  )
}
