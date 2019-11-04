import React from 'react';
import logo from '../images/logo.png';
import logoBI from '../images/logo-bi.png';
import logoBBC from '../images/logo-bbc.png';
import logoForbes from '../images/logo-forbes.png';
import logoTechcrunch from '../images/logo-techcrunch.png';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='Nexter logo' className='header__logo' />
            <h3 className='heading-3'>Your Own Home</h3>
            <h1 className='heading-1'>The ultimate personal freedom</h1>
            <button className='header__btn btn'>View our properties</button>
            <div className='header__seenon-text'>Seen on</div>
            <div className='header__seenon-logos'>
                <img src={logoBBC} alt='BBC logo' />
                <img src={logoForbes} alt='Forbes logo' />
                <img src={logoTechcrunch} alt='Techcrunch logo' />
                <img src={logoBI} alt='Business Insider logo' />
            </div>
        </header>
    );
};

export default Header;
