import React from 'react'
import '../../styles/Landing.scss'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='landing-page'>
            <Link className='link' to={'/home'}>
                <button className='landing-page__start-button'>
                    START
                </button>
            </Link>
        </div>
    )
}
export default Landing;