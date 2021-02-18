import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';

function BeepO (props) {

  const beepAudio = useRef(null);

  const [audioCont, setAudioCont] = useState(null);

  useEffect( () => {
    // option #2: create a single audioContext at first render and leave it open until unmount
    // for multiple effects, beeps, etc? 
    setAudioCont(new (window.AudioContext || window.webkitAudioContext)());

  }, []);

  

  useEffect( () => {
  if (props.remainingCountdown === 0) {
    // option #1: create (and close) audioContext on individual trigger
    // setAudioCont(new window.AudioContext());
    // console.log(`beepO audioCont is now:`);
    // console.log(audioCont);

    // create oscillator(s)
    let oscOne = audioCont.createOscillator();
    // oscillator frequency
    // "F#3": 185.00,
    // "Gb3": 185.00,
    // "G3": 196.00,
    // "G#3": 207.65,
    // "Ab3": 207.65,
    // "A3": 220.00,
    // "A#3": 233.08,
    // "Bb3": 233.08,
    // "B3": 246.94,
    // "C4": 261.63,
    // "C#4": 277.18,
    // "Db4": 277.18,
    // "D4": 293.66,
    oscOne.frequency.value = 277.18;
    oscOne.type = "triangle";

      //slide rule effect?
      // https://www.npmjs.com/package/webaudiofont/v/2.0.1
      // https://github.com/surikov/webaudiofont

    // create compressor (optional)
    let compyMain = audioCont.createDynamicsCompressor();

    // create gainNode
    let gainMain = audioCont.createGain();

    // ??? assign audiocontext to <audio> element somehow
    // ???


    // connect osc --> compressor --> gain --> destination
    oscOne.connect(compyMain);
    compyMain.connect(gainMain);
    gainMain.connect(audioCont.destination);

    // set duration var
    let dur = 10;

    // assign exponential gain drop && oscillator stop && clear audiocontext
    gainMain.gain.exponentialRampToValueAtTime(0.0001, audioCont.currentTime + dur);

    // .current.play() / start
    oscOne.start(audioCont.currentTime);

    // to end after duration
    oscOne.stop(audioCont.currentTime + dur);
  }
  }, [props.remainingCountdown])

  return (
    <audio id="beep" ref={beepAudio}>Beep, yinz.</audio>
  );
}

const mapStateToProps = (state) => {
  return {
    remainingCountdown: state.remainingCountdown
  }
}

export default connect(mapStateToProps)(BeepO);