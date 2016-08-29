import React from 'react';
import { connect } from 'react-redux';
import { setKey } from '../actions';
import { addNodeFromStore, renameNode, deleteNode } from '../actions/nodeActions';
import { setEdge } from '../actions/edgeActions';
import { setTitle } from '../actions/titleActions';
import BlossomStore from './blossomStore';

require("./css/blossomManager.scss");

class BlossomManager extends React.Component {
  constructor() {
    super();
    this.blossomStore = new BlossomStore();
    this.state = {};
  }

  clearMessage() {
    this.setState({message:''});
  }

  saveNewBlossom(e) {
    e.preventDefault();
    var key = this.blossomStore.saveNewBlossom(this.props.blossom);
    this.props.setKey(key);
    this.clearMessage();

    // And now listen for changes
    this.connectToStore(key, s => {});
  }

  loadBlossomClick(e) {
      e.preventDefault();
      this.connectToStore(this._blossomInput.value, success => {
        if (success) {
          this.clearMessage();
          this.props.setKey(this._blossomInput.value);
          this._blossomInput.value = "";
        } else {
          this.setState({message:"Not a valid blossom key"});
        }
      });
  }

  connectToStore(key, callback) {
    this.blossomStore.loadBlossom(key,
      callback,
      (i, n) => this.props.addNodeFromStore(i, n),
      (i, n) => this.props.renameNodeFromStore(i, n),
      i => this.props.removeNodeFromStore(i),
      (k, e) => this.props.setEdgeFromStore(k, e),
      (k, e) => this.props.setEdgeFromStore(k, e),
      t => this.props.setTitleFromStore(t));
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
          <form onSubmit={(e) => this.loadBlossomClick(e)}>
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
      edges: state.edges,
      title: state.title
    },
    keyValue: state.key
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setKey: (key) => {
      dispatch(setKey(key))
    },
    addNodeFromStore: (index, node) => {
      dispatch(addNodeFromStore(index, node, true));
    },
    renameNodeFromStore: (index, node) => {
      dispatch(renameNode(index, node.name, true));
    },
    removeNodeFromStore: index => {
      dispatch(deleteNode(index, true));
    },
    setEdgeFromStore: (key, edge) => {
      dispatch(setEdge(key, edge.weight, true));
    },
    setTitleFromStore: (title) => {
      dispatch(setTitle(title, true));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlossomManager);
