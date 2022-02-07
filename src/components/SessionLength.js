import React from 'react';

function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) return;
        props.increaseSessionLength();
    }

    function decreaseSession() {
        if (props.sessionLength === 1) return;
        props.decreaseSessionLength();
    }

    return (
        <section>
            <h4>Temps Travail</h4>
            <section className='interval-container'>
                <button
                disabled={(props.isPlayed) ? "disabled" : ""}
                onClick={decreaseSession}
                >-</button>
                <p className='interval-length'>{props.sessionLength}</p>
                <button
                disabled={(props.isPlayed) ? "disabled" : ""}
                onClick={increaseSession}
                >+</button>
            </section>
        </section>
    );
}

export default SessionLength;
