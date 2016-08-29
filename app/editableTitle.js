import React from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';
import { setTitle } from '../actions/titleActions';

class AddNode extends React.Component {

  setTitleHandler(valueObject) {
    this.props.setTitle(valueObject.text);
  }

  validateTitle(value) {
    return value != '';
  }

  render() {
    return (
        <h1>
          <RIEInput
            value={this.props.title}
            change={vo => this.setTitleHandler(vo)}
            propName="text"
            className="editable"
            validate={v => this.validateTitle(v)}
            classLoading="loading"
            classInvalid="invalid"/>
        </h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNode);
