import React from 'react';
import { connect } from 'react-redux';
import { RIENumber } from 'riek';
import { setEdge } from '../actions/edgeActions';

import BlossomStore from '../storage/blossomStore'

require("./css/inputCell.scss");

class InputCell extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.blossomStore = new BlossomStore();
    this.connected = false;
  }

  getKey() {
    return `${this.props.x.key}:${this.props.y.key}`;
  }

  onChange(valueObject) {
    if (!this.blossomStore.isConnected()) {
      this.props.setEdge(this.getKey(), +valueObject.number);
    } else {
      this.setState({
        edge: { key: this.getKey(), weight: +valueObject.number }
      });
    }
  }

  isValidWeight(value) {
    return value && !isNaN(parseFloat(value));
  }

  getClassName() {
    var classname = "inputCell";

    if (this.props.highlights.indexOf(this.getKey()) >= 0) {
      classname += ' highlight';
    }

    if (this.props.x.key == this.props.y.key) {
      classname += ' diagonal';
    }

    return classname;
  }

  getEdgeWeight() {
    var edge = this.blossomStore.isConnected() ? this.state.edge : this.props.edge;
    return edge ? (edge.weight ? edge.weight : 0) : 0;
  }

  render() {

    if (!this.connected && this.blossomStore.isConnected()) {
      this.blossomStore.syncEdge(this.getKey(), this);
      this.connected = true;
    }

    var inner = "";
    if (this.props.x.key != this.props.y.key) {

      var value = this.getEdgeWeight();

      inner = (
        <RIENumber
          value={value}
          change={vo => this.onChange(vo)}
          propName="number"
          validate={v => this.isValidWeight(v)}
          className="cellInput"
          classLoading="loading"
          classInvalid="invalid"/>
      )
    }
    return (
      <td id={this.getKey()} className={this.getClassName()}>
        {inner}
      </td>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    edge: state.edges[ownProps.x.key + ':' + ownProps.y.key],
    highlights: state.highlights,
    firebaseKey: state.key
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEdge: (key, weight) => {
      dispatch(setEdge(key, weight))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCell);
