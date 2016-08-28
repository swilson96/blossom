import React from 'react';

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

class InputGridHeader extends React.Component {
  createNameCell(item) {
    return <NodeHeader key={item.key} node={item} />
  }

  render() {
    let nameCells = [];
    for (var k in this.props.nodes) {
        nameCells.push(this.createNameCell(this.props.nodes[k]));
    }

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

export default InputGridHeader;
