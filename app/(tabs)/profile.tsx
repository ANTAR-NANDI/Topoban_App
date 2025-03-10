import React from 'react';
import { Link, Redirect,useRouter } from 'expo-router';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const profileImageUrl = 'https://www.example.com/your-profile-image.jpg';
import Toast from 'react-native-toast-message';
const ProfileScreen = () => {
const router = useRouter();
  const handleLogout = async () => {
  try {
    // Remove the auth token from AsyncStorage
    

    // Send a logout request to the backend to revoke the token
    const token = await AsyncStorage.getItem('@auth_token');
    await AsyncStorage.removeItem('@auth_token');
    
    if (token) {
      await axios.post('http://192.168.0.174:8000/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token to revoke it
        },
      });
    }

    // Redirect to login page after successful logout
    router.push('/login'); // or use navigation.replace() if using React Navigation

  } catch (error) {
    console.error('Error during logout', error);
    Toast.show({ type: 'error', text1: 'Logout Error', text2: 'Failed to log out' });
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  profileCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProfileScreen;
