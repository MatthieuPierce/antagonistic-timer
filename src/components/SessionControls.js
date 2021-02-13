import React from 'react';
import { connect } from 'react-redux';
import { sessionUp, sessionDown } from '../redux/actions'

class SessionControls extends React.Component {
constructor(props) {
  super(props);
}

render() {
  return (
    <div id="sessionPad">
      {/* User Story #2: I can see an element with id="session-label" that contains 
      a string (e.g. "Session Length"). */}
      <p id="session-label">Session Length (mins):</p>

      {/* User Story #6: I can see an element with a corresponding 
      id="session-length", which by default displays a value of 25. */}
      <div id="session-length">
        {this.props.sessionDurationMins}
      </div>
    
      {/* User Story #3: I can see two clickable elements with
      corresponding IDs: id="session-decrement" and id="session-increment".
      
      User Story #12: When I click the element with the id of session-decrement,
      the value within id="session-length" decrements by a value of 1, and I can 
      see the updated value.
      */}
      <div id="session-decrement" 
        value="session-decrement"
        onClick={this.props.sessionDownOne}
        >
        <h2>Clickable Session Decrement</h2>
      </div>

      {/* 
      User Story #13: When I click the element with the id of session-increment,
      the value within id="session-length" increments by a value of 1, and I can
      see the updated value. */}
      <div id="session-increment" 
      value="session-increment"
      onClick={this.props.sessionUpOne}
      >
        <h2>Clickable Session Increment</h2>
      </div>
    </div>

  )
}
}

const mapStateToProps = (state) => {
  return {
    sessionDurationMins: state.sessionDurationMins
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sessionUpOne: () => dispatch(sessionUp()),
    sessionDownOne: () => dispatch(sessionDown()) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionControls);