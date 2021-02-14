// import logo from './logo.svg';
import './App.css';
import CountdownDisplay from './components/CountdownDisplay';
import BreakControls from './components/BreakControls';
import SessionControls from './components/SessionControls';
import PlayControls from './components/PlayControls'
import TimerModule from './components/TimerModule';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Antagonistic Timer</h1>
      <h2>Forcing you to take the breaks, whether you want to or not.</h2>
      </header>
      <BreakControls />
      <SessionControls />

    <CountdownDisplay />

    <PlayControls />
    
    <TimerModule />



    



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
