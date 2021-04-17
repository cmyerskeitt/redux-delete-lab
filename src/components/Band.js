import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        <li>
        {this.props.band.name}
        <button onClick={this.handleClick}>
          Delete
        </button>
        </li>
      </div>
    );
  }
};

export default Band;
