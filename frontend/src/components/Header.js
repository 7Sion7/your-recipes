import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './mini-comp/NavBar';



export default function Header() {
    
    

    return (
        <header  className='header' id='#top'>
            <Link to='/'><h1 className='header__title'>Your Recipes</h1></Link>
            <NavBar className="header__links flex flex-jc-sb flex-ai-c"/>
        </header>
    )
}
