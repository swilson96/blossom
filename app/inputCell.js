import React from 'react';
import { connect } from 'react-redux';
import { setEdge } from '../actions';

import { RIENumber } from 'riek';

require("./css/inputCell.scss");

class InputCell extends React.Component {
  getKey() {
    return this.props.x.key + ":" + this.props.y.key;
  }

  onChange(valueObject) {
    this.props.setEdge(this.getKey(), +valueObject.number);
  }

  isValidWeight(value) {
    return value && !isNaN(parseFloat(value));
  }

  render() {
    var className = "inputCell";
    var inner = "";
    if (this.props.x.key == this.props.y.key) {
      className += " diagonal";
    } else {
      var match = this.props.edges[this.getKey()];
      var value = match ? match.weight : 0;

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
      <td className={className} id={this.getKey()}>
        {inner}
      </td>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    edges: state.edges
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
