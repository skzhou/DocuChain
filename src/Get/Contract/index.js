import React from 'react';

export default class Contract extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <label>Signee 1</label>
          </div>
          <div className="col-md-6">
            <label>Signee 2</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <input id="signee1-name-output" className="form-control" readOnly value={this.props.model.signee1Name} />
          </div>
          <div className="col-md-6">
            <input id="signee2-name-output" className="form-control" readOnly value={this.props.model.signee2Name} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label>Contract</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <textarea rows="4" cols="50" className="form-control" readOnly id="contract-output" value={this.props.model.contract}></textarea>
          </div>
        </div>
      </div>
    );
  }
};