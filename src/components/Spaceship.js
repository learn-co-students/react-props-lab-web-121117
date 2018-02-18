// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types'

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship-card">
        <h1>{this.props.name}</h1>
        <h4>Speed: {this.props.speed}</h4>
        <h4>Has Rockets: {this.props.hasRockets}</h4>
        <h4>Colors: {this.props.colors.join(', ')}</h4>
      </div>
    )
  }
}

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: PropTypes.string,
  hasRockets: PropTypes.bool,
  colors: PropTypes.array
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}

export default Spaceship;
