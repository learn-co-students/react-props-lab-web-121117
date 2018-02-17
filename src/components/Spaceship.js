import React from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
  render() {
    return (
      <ul>
        <li>Name: {this.props.name}</li>
        <li>Speed: {this.props.speed}</li>
        <li>hasRockets: {this.props.hasRockets}</li>
        <li>Colors: {this.props.colors}</li>
      </ul>
    )
  }
}

export default Spaceship

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

ReactDOM.render(
  <Spaceship />, document.getElementById('global')
)
