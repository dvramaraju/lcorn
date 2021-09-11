import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');

  const changeBG = () => {
    let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256,
    )},${Math.floor(Math.random() * 256)})`;
    setRandomColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[Styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={Styles.text}>Tap me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgb(32,0,126)',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});

export default App;
