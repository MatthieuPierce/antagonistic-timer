// import logo from './logo.svg';
import './App.css';
import CountdownDisplay from './components/CountdownDisplay';
import BreakControls from './components/BreakControls';
import SessionControls from './components/SessionControls';
import PlayControls from './components/PlayControls'
import TimerModule from './components/TimerModule';
import BeepO from './components/BeepO';
// import ReactFCCtest from 'react-fcctest';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Antagonistic Timer</h1>
        <h2>Live in the serenity of knowing that whatever you're doing, something uglier is happening here.</h2>
      </header>
      <>
        <BreakControls />
        <SessionControls />
        <CountdownDisplay />
        <PlayControls />
        <TimerModule />
        <BeepO />
        {/* <ReactFCCtest /> */}

      </>
    </div>
  );
}

export default App;
