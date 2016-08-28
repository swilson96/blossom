import React from 'react';
import { connect } from 'react-redux';
import InputGridHeader from './inputGridHeader';
import InputGridRow from './inputGridRow';

require("./css/inputGrid.scss");

class InputGrid extends React.Component {
  render() {
    let nodes = this.props.nodes;

    let createRow = function(index, item) {
      return (
        <InputGridRow key={item.key} currentNode={item} nodes={nodes} index={index} />
      )
    }

    var i = 0;
    let rows = nodes.map(n => {
      var row = createRow(i, n);
      i += 1;
      return row;
    });

    return (
      <table id="inputGrid" className="inputGrid">
        <InputGridHeader nodes={nodes} />
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nodes: state.nodes
  };
}

export default connect(mapStateToProps)(InputGrid);
