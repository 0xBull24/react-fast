import React from 'react'
import './peopleCard.css';

const PeopleCard = props => (
    <div className='row'>
        <div className='col s3'>
            <div className='card'>
                <div className='card-image'>
                    <img 
                    alt={props.name} 
                    src={props.img}
                    onClick={() => {props.handleClick(props.id)}} />
                </div>
            </div>
        </div>
    </div>
);

export default PeopleCard;