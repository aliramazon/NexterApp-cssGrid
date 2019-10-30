import React from 'react';
import Icon from './Icon';

const Feature = ({ iconName, heading, content }) => {
    return (
        <div className='feature'>
            <Icon iconClassName='feature__icon' iconName={iconName} />
            <h4 className='heading-4 heading-4--dark'>{heading}</h4>
            <p className='feature__text'>{content}</p>
        </div>
    );
};

const Features = () => {
    return (
        <section className='features'>
            <Feature
                iconName='global'
                heading="World's best luxury homes"
                content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
            />
            <Feature
                iconName='trophy'
                heading='Only the best properties'
                content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
            />
            <Feature
                iconName='map-pin'
                heading='All homes in in top locations'
                content='Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
            />
            <Feature
                iconName='key'
                heading='New home in one week'
                content='Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            />
            <Feature
                iconName='presentation'
                heading='Top 1% realtors'
                content='Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
            />
            <Feature
                iconName='lock'
                heading='Secure payments on nexter'
                content='Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'
            />
        </section>
    );
};

export default Features;
