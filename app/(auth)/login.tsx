import React, { useState } from 'react';
import { Link, Redirect,useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = () => {
  const [userToken, setUserToken] = useState('');
  const router = useRouter();
  // State to store form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const validateForm = () => {
    
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      Toast.show({ type: 'error', text1: 'Validation Error', text2: 'Enter a valid email address.' });
      return false;
    }
    
    if (!password.trim()) {
      Toast.show({ type: 'error', text1: 'Validation Error', text2: 'Password must be at least 6 characters.' });
      return false;
    }
    
    return true;
  };
  // Handle registration logic
  const handleRegister = async () => {
        if (!validateForm()) return

          try {
            const response = await axios.post('http://192.168.0.174:8000/api/login', {
              email,
              password,
            });
            console.log(response);
            await AsyncStorage.setItem('@auth_token', response.data.token);
            console.log(await AsyncStorage.getItem('@auth_token'));
            await AsyncStorage.setItem('@user', JSON.stringify(response.data.user.id));
            console.log(await AsyncStorage.getItem('@user'));
            const {data:user} = await axios.get('http://192.168.0.174:8000/api/user', {
                headers:{
                  Accept:"application/json",
                  Authorization: `Bearer ${response.data.token}`
                }
            });
            console.log(user);

              Toast.show({ type: 'success', text1: 'Successful', text2: 'Login Successfully !' });
              router.push('/(tabs)')
          } catch (error) {
            Toast.show({ type: 'error', text1: 'Validation Error', text2: error.response.data.error });
          }
        };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>

      

      <Text style={styles.label}>Email *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        placeholderTextColor="#4D2600"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

     
      <Text style={styles.label}>Password *</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#4D2600"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Link href="/registration" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </Link>
       <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5C295',
    padding: 20,
    borderRadius:15,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4D2600',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D2600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#4D2600',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    color: '#4D2600',
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#4D2600',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#4D2600',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
