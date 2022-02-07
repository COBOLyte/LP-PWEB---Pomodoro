import React from 'react';

function BreakLength(props) {
    function increaseBreak() {
        if (props.breakLength === 60) return;
        props.increaseBreakLength();
    }

    function decreaseBreak() {
        if (props.breakLength === 1) return;
        props.decreaseBreakLength();
    }

    return (
        <section>
            <h4>Temps Pause</h4>
            <section className='interval-container'>
                <button
                disabled={(props.isPlayed) ? "disabled" : ""}
                onClick={decreaseBreak}
                >-</button>
                <p className='interval-length'>{props.breakLength}</p>
                <button
                disabled={(props.isPlayed) ? "disabled" : ""}
                onClick={increaseBreak}
                >+</button>
            </section>
        </section>
    );
}

export default BreakLength;
