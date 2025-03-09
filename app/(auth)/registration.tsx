import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      
      
      <Text style={styles.label}>Name *</Text>
      <TextInput style={styles.input} placeholder="Enter Your Name" placeholderTextColor="#4D2600" />
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter Your Email" placeholderTextColor="#4D2600" />
      
      <Text style={styles.label}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Enter Your Phone Number" placeholderTextColor="#4D2600" keyboardType="phone-pad" />
      
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#4D2600" secureTextEntry />
      
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#4D2600" secureTextEntry />
      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
       <Link href="/login" asChild>
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
      </Link>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5C295',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor:"#c0f40d",
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
