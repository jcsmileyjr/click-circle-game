import React from 'react';
import './hiddenCircle.css'
import crown from '../assets/crown-1.png';

/* 
* Square shaped component with a hidden circle that when activated will display for short time frame. If the user hit it in time
* then global score is updated
*/
const HiddenCircle = (props) => {

    const userChoice = () => {
        props.click(props.circleId);
    }

    return(
        <main className="circle-container">
            <section className={props.activate?`inner-circle circle-animation`:`inner-circle `} onClick={userChoice}>
                {props.correctPicked &&
                    <img src={crown} alt="blue crown" className="image-style" />
                }
            </section>
        </main>
    );
}

export default HiddenCircle;