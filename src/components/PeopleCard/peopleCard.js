import React from 'react'
import './peopleCard.css';

const PeopleCard = props => (
    <div className='col s3'>
        <div className='card center-align'>
            <div className='card-image'>
                <img 
                alt={props.name} 
                src={props.img}
                onClick={() => {props.handleClick(props.id)}} />
            </div>
            <p>{props.name}</p>
        </div>
    </div>
);

export default PeopleCard;