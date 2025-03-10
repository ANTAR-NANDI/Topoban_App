import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Central Tapoban Ashram</Text>
      
      <Card style={styles.imageCard}>
        <Image 
          source={require('../../assets/images/dashboard.jpg')} // Replace with actual image URL
          style={styles.image}
        />
      </Card>
      
      <Card style={styles.footerCard}>
      <View style={styles.iconContainer}>
        <Avatar.Icon size={40} icon="clipboard-text" style={styles.icon} />
      </View>
      <Text style={styles.footerText}>শিষ্য নিবন্ধন করতে ক্লিক করুন</Text>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius:15,
    backgroundColor: '#c4a484',
    paddingTop: 50,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  imageCard: {
    width: '90%',
    height: 180,
    overflow: 'hidden',
    borderRadius: 10,
  },
  iconContainer: {
    alignItems: 'center', // Ensures the Avatar is centered within this container
    marginBottom: 10, // Adds space between the icon and text
  },
  image: {
    width: '100%',
    height: '100%',
  },
   footerCard: {
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center', // Centering the content of the Card
  },
   icon: {
    backgroundColor: '#6200ee', // You can customize the icon background color
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#e0d4b0',
  }
});

export default Dashboard;