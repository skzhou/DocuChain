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
        alreadySigned: true,
      },
      signee2: {
        name: '',
        key: '',
      },
      contract: '',
    };
    // fetch('localhost:4000/api?endpoint=getSignature')
    //   .then((response => {
    //     // response = {
    //     //   name: ''
    //     // }
    //     const newState = Object.assign(this.state);
    //     newState.signee1.name = response.name;
    //     newState.signee1.alreadySigned = true;
    //     this.setState(newState);
    //   }))
    //   .catch(error => {
    //     throw error;
    //   });
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
        <div className="row">
          <div className="col-md-6">
            <Signee
              disabled={this.state.signee1.alreadySigned}
              label="Signee 1"
              model={this.state.signee1}
              update={(payload) => this.update('signee1', payload)}
            />
          </div>
          <div className="col-md-6">
            <Signee
              label="Signee 2"
              model={this.state.signee2}
              update={(payload) => this.update('signee2', payload)}
            />
          </div>
        </div>
        <Contract model={this.state.contract} update={(payload) => this.update('contract', payload)} />
        <input
          id="submit-contract"
          className="btn btn-primary"
          type="button"
          onClick={this.props.submit}
          disabled={!this.isSubmitButtonEnabled()}
          value="Save contract"
        />
      </div>
    );
  }
};