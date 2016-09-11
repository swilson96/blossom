import React from 'react';
import { connect } from 'react-redux';
import { renameNode } from '../actions/nodeActions';
import { selectNode } from '../actions/selectNodeActions';

import InputCell from './inputCell'

import { RIEInput } from 'riek';


class InputGridRow extends React.Component {
  createInputCell(x, y) {
    return <InputCell key={x.key} x={x} y={y} />
  }

  onChange(valueObject) {
    this.props.renameNode(this.props.currentNode.key, valueObject.text);
  }

  isValid(value) {
    return value && value != '';
  }

  expandNode() {
    this.props.selectNode(this.props.currentNode);
  }

  render() {
    var inputCells = [];
    for (var k in this.props.nodes) {
      inputCells.push(this.createInputCell(this.props.nodes[k], this.props.currentNode));
    }
    return (
      <tr key={this.props.currentNode.key}>
        <td className="nameCell" id={this.props.currentNode.key + "_row"}>
          <RIEInput
            value={this.props.currentNode.name}
            change={vo => this.onChange(vo)}
            propName="text"
            className="editable"
            validate={v => this.isValid(v)}
            classLoading="loading"
            classInvalid="invalid"/>
          { this.props.isExpanded ? '' : <span onClick={e => this.expandNode(e)}>[EXPAND]</span> }
        </td>
        {inputCells}
      </tr>
    );
  }
}


const mapStateToProps = (state) => {
  return { };
}

const mapDispatchToProps = (dispatch) => {
  return {
    renameNode: (key, name) => {
      dispatch(renameNode(key, name))
    },
    selectNode: (node) => {
      dispatch(selectNode(node))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputGridRow);
