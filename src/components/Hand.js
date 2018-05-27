import React, { Component } from 'react';
import {zip} from '../actions/ZipAction'
import { connect } from 'react-redux';

class Hand extends Component {
  handleZipClick = () => {
    if (this.props.zipped) {
      this.props.zip(false);
    } else {
      this.props.zip(true);
    }
  }
  zipperButtonString = (zipped) => {
    if (zipped) {
      return "Zip Down"
    } else {
      return "Zip Up"
    }
  }
  render() {
    return (
      <div>
        <h3>This is hand!</h3>
        <button
          onClick={this.handleZipClick} >
          {this.zipperButtonString(this.props.zipped)}
        </button>
      </div>
    )
  }
}


const mapStateToProps = state => ({
 ...state.zipReducer
})

const mapDispatchToProps = dispatch => ({
  zip: (isZipped) => dispatch(zip(isZipped))
})

export default connect(mapStateToProps, mapDispatchToProps)(Hand);
