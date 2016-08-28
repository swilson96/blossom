import React from 'react';
import { connect } from 'react-redux';
import { renameNode } from '../actions';

import InputCell from './inputCell'

import { RIEInput } from 'riek';


class InputGridRow extends React.Component {
  createInputCell(x, y) {
    return <InputCell key={x.key} x={x} y={y} />
  }

  onChange(value) {
    this.props.renameNode(this.props.currentNode.key, value.text);
  }

  render() {
    var inputCells = this.props.nodes.map(n => this.createInputCell(n, this.props.currentNode));
    return (
      <tr key={this.props.currentNode.key}>
        <td className="nameCell" id={this.props.currentNode.key + "_row"}>
          <RIEInput
            value={this.props.currentNode.name}
            change={v => this.onChange(v)}
            propName="text"
            className="editable"
            validate={v => true}
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
    renameNode: (key, name) => {
      dispatch(renameNode(key, name))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputGridRow);
