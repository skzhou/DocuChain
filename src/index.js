import React from 'react';
import ReactDOM from 'react-dom';
// import { Web3Provider } from 'react-web3';

import Header from './Header/index';
import Footer from './Footer/index';
import Select from './Select/index';
import Landing from './Landing/index';
import Set from './Set/index';
import Get from './Get/index';

import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signees: [
        {
          name: 'Tom',
        },
        {
          name: 'Jerry',
        },
      ],
      page: 'landing' // ['landing', 'set', 'get']
    };
  }
  update(field, payload) {
    const newState = Object.assign(this.state);
    newState[field] = payload;
    this.setState(newState);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <div style={{display: (this.state.page === 'landing' ? 'block' : 'none')}}>
          {/* <Landing update={(payload) => this.update('page', payload)} /> */}
          <Select update={(payload) => this.update('page', payload)} />
        </div>
        <div style={{display: (this.state.page === 'set' ? 'block' : 'none')}}>
          <Set signees={this.state.signees} />
        </div>
        <div style={{display: (this.state.page === 'get' ? 'block' : 'none')}}>
          <Get signees={this.state.signees} />
        </div>
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
