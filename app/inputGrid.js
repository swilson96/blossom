import React from 'react';
import { connect } from 'react-redux';
import { TableHeader, InputGridRow } from './inputGridComponents';

require("./css/inputGrid.scss");

class InputGrid extends React.Component {
  render() {
    let nodes = this.props.nodes;

    let createRow = function(item) {
      return (
        <InputGridRow key={item.key} currentNode={item} nodes={nodes} />
      )
    }

    let rows = nodes.map(createRow);

    return (
      <table id="inputGrid" className="inputGrid">
        <TableHeader nodes={nodes} />
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
  }
}

export default connect(mapStateToProps)(InputGrid);
