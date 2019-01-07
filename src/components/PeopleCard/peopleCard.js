import React from 'react'
import './peopleCard.css';

const PeopleCard = props => (
    <div className='card'>
        <div className='card-image'>
            <img alt={props.name} src={props.image} />
        </div>
        <div className='content'>
            <ul>
                <li>
                    <strong>Name: </strong> {props.name}
                </li>
                <li>
                    <strong>Location: </strong> {props.name}
                </li>
            </ul>
        </div>
        <span onClick={() => {props.shufflePeople(props.shufflePeople)}} className='pulse'>
            Shuffle
        </span>
    </div>
);

export default PeopleCard;