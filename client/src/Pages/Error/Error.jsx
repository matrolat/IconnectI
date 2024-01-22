import React from 'react'
import './error.css'

export default function Error() {
  return (
    <div className='error-body'>
        <div className="error-section">
  <h1 className="error-main">404</h1>
  <div className="page-error">Ooops!!! The page you are looking for is not found</div>
  <a className="back-home" href="#!">Back to home</a>
</div>
    </div>
  )
}
