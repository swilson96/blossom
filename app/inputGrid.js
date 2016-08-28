import React from 'react';
import { connect } from 'react-redux';
import InputGridHeader from './inputGridHeader';
import InputGridRow from './inputGridRow';

require("./css/inputGrid.scss");

class InputGrid extends React.Component {
  render() {
    let nodes = this.props.nodes;

    let createRow = function(item) {
      return (
        <InputGridRow key={item.key} currentNode={item} nodes={nodes} />
      )
    }

    var rows = []
    for (var k in nodes) {
      rows.push(createRow(nodes[k]));
    }

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
