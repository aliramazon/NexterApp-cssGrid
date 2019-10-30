import React from 'react';
import sprite from '../images/sprite.svg';

const Icon = ({ iconName, iconClassName }) => {
    return (
        <svg className={iconClassName}>
            <use xlinkHref={`${sprite}#icon-${iconName}`} />
        </svg>
    );
};

export default Icon;
