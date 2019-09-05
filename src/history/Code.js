import React, { Component } from 'react';
import './Code.css';

export class Code extends Component {
  render() {
    return (
      <div className="Code">
        <pre className="Code-block">
          <code>{this.props.content}</code>
        </pre>
      </div>
    );
  }
}

export default Code;
