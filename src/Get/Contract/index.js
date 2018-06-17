import React from 'react';

export default class Contract extends React.Component {
  render() {
    return (
      <div>
        <label>Signee 1</label>
        <input id="signee1-name-output" readOnly value={this.props.model.signee1Name} />
        <label>Signee 2</label>
        <input id="signee2-name-output" readOnly value={this.props.model.signee2Name} />
        <label>Contract</label>
        <textarea readOnly id="contract-output">{this.props.model.contract}</textarea>
      </div>
    );
  }
};