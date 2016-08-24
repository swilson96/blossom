import React from 'react';
import InputCell from './inputCell'

class NodeHeader extends React.Component {
  render() {
    return (
      <th className="nameCell rotate" id={this.props.node.key + "_column"}>
        <div>
          <span>{this.props.node.name}</span>
        </div>
      </th>
    )
  }
}

class TableHeader extends React.Component {
  createNameCell(item) {
    return <NodeHeader key={item.key} node={item} />
  }

  render() {
    let nameCells = this.props.nodes.map(this.createNameCell);

    return (
      <thead>
        <tr>
          <th></th>
          {nameCells}
        </tr>
      </thead>
    )
  }
}

class InputGridRow extends React.Component {
  createInputCell(x, y) {
    return <InputCell key={x.key} x={x} y={y} />
  }

  render() {
    var inputCells = this.props.nodes.map(n => this.createInputCell(n, this.props.currentNode));
    return (
      <tr key={this.props.currentNode.key}>
        <td className="nameCell" id={this.props.currentNode.key + "_row"}>{this.props.currentNode.name}</td>
        {inputCells}
      </tr>
    )
  }
}

export { TableHeader, InputGridRow }
