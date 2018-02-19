// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component {

  static defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ["black", "red"]
  };


  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
};
