import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      
      <View style={styles.iconContainer}>
      <Image 
        source={require('../assets/images/logo.png')} // Update the path to where your logo.png is located
        style={styles.logo} 
        resizeMode="contain" // Ensure the logo maintains its aspect ratio
      />
      </View>
     
      <Text style={styles.description}>
        Your gateway to buying affordable data plans with ease! Experience the best features tailored just for you.
      </Text>
      
      <Link href="/signIn" style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Link>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light Gray background
    padding: 20,
    paddingTop: 60,
    position: 'relative',
  },
  logo: {
    width: 250, // Adjust the width of the logo as necessary
    height: 250, // Adjust the height of the logo as necessary
    borderRadius: 75, // 50% of width/height to make the logo round
    marginBottom: 20, // Space below the logo
  },
  iconContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700', // Bolder font weight
    color: '#C62828', // Darker Red for the title
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 1.5, // Increased letter spacing for elegance
  },
  description: {
    fontSize: 18,
    color: '#B71C1C', // Medium Red for the description
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24, // Increased line height for readability
    paddingHorizontal: 30,
    marginTop: 20,
  },
  additionalDescription: {
    fontSize: 16,
    color: '#B71C1C', // Medium Red for the additional description
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22, // Increased line height for readability
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#C62828', // Primary Red color for button
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 20,
    fontWeight: '600',
  },
});
