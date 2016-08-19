import React from 'react';

class InputGrid extends React.Component {
  render() {
    var nodes = this.props.nodes;

    function createNameCell(item) {
      return <td className="nameCell" id={item.key + "_column"} key={item.key}>{item.name}</td>
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
      <table className="inputGrid">
        <tbody>
          <tr>
            <td></td>
            {nameCells}
          </tr>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default InputGrid;
