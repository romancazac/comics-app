import React from 'react'
import { Link } from 'react-router-dom'
import ErrorMessage from '../errorMessage/ErrorMessage'

const NotFound = () => {
  return (
    <div>
      <ErrorMessage />
      <p className='single-comic__name'>Not Found</p>

      <Link to="/" className="single-comic__back">Home</Link>
    </div>
  )
}

export default NotFound