import React from 'react';

import Signee from './Signee/index';
import Contract from './Contract/index';

export default class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signee1: {
        name: '',
        key: '',
      },
      signee2: {
        name: '',
        key: '',
      },
      contract: '',
    };
  }
  update(field, payload) {
    const newState = Object.assign(this.state);
    switch (typeof payload) {
      case 'string': {
        newState[field] = payload;
        break
      }
      case 'object': {
        newState[field] = Object.assign(newState[field], payload);
        break;
      }
      default: {}
    }
    this.setState(newState);
  }
  isSubmitButtonEnabled() {
    const areSigneeFieldsDefined = (signee) => {
      return signee.name.length && signee.key.length;
    }
    return (areSigneeFieldsDefined(this.state.signee1) && areSigneeFieldsDefined(this.state.signee2) && this.state.contract.length);
  }
  render() {
    return (
      <div>
        <Signee model={this.state.signee1} update={(payload) => this.update('signee1', payload)} />
        <Signee model={this.state.signee2} update={(payload) => this.update('signee2', payload)} />
        <Contract model={this.state.contract} update={(payload) => this.update('contract', payload)} />
        <input
          id="submit-contract"
          type="button"
          onClick={this.props.submit}
          disabled={!this.isSubmitButtonEnabled()}
          value="Submit"
        />
      </div>
    );
  }
};