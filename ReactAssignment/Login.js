import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Image, Alert } from 'react-native';


const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { userName: name , userEmail: email });
    } else {
      Alert.alert('Please enter both name and email.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Jobizz</Text>
        <Text style={styles.subheader}>Welcome Back 👋</Text>
        <Text style={styles.subhead}>Let's log in Apply to jobs!</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.placeholder}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.placeholder}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <Pressable
          onPress={handleLogin}
          style={[styles.button]}
          disabled={!name || !email}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Log in</Text>
        </Pressable>
        
        <View style={{marginTop:30}}> 
        <Image source={require("./assets/Group 52.png")} />
        <Image source={require("./assets/Group 57.png")} />
        </View>
       

        <View style={{flexDirection: 'row'}}>
        <Text style={{ fontSize: 12, color: '#AFB0B6'}}>Haven't an account?</Text> 
        <Text style={{fontSize:12, color: 'blue' }}>Register</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginLeft: 30,
    marginTop: 100,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#356899",
    marginBottom: 25,
  },
  subheader: {
    color: "#0D0D26",
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 15,
  },
  subhead: {
    color: "#AFB0B6",
    fontSize: 20,
  },
  placeholder: {
    fontSize: 20,
    borderWidth: 0.5,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderColor: '#AFB0B6',
    width: '80%',
  },
  button: {
    width: 327,
    height: 70,
    borderRadius: 5,
    backgroundColor: "#356899",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
 
  icon: {
    marginTop: 20,
  },
});

export default Login;