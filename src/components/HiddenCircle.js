import React, {useState} from 'react';
import './hiddenCircle.css'

/* 
// Square shaped component with a hidden circle that when activated will display for short time frame. If the user hit it in time
// then global score is updated
*/
const HiddenCircle = (props) => {
    const userChoice = () => {
        props.click(props.circleId);
    }

    return(
        <main className="circle-container">
            <section className={props.activate?`inner-circle circle-animation`:`inner-circle `} onClick={userChoice}></section>
        </main>
    );
}

export default HiddenCircle;