import React, {useState} from 'react';
import './hiddenCircle.css'

/* 
// Square shaped component with a hidden circle that when activated will display for short time frame. If the user hit it in time
// then global score is updated
*/
const HiddenCircle = (props) => {
    const [animateCircle, showAnimateCircle] = useState(false); // Start the animation

    // Function to start and stop the animation and allow user to score
    const startAnimation =() => {
        showAnimateCircle(true)
    }
    return(
        <main className="circle-container" id={props.circleID}>
            <section className={animateCircle?`inner-circle circle-animation`:`inner-circle `} onClick={startAnimation}></section>
        </main>
    );
}

export default HiddenCircle;