import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('0');

  const buttonPress = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please Enter a value!',
        backgroundColor: 'green',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  };
  return (
    <>
      <ScrollView backgroundColor="#1b262c" keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              style={styles.inputValue}
              onChangeText={value => {
                setInputValue(value);
              }}
            />
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                key={currency}
                style={styles.converterButton}
                onPress={() => buttonPress(currency)}>
                <Text style={{color: 'white', fontSize: 12}}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setInputValue(0);
                setResultValue(0);
              }}
              style={{
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                margin: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white'}}>Clear</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    borderRadius: 20,
  },
  resultValue: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    borderRadius: 20,
  },
  inputValue: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '30%',
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#0f4c75',
    borderRadius: 20,
  },
});
export default App;
