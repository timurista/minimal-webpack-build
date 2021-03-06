import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
import MyFancyLib from '../my_fancy_lib';
import OtherLib from '../other_lib';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyFancyLib />
        <OtherLib />
        <HelloWorld title="Hello from React webpack" />
      </div>
    );
  }
}

export default hot(App);
