import React from 'react';
import './hiddenCircle.css'

const HiddenCircle = (props) => {
    return(
        <main className="circle-container" id={props.circleID}>
            <section className="inner-circle"></section>
        </main>
    );
}

export default HiddenCircle;