import React from 'react';

export default class Select extends React.Component {
  render() {
    return (
      <div>
        <input className="btn btn-primary" type="button" value="Get" onClick={() => this.props.update('get')} />
        <input className="btn btn-primary" type="button" value="Set" onClick={() => this.props.update('set')} />
      </div>
    );
  }
};