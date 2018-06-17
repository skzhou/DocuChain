import React from 'react';

export default class Key extends React.Component {
  render() {
    return (
      <div>
        <label>Key</label>
        <textarea
          id="key-input"
          className="form-control"
          onChange={(event) => this.props.update(event.target.value)}
          value={this.props.model}
        ></textarea>
      </div>
    );
  }
};