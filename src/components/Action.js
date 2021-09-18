import React from 'react';

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should i do?
        </button>
      </div>
    );
  }
}

export default Action;
