import React, { Component } from 'react';
import { connect } from "react-redux";


class SmartyPants extends Component {
  zippedDisplayString = (zipped) => {
    if (zipped) {
      return "zippity zipped up!"
    } else {
      return "zoopity zooped down!"
    }
  }
  render() {
    return (
      <div>
        <h3>This is pants!</h3>
        <div>{this.zippedDisplayString(this.props.zipped)}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.zipReducer
};

export default connect(mapStateToProps)(SmartyPants);
