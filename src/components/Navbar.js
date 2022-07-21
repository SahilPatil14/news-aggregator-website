import React from 'react'
import './Navbar.css'
import HamburgerDrawer from './HamburgerDrawer'

const Navbar = ({ setCategory }) => {
    return (
        <div className='nav'>
            <div className='icon'>
                <HamburgerDrawer setCategory = {setCategory}/>
            </div>

            <img 
                style = {{ cursor : "pointer"}}
                src="/vcetnewslogo.png" height ='210%' alt = "logo"></img>

        </div>
    )
}

export default Navbar
