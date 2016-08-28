import React from 'react';
import { connect } from 'react-redux';
import { renameNode } from '../actions/nodeActions';

import InputCell from './inputCell'

import { RIEInput } from 'riek';


class InputGridRow extends React.Component {
  createInputCell(x, y) {
    return <InputCell key={x.key} x={x} y={y} />
  }

  onChange(valueObject) {
    this.props.renameNode(this.props.index, this.props.currentNode.key, valueObject.text);
  }

  isValid(value) {
    return value && value != '';
  }

  render() {
    var inputCells = this.props.nodes.map(n => this.createInputCell(n, this.props.currentNode));
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
    renameNode: (index, key, name) => {
      dispatch(renameNode(index, key, name))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputGridRow);
