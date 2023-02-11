import React from 'react'
import './Error404.css'

function Error404() {
  return (
    <div>
        <div className='erro404'>
            <div className="error-page-container">
                <h1>Lost your way?</h1>
                <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <a href="/">Netflix Home</a>
                <div className='code-container'>
                    <h3>Error Code<span>NSES-404</span></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error404
