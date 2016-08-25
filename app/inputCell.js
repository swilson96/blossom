import React from 'react';
import { connect } from 'react-redux';
import { setEdge } from '../actions';

import { RIENumber } from 'riek';

require("./css/inputCell.scss");

class InputCell extends React.Component {
  getKey() {
    return this.props.x.key + ":" + this.props.y.key;
  }

  onChange(value) {
    this.props.setEdge(this.getKey(), value.number);
  }

  isValidWeight(value) {
    return true;
  }

  render() {
    var className = "inputCell";
    var inner = "";
    if (this.props.x.key == this.props.y.key) {
      className += " diagonal";
    } else {
      var matches = this.props.edges.filter(e => e.key == this.getKey());
      console.log("edges.length: " + this.props.edges.length + " matches.length: " + matches.length);
      var value = matches.length > 0 ? matches[0].weight : 0;

      inner = (
        <RIENumber
          value={value}
          change={v => this.onChange(v)}
          propName="number"
          validate={this.isValidWeight}
          className="cellInput"
          classLoading="loading"
          classInvalid="invalid"/>
      )
    }
    return (
      <td className={className} id={this.getKey()}>
        {inner}
      </td>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    edges: state.edges
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEdge: (key, weight) => {
      dispatch(setEdge(key, weight))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCell)
