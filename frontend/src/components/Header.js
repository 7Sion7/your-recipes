import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './mini-comp/NavBar';



export default function Header() {
    
    

    return (
        <header  className='header'>
            <Link to='/'><h1 className='header__title'>Search4Recipes</h1></Link>
            
            {/* <NavBar className="header__links flex flex-jc-sb flex-ai-c"/> */}
        </header>
    )
}
