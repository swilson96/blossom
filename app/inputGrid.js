import React from 'react';
import { connect } from 'react-redux';

require("./css/inputGrid.scss");

class InputGrid extends React.Component {
  render() {
    let nodes = this.props.nodes;

    let createNameCell = function(item) {
      return (
        <th className="nameCell rotate" id={item.key + "_column"} key={item.key}>
          <div>
            <span>{item.name}</span>
          </div>
        </th>
      )
    }

    let createInputCell = function(x, y) {
      var className = "inputCell";
      if (x.key == y.key) {
        className += " diagonal";
      }
      return <td className={className} id={x.key + ":" + y.key} key={x.key}></td>
    }

    let createRow = function(item) {
      var inputCells = nodes.map(n => createInputCell(n, item));
      return (
        <tr key={item.key}>
          <td className="nameCell" id={item.key + "_row"}>{item.name}</td>
          {inputCells}
        </tr>
      )
    }

    let nameCells = nodes.map(createNameCell);
    let rows = nodes.map(createRow);

    return (
      <table id="inputGrid" className="inputGrid">
        <thead>
          <tr>
            <th></th>
            {nameCells}
          </tr>
        </thead>
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
