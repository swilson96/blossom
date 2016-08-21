import React from 'react';

require("./css/inputGrid.scss");

class InputGrid extends React.Component {
  render() {
    var nodes = this.props.blossom.nodes;

    function createNameCell(item) {
      return (
        <th className="nameCell rotate" id={item.key + "_column"} key={item.key}>
          <div>
            <span>{item.name}</span>
          </div>
        </th>
      )
    }

    function createInputCell(x, y) {
      var className = "inputCell";
      if (x.key == y.key) {
        className += " diagonal"
      }
      return <td className={className} id={x.key + ":" + y.key} key={x.key}></td>
    }

    function createRow(item) {
      var inputCells = nodes.map(n => createInputCell(n, item));
      return (
        <tr key={item.key}>
          <td className="nameCell" id={item.key + "_row"}>{item.name}</td>
          {inputCells}
        </tr>
      )
    }

    var nameCells = nodes.map(createNameCell);
    var rows = nodes.map(createRow);

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

export default InputGrid;
