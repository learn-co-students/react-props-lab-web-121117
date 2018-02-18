import React from 'react';

class SpaceShip extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;
    return (
      <div classname="spaceship">
        <h2>{name}</h2>
        <h3>Speed: {speed}</h3>
        <h3>Has Rockets? {hasRockets ? "yes" : "no"}</h3>
        <h3>Colors:</h3>
        <ul>
          {colors.map(color => <li>{color}</li>)}
        </ul>
      </div>
    )
  }
};

SpaceShip.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

export default SpaceShip;