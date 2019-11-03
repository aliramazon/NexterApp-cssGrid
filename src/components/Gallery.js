import React from 'react';

import gal1 from '../images/gal-1.jpeg';
import gal2 from '../images/gal-2.jpeg';
import gal3 from '../images/gal-3.jpeg';
import gal4 from '../images/gal-4.jpeg';
import gal5 from '../images/gal-5.jpeg';
import gal6 from '../images/gal-6.jpeg';
import gal7 from '../images/gal-7.jpeg';
import gal8 from '../images/gal-8.jpeg';
import gal9 from '../images/gal-9.jpeg';
import gal10 from '../images/gal-10.jpeg';
import gal11 from '../images/gal-11.jpeg';
import gal12 from '../images/gal-12.jpeg';
import gal13 from '../images/gal-13.jpeg';
import gal14 from '../images/gal-14.jpeg';

const Gallery = () => {
    return (
        <section className='gallery'>
            <figure className='gallery__item gallery__item--1'>
                <img src={gal1} alt='gallery 1' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--2'>
                <img src={gal2} alt='gallery 2' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--3'>
                <img src={gal3} alt='gallery 3' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--4'>
                <img src={gal4} alt='gallery 4' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--5'>
                <img src={gal5} alt='gallery 5' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--6'>
                <img src={gal6} alt='gallery 6' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--7'>
                <img src={gal7} alt='gallery 7' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--8'>
                <img src={gal8} alt='gallery 8' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--9'>
                <img src={gal9} alt='gallery 9' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--10'>
                <img src={gal10} alt='gallery 10' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--11'>
                <img src={gal11} alt='gallery 11' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--12'>
                <img src={gal12} alt='gallery 12' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--13'>
                <img src={gal13} alt='gallery 13' className='gallery__img' />
            </figure>
            <figure className='gallery__item gallery__item--14'>
                <img src={gal14} alt='gallery 14' className='gallery__img' />
            </figure>
        </section>
    );
};

export default Gallery;
