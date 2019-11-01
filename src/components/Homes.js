import React from 'react';
import Icon from './Icon';
import house1 from '../images/house-1.jpeg';
import house2 from '../images/house-2.jpeg';
import house3 from '../images/house-3.jpeg';
import house4 from '../images/house-4.jpeg';
import house5 from '../images/house-5.jpeg';
import house6 from '../images/house-6.jpeg';

const Home = ({ img, title, location, rooms, sf, price }) => {
    return (
        <div className='home'>
            <img src={img} alt={title} className='home__img' />
            <Icon iconName='heart-full' iconClassName='home__like' />
            <h5 className='home__name'>{title}</h5>
            <div className='home__location'>
                <Icon iconName='map-pin' iconClassName='' />
                <p>{location}</p>
            </div>
            <div className='home__rooms'>
                <Icon iconName='profile-male' iconClassName='' />
                <p>{rooms} rooms</p>
            </div>
            <div className='home__sf'>
                <Icon iconName='expand' iconClassName='' />
                <p>
                    {sf} m<sup>2</sup>
                </p>
            </div>
            <div className='home__price'>
                <Icon iconName='key' iconClassName='' />
                <p>${price.toLocaleString('en-US')}</p>
            </div>
            <button className='home__btn btn'>Contact realtor</button>
        </div>
    );
};

const Homes = () => {
    return (
        <section className='homes'>
            <Home
                img={house1}
                title='Beautiful Family House'
                location='USA'
                rooms='5'
                sf='325'
                price={1200000}
            />
            <Home
                img={house2}
                title='Modern Glass Villa'
                location='Canada'
                rooms='6'
                sf='450'
                price={2750000}
            />
            <Home
                img={house3}
                title='Cozy Country House'
                location='UK'
                rooms='4'
                sf='250'
                price={850000}
            />
            <Home
                img={house4}
                title='Large Rustical Villa'
                location='Portugal'
                rooms='6'
                sf='480'
                price={1950000}
            />
            <Home
                img={house5}
                title='Majestic Palace House'
                location='Germany'
                rooms='18'
                sf='4230'
                price={9500000}
            />
            <Home
                img={house6}
                title='Modern Family Apartment'
                location='Italy'
                rooms='3'
                sf='180'
                price={600000}
            />
        </section>
    );
};

export default Homes;
