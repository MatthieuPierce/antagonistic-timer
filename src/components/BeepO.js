import React, {useEffect} from 'react';
import {connect} from 'react-redux';

function BeepO (props) {

  const beepAudio = useRef(null);

  

  useEffect( () => {
  if (props.remainingCountdown === 0) {
    //beepAudio.current.play()
    //audioContext.oscillator.gainNode.play()
  }
  }, [props.remainingCountdown])

  return (
    <audio ref={beepAudio} id="beep">Beep, y'all.</audio>
  )
}

const mapStateToProps = (state) => {
  return {
    remainingCountdown: state.remainingCountdown
  }
}

export default connect(mapStateToProps)(BeepO);