import React from 'react';

export default class Select extends React.Component {
  render() {
    return (
      <div>
        <input type="button" value="Get" onClick={() => this.props.update('get')} />
        <input type="button" value="Set" onClick={() => this.props.update('set')} />
      </div>
    );
  }
};