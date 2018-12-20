import React from 'react';

const Footer = (props) => {
    return (
        <div className='footer-container'>
            <button type='button' onClick={(e) => props.handleClick(e,filterTypes.ALL)}>All</button>
            <button type='button' onClick={(e) => props.handleClick(e,filterTypes.ACTIVE)}>Active</button>
            <button type='button' onClick={(e) => props.handleClick(e,filterTypes.COMPLETED)}>Completed</button>
        </div>
    )
}

export default Footer;

export const filterTypes = {
    ALL: 'all',
    COMPLETED: 'completed',
    ACTIVE: 'active'
}
