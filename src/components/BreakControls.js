import React from 'react';
import { connect } from 'react-redux';
import { breakUp, breakDown } from '../redux/actions'
import './BreakControls.css'

class BreakControls extends React.Component {
constructor(props) {
  super(props);
}

render() {
  return (
    <div id="breakPad">
      {/* User Story #1: I can see an element with id="break-label" that contains 
      a string (e.g. "Break Length"). */}
      <header className="break-header">
        <h2 id="break-label">
          Break minutes:
        </h2>
        <h2 id="break-length">
          {this.props.breakDurationMins}
        </h2>
      </header>
      {/* User Story #5: I can see an element with a corresponding 
       id="break-length", which by default (on load) displays a value of 5. */}

    
      {/* User Story #3: I can see two clickable elements with
      corresponding IDs: id="break-decrement" and id="break-increment".
      
      User Story #12: When I click the element with the id of break-decrement,
      the value within id="break-length" decrements by a value of 1, and I can 
      see the updated value.
      */}
      <div id="break-decrement" 
        value="break-decrement"
        onClick={this.props.breakDownOne}
        className={`btn`}
        >
        <h3>Break DOWN</h3>
      </div>

      {/* 
      User Story #13: When I click the element with the id of break-increment,
      the value within id="break-length" increments by a value of 1, and I can
      see the updated value. */}
      <div id="break-increment"
        className={`btn`}
        value="break-increment"
      onClick={this.props.breakUpOne}
      >
        <h3>Break UP</h3>
      </div>
    </div>

  )
}
}

const mapStateToProps = (state) => {
  return {
    breakDurationMins: state.breakDurationMins
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    breakUpOne: () => dispatch(breakUp()),
    breakDownOne: () => dispatch(breakDown()) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BreakControls);