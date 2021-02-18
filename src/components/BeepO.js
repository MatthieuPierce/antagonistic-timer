import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';

function BeepO (props) {

  const beepAudio = useRef(null);

  // User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 
  // 00:00), a sound indicating that time is up should play. This should utilize
  //  an HTML5 audio tag and have a corresponding id="beep".
  // User Story #27: The audio element with id="beep" must be 1 second or longer

  useEffect(() => {
    if (props.remainingCountdown === 0) { 
      beepAudio.current.play();
    }
  }, [props.remainingCountdown]
  )

  // User Story #28: The audio element with id of beep must stop playing and 
  // be rewound to the beginning when the element with id="reset" is clicked.
  useEffect(() => {
    //the only thing that changes resetCount in state/store is the reset button,
    //so when it changes, stop the audio element if necessary
    beepAudio.current.load();
  }, [props.resetCount])
  

  // Perfectly good Web Audio API solution, doesn't pass fcc test suite
    // const [audioCont, setAudioCont] = useState(null);

    // useEffect( () => {
    //   setAudioCont(new (window.AudioContext || window.webkitAudioContext)());
    // }, []);

    // useEffect( () => {
    // if (props.remainingCountdown === 0) {
    //   // create oscillator(s)
    //   let oscOne = audioCont.createOscillator();
    //   // oscillator frequency
    //   // "F#3": 185.00,
    //   // "Gb3": 185.00,
    //   // "G3": 196.00,
    //   // "G#3": 207.65,
    //   // "Ab3": 207.65,
    //   // "A3": 220.00,
    //   // "A#3": 233.08,s
    //   // "Bb3": 233.08,
    //   // "B3": 246.94,
    //   // "C4": 261.63,
    //   // "C#4": 277.18,
    //   // "Db4": 277.18,
    //   // "D4": 293.66,
    //   oscOne.frequency.value = 277.18;
    //   oscOne.type = "triangle";

    //     //slide rule effect?
    //     // https://www.npmjs.com/package/webaudiofont/v/2.0.1
    //     // https://github.com/surikov/webaudiofont

    //   // create compressor (optional)
    //   let compyMain = audioCont.createDynamicsCompressor();

    //   // create gainNode
    //   let gainMain = audioCont.createGain();

    //   // connect osc --> compressor --> gain --> destination
    //   oscOne.connect(compyMain);
    //   compyMain.connect(gainMain);
    //   gainMain.connect(audioCont.destination);

    //   // set duration var
    //   let dur = 10;

    //   // assign exponential gain drop && oscillator stop && clear audiocontext
    //   gainMain.gain.exponentialRampToValueAtTime(0.0001, audioCont.currentTime + dur);

    //   // .current.play() / start
    //   oscOne.start(audioCont.currentTime);

    //   // to end after duration
    //   oscOne.stop(audioCont.currentTime + dur);
    // }
    // }, [props.remainingCountdown])

  return (
    <audio 
      id="beep" 
      preload
      ref={beepAudio}>
      <source src="/beeoowoop01.ogg" type="audio/ogg"></source>
      <source src="/beeoowoop01.mp3" type="audio/mpeg"></source>
      Beep, yinz.
    </audio>
  );
}

const mapStateToProps = (state) => {
  return {
    remainingCountdown: state.remainingCountdown,
    resetCount: state.resetCount
  }
}

export default connect(mapStateToProps)(BeepO);