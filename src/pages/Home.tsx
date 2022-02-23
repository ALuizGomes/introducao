import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <>
    <View style={styles.container}>
      <Text style = {styles.Title}>André Gomes!</Text>
      
      {/* <StatusBar style="auto" /> */}

      <TextInput style={styles.input} placeholder= 'New Skill' placeholderTextColor= '#EEE'/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.innerText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#a370f7',
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 15,
    // fontFamily: ,
  }
});