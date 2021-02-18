// import logo from './logo.svg';
import './App.css';
import CountdownDisplay from './components/CountdownDisplay';
import BreakControls from './components/BreakControls';
import SessionControls from './components/SessionControls';
import PlayControls from './components/PlayControls'
import TimerModule from './components/TimerModule';
import BeepO from './components/BeepO';



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
      <BeepO />
      
    </div>
  );
}

export default App;
