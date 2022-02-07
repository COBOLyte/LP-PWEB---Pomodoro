import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    startTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({intervalId: intervalId});
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        });
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) this.setState({isSession: false});
                    else this.setState({isSession: true});
                    this.props.toggleInterval(this.state.isSession);
                } else {
                    this.props.decreaseTimerMinute();
                    this.setState({timerSecond: 59});
                }

                break;
            default:
                this.setState((prevState) => {
                    return {timerSecond: --prevState.timerSecond}
                });
                break;
        }
    }
    
    render() {
        return (
            <section>
                <section className='timer-container'>
                    <h4 className='timer-session'>{(this.state.isSession) ? "Travail" : "Pause"}</h4>
                    <span className='timer'>{
                    (this.props.timerMinute === 0)
                    ? "00"
                    : (this.props.timerMinute < 10)
                    ? "0" + this.props.timerMinute
                    : this.props.timerMinute
                    }</span>
                    <span className='timer'>:</span>
                    <span className={(this.props.timerMinute === 0 && this.state.timerSecond <= 20) ? 'timer-red' : 'timer'}>{
                    (this.state.timerSecond === 0)
                    ? "00"
                    : (this.state.timerSecond < 10)
                    ? "0" + this.state.timerSecond
                    : this.state.timerSecond
                    }</span>
                </section>
                <section className='timer-actions'>
                    <button
                    disabled={(this.props.isPlayed) ? "disabled" : ""}
                    onClick={this.startTimer}
                    >Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.resetTimer}>Reset</button>
                </section>
            </section>
            );
        }
    }
    
export default Timer;
