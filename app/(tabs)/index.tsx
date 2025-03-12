import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    alert('Form Submitted');
    setShowModal(false); // Close the modal after submission
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Central Tapoban Ashram</Text>

      {/* Add Image Here */}
      <Image source={require('../../assets/images/dashboard.jpg')} style={styles.image} />

      {/* Card Button to Open Modal */}
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Card style={styles.footerCard}>
          <View style={styles.iconContainer}>
            <Avatar.Icon size={40} icon="clipboard-text" style={styles.icon} />
          </View>
          <Text style={styles.footerText}>শিষ্য নিবন্ধন করতে ক্লিক করুন</Text>
        </Card>
      </TouchableOpacity>

      {/* Modal for Registration Form */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.formContainer}>
              <Text style={styles.formTitle}>Registration Form</Text>

              <Text style={styles.label}>Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Name"
                placeholderTextColor="#4D2600"
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.label}>Email *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                placeholderTextColor="#4D2600"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <Text style={styles.label}>Phone Number *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
                placeholderTextColor="#4D2600"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
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

              <Text style={styles.label}>Confirm Password *</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#4D2600"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />

              <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.closeButton} onPress={() => setShowModal(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#c4a484',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: '90%', // Adjust width as necessary
    height: 280, // Adjust height as necessary
    borderRadius: 10,
    marginBottom: 20, // Add margin if you want space between image and form
  },
  footerCard: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    backgroundColor: '#6200ee',
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 10,
  },
  formContainer: {
    paddingVertical: 10,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Dashboard;
