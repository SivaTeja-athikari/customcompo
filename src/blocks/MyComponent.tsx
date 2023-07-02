import {Text, View} from 'react-native';
import React, {Component} from 'react';
import CustomInput from '../components/CustomInput';

class MyComponent extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (text: any) => {
    this.setState({inputValue: text});
  };

  render() {
    return (
      <View>
        <CustomInput
          bColor={'red'}
          w={'70%'}
          h={60}
          placeholder="Enter your text"
          value={this.state.inputValue}
          onChangeText={this.handleInputChange}
        />
      </View>
    );
  }
}

export default MyComponent;
