import React from 'react';
import '../App.css';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';
import Timer from './Timer';
import logo from '../assets/tomato-svgrepo-com.svg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 30,
      timerMinute: 30,
      isPlayed: false
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onDecreaseTimerMinute = this.onDecreaseTimerMinute.bind(this);

    this.onToggleInterval = this.onToggleInterval.bind(this);

    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);

    setInterval(this.updateBgColor, 999);
  }

  updateBgColor() {
    let currentSessionEl = document.getElementsByTagName('h4').item(2);
    let mainEl = document.getElementsByTagName('main').item(0);
    if (currentSessionEl.textContent === "Travail") {
      mainEl.classList.remove("main-break");
      mainEl.classList.add("main-work");
    } else {
      mainEl.classList.remove("main-work");
      mainEl.classList.add("main-break");
    }
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: ++prevState.sessionLength,
        timerMinute: prevState.sessionLength
      };
    });
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: --prevState.sessionLength,
        timerMinute: prevState.sessionLength
      };
    });
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => { return {breakLength: ++prevState.breakLength}; });
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => { return {breakLength: --prevState.breakLength}; });
  }

  onDecreaseTimerMinute() {
    this.setState((prevState) => { return {timerMinute: --prevState.timerMinute}; });
  }

  onToggleInterval(isSession) {
    if (isSession) this.setState({timerMinute: this.state.sessionLength});
    else this.setState({timerMinute: this.state.breakLength});
  }

  onPlayStopTimer(isPlayed) { this.setState({isPlayed: isPlayed}); }

  onResetTimer() { this.setState({timerMinute: this.state.sessionLength}); }

  render() {
    return (
      <main>
        <h2>POMODORO</h2>
        <section className='interval-length-container'>
        <SessionLength
          isPlayed={this.state.isPlayed}
          sessionLength={this.state.sessionLength}
          increaseSessionLength={this.onIncreaseSessionLength}
          decreaseSessionLength={this.onDecreaseSessionLength}
        />
        <BreakLength
          isPlayed={this.state.isPlayed}
          breakLength={this.state.breakLength}
          increaseBreakLength={this.onIncreaseBreakLength}
          decreaseBreakLength={this.onDecreaseBreakLength}
        />
        </section>
        <Timer
          isPlayed={this.state.isPlayed}
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          decreaseTimerMinute={this.onDecreaseTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
        />
        <img src={logo} alt="Logo"></img>
      </main>
    );
  }
}

export default App;
