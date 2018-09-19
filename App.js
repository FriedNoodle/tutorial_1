import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'

export default class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCNtj_iVFD3SjkfSa7Qxeno_VIUJGhC9cI",
      authDomain: "tutorial-1-ed14c.firebaseapp.com",
      databaseURL: "https://tutorial-1-ed14c.firebaseio.com",
      projectId: "tutorial-1-ed14c",
      storageBucket: "tutorial-1-ed14c.appspot.com",
      messagingSenderId: "808165682831"
    };
    firebase.initializeApp(config);
    firebase.database().ref("users/001").set(
      {
      name: "Ikhlas",
      age: "24"
      }
      ).then(()=> {
      console.log("inserted");
      }).catch((error)=>{
      console.log("error");
      });
      firebase.database().ref('users').once('value', (data)=>{
      console.log(data.toJSON());
      })
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.GGWP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
