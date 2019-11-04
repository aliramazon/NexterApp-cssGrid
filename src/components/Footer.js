import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='nav'>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>
                        Find Your Dream Home
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>
                        Request Proposal
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>
                        Download Home Planner
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>
                        Contact us
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>
                        Submit Your Property
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>
                        Come Work With Us
                    </a>
                </li>
            </ul>
            <p className='copyright'>&copy; Copyright 2019 by Ali Ramazon</p>
        </footer>
    );
};

export default Footer;
