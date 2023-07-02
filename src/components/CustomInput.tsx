import {TextInput, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

class CustomInput extends Component {
  render() {
    const {placeholder, value, onChangeText, bColor, h, w} = this.props;

    return (
      <View style={{borderColor: bColor, height: h, width: w, borderWidth: 2}}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   input: {
  //     height: 40,
  //     borderColor: bColor,
  //     borderWidth: 1,
  //     paddingLeft: 10,
  //   },
});

export default CustomInput;
