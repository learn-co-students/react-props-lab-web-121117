import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>

        <h3>Rockets: {this.props.hasRockets}</h3>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
