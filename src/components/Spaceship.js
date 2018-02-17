// In the `components/Spaceship.js` file, create a `Spaceship` React component
// 2. This component has several props:
//    1. `name` (string)
//    2. `speed` (number, defaults to `slow`)
//    3. `hasRockets` (boolean, defaults to `false`)
//    4. `colors` (array of strings, defaults to `['black', 'red']`)
//
// Feel free to render out the data in any form you wish!
//
// Note: you'll need to _export_ the `Spaceship` component, like this:
//
// ```js
// export default class Spaceship extends React.Component { ... };
// // OR declare your component first, and then:
//
// ```
import React from 'react';

export default class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <li>{this.props.name}</li>
        <li>{this.props.speed}</li>
        <li>{this.props.hasRockets}</li>
        <li>{this.props.colors}</li>
      </div>
  )
  };
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
};
