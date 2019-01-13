import React from 'react'
import './rules.css'

function Rules() {
    return (
    <div className='container-fluid center'>
        <div className='row'>
            <h2>Guess them All!</h2>
            <p>Click each one of the 16 images only once. If you click an image twice the game will reset</p>
            <p>and your current score will be set back to 0. Lets see if you can get all 16!</p>
        </div>
    </div>
    )
}

export default Rules;