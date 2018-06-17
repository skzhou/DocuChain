import React from 'react';

export default class Key extends React.Component {
  render() {
    return (
      <div>
        <textarea
          className="form-control"
          onChange={(event) => this.props.update(event.target.value)}
          placeholder="Enter public key"
          value={this.props.model}
        ></textarea>
      </div>
    );
  }
};