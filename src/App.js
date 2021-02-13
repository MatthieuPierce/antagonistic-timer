// import logo from './logo.svg';
import './App.css';
import CountdownDisplay from './components/CountdownDisplay';
import BreakControls from './components/BreakControls';
import SessionControls from './components/SessionControls'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Antagonistic Timer</h1>
      <h2>Forcing you to take the breaks, whether you want to or not.</h2>
      </header>
      <BreakControls />

      <SessionControls />




    {/* User Story #4: I can see two clickable elements with corresponding IDs: 
    id="break-increment" and id="session-increment". */}

    {/* User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.

    User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value. */}

    <div id="session-decrement">Clickable Session Decrement</div>
    <div id="session-increment">Clickable Session Increment</div>

    {/* User Story #5: I can see an element with a corresponding 
    id="break-length", which by default (on load) displays a value of 5. */}
    <div id="break-length">Break Length Value (default 5)</div>

    {/* User Story #6: I can see an element with a corresponding 
    id="session-length", which by default displays a value of 25. */}
    <div id="session-length">Session Length Value (default 25)</div>

    {/*User Story #7: I can see an element with a corresponding id="timer-label",
    that contains a string indicating a session is initialized (e.g. "Session").*/}
    <div id="timer-label">Timer Session Initialized String</div>

    

    <CountdownDisplay />

    {/* User Story #9: I can see a clickable element with a corresponding 
    id="start_stop". */}
    {/* User Story #18: When I first click the element with id="start_stop", the
     timer should begin running from the value currently displayed in 
     id="session-length", even if the value has been incremented or decremented 
     from the original value of 25. */}
    <div id="start_stop">Clickable Start/Stop Element</div>


    {/* User Story #10: I can see a clickable element with a corresponding 
    id="reset".

    User Story #11: When I click the element with the id of reset, any running 
    timer should be stopped, the value within id="break-length" should return 
    to 5, the value within id="session-length" should return to 25, and the 
    element with id="time-left" should reset to it's default state.
    */}
    <div id="reset">Clickable Reset Element</div>

    {/* User Story #16: I should not be able to set a session or break length 
    to <= 0. */}

    {/* User Story #17: I should not be able to set a session or break length
     to > 60. */}

    {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by
       a value of 1 and updating the display every 1000ms). */}

    {/* User Story #20: If the timer is running and I click the element with 
    id="start_stop", the countdown should pause. */}

    {/* User Story #21: If the timer is paused and I click the element with 
    id="start_stop", the countdown should resume running from the point at which
     it was paused. */}

    {/* User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun. */}

    {/* User Story #23: When a session countdown reaches zero (NOTE: timer MUST 
    reach 00:00), a new break countdown should begin, counting down from the 
    value currently displayed in the id="break-length" element. */}

    {/* User Story #24: When a break countdown reaches zero (NOTE: timer MUST 
      reach 00:00), and a new countdown begins, the element with the id of 
      timer-label should display a string indicating a session has begun. */}

    {/* User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element. */}

    {/* User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep". */}

    {/* User Story #27: The audio element with id="beep" must be 1 second or longer. */}

    {/* User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked. */}
    </div>
  );
}

export default App;
