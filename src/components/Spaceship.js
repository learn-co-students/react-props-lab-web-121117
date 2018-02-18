// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Spaceship extends React.Component {
  render(){
    return (
      <div className="wrapper">
        <h1>{this.props.name}</h1>
        <h4>{this.props.speed}</h4>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.propTypes = {
  speed: PropTypes.string,
  hasRockets: PropTypes.bool,
  colors: PropTypes.array
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
