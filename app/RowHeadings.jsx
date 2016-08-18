import React from 'react';

class RowHeadings extends React.Component {
  render() {
    var nodes = this.props.nodes;

    function createRows(item) {
      return <li key={item.key}>{item.name}</li>
    }

    var rows = nodes.map(createRows);

    return (
      <ul className="rows">
        {rows}
      </ul>
    );
  }
}

export default RowHeadings;
