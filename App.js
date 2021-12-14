import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TextInput, Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/dollars.png';


export default function App() {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 300 }} style={styles.img} /> 
      <Text style={styles.txt}>Converter!</Text>
      <TextInput style={styles.input} value={"" + (text * 1184.10).toFixed(2)}  />
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Type Here"
        keyboardType="numeric"
        onChangeText = {text => setText(text)}
      />
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0bdee6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 305,
    height: 300,
    marginBottom: 10,
    borderRadius:50
  },
  txt: {
    color: '#fff',
    fontSize: 40,
    marginHorizontal: 15,
  }, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
