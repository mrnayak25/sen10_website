import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='flex justify-center'>
      <h1>SignIn</h1>
      <Link to='/'><button>Back</button></Link>
    </div>
  )
}

export default SignIn
