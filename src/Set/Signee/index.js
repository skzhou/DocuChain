import React from 'react';

export default class Signee extends React.Component {
  update(payload) {
    this.props.update(payload);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          value={this.props.model.name}
          onChange={(event) => this.props.update({name: event.target.value})}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Key"
          onChange={(event) => this.props.update({key: event.target.value})}
        >{this.props.model.key}</textarea>
      </div>
    );
  }
};