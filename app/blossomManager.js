import React from 'react';
import { connect } from 'react-redux';
import { setKey, setBlossom } from '../actions';
import BlossomStore from './blossomStore';

require("./css/blossomManager.scss");

class BlossomManager extends React.Component {
  constructor() {
    super();
    this.blossomStore = new BlossomStore();
    this.state = {};
  }

  saveNewBlossom(e) {
    e.preventDefault();
    var key = this.blossomStore.saveNewBlossom(this.props.blossom);
    this.props.setKey(key);
    this.setState({message:''});
  }

  loadBlossom(e) {
    e.preventDefault();

    this.blossomStore.loadBlossom(this._blossomInput.value, blossom => {
      if (blossom) {
        this.setState({message:''});
        this.props.setBlossom(blossom);
        this.props.setKey(this._blossomInput.value);
      } else {
        this.setState({message:"Not a valid blossom key"});
      }
    });

    this._blossomInput.value = "";
  }

  render() {
    var action = "";
    if (!this.props.keyValue) {
      action = (
        <form onSubmit={(e) => this.saveNewBlossom(e)}>
          <button type="submit">Save as new blossom</button>
        </form>
      );
    }

    var currentBlossom = "";
    if (this.props.keyValue) {
      currentBlossom = <div className="currentBlossom">{this.props.keyValue}</div>
    }

    return (
      <div className="blossomManager">
        {currentBlossom}
        <div className="blossomAction">{action}</div>
        <div className="blossomLoad">
          <form onSubmit={(e) => this.loadBlossom(e)}>
            <input ref={(b) => this._blossomInput = b} placeholder="enter blossom key"></input>
            <button type="submit">Load</button>
          </form>
        </div>
        <div className="blossomMessage">{this.state.message}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blossom: {
      nodes: state.nodes,
      edges: []
    },
    keyValue: state.key
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setKey: (key) => {
      dispatch(setKey(key))
    },
    setBlossom: (blossom) => {
      dispatch(setBlossom(blossom));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlossomManager);
