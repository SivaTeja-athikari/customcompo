import {Text, View} from 'react-native';
import React, {Component} from 'react';
import CustomInput from './src/components/CustomInput';
import MyComponent from './src/blocks/MyComponent';

class App extends Component {
  render() {
    return (
      <View>
        <MyComponent />
      </View>
    );
  }
}

export default App;
