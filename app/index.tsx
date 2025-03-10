
// import { Redirect } from 'expo-router'
// import React from 'react'
// export default function Index() {
//  return <Redirect href="/(auth)/login" />;
// }




import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function login() {
  return (
     <View style={styles.container}>
      <Image source={require('../assets/images/topoban.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome To</Text>
      <Text style={styles.subText}>Central Tapoban Ashram</Text>
      <Text style={styles.title}>Registration App</Text>
       <Link href="/login">
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
      </Link>
     
      
      <Link href="/registration">
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.languageToggle}>🌐 Eng/বাংলা</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D2600',
    alignItems: 'center',
        borderRadius:15,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    color: '#E8D3B5',
    fontSize: 18,
  },
  subText: {
    color: '#E8D3B5',
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#E8D3B5',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 15,
  },
  loginText: {
    fontSize: 18,
    color: '#4D2600',
    alignItems:'center',
    fontWeight: 'bold',
  },
  registerButton: {
    borderColor: '#E8D3B5',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  registerText: {
    fontSize: 18,
    color: '#E8D3B5',
    fontWeight: 'bold',
  },
  languageToggle: {
    color: '#E8D3B5',
    fontSize: 16,
    marginTop: 30,
  },
});