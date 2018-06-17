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
  isSubmitButtonEnabled() {
    return this.state.key.length;
  }
  render() {
    return (
      <div>
        <Key update={(payload) => this.update('key', payload)} />
        <input
          id="get-contract"
          className="btn btn-primary"
          type="button"
          value="Get contract"
          disabled={!this.isSubmitButtonEnabled()}
        />
        {this.state.contract && <Contract />}
      </div>
    );
  }
};