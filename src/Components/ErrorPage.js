import React from 'react'
import { Link } from 'react-router-dom'

 
function ErrorPage() {
    return (
       <main>
            <div className='container container-404 '>
            <h1>
                <small>упс,</small> <b> 404 </b>
            </h1>
            <Link to='/'>
                <span>
                    На главную 
                </span>
            </Link>
        </div>
       </main>
    )
}

export default ErrorPage 