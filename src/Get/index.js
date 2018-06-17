import React from 'react';

import Contract from './Contract/index';
import Key from './Key/index';

export default class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      contract: '',
    };
  }
  update(field, payload) {
    const newState = Object.assign(this.state);
    newState[field] = payload;
    this.setState(newState);
  }
  submit() {
    if (this.state.key.length) {
      alert(JSON.stringify(this.state, null, 2));
    }
  }
  render() {
    return (
      <div>
        <Key update={(payload) => this.update('key', payload)} />
        <input type="button" value="submit" onClick={this.submit.bind(this)} />
        {this.state.contract && <Contract />}
      </div>
    );
  }
};