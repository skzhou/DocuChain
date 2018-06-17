import React from 'react';

export default class Contract extends React.Component {
  render() {
    return (
      <div>
        <label>Contract</label>
        <textarea
          className="form-control"
          rows="4"
          cols="50"
          onChange={(event) => this.props.update(event.target.value)}
          value={this.props.model}
        ></textarea>
      </div>
    );
  }
};