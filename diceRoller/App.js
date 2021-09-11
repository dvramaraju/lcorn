import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Dice1, Dice2, Dice3, Dice4, Dice5, Dice6} from './assets';

const App = () => {
  const [uri, setUri] = useState(Dice1);
  const [uri1, setUri1] = useState(Dice1);

  const playButtonTapped = () => {
    let leftNumber = Math.floor(Math.random() * 6 + 1);
    let rightNumber = Math.floor(Math.random() * 6 + 1);
    setUri(leftNumber);
    setUri1(rightNumber);
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={playButtonTapped}>
          <Image style={styles.image} source={uri} />
        </Pressable>
        <Pressable onPress={playButtonTapped}>
          <Image style={styles.image} source={uri1} />
        </Pressable>
        {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  // gamePlayButton: {
  //   fontSize: 20,
  //   marginTop: 30,
  //   color: '#F2A365',
  //   paddingHorizontal: 40,
  //   paddingVertical: 10,
  //   borderColor: '#30475E',
  //   borderRadius: 5,
  //   borderWidth: 3,
  //   fontWeight: 'bold',
  //   backgroundColor: '#FFFFFF',
  // },
});

export default App;
