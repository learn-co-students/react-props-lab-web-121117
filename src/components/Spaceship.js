// Code The Spaceship Component Here

import React from "react";
import ReactDOM from "react-dom";

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
} //ends class

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

// export default class Spaceship extends React.Component { ... };
// OR declare your component first, and then:
export default Spaceship;
