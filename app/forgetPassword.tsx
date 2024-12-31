import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter(); // Initialize the router

  const handlePasswordReset = () => {
    console.log("Password Reset Requested");
    setLoading(true);

    // Simulate a password reset API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to the verify screen after loading is complete
      router.push('/verify'); // Adjust the path as necessary
    }, 2000); // Simulating a 2-second loading time
  };

  return (
    <View style={styles.container}>
         <Image 
        source={require('../assets/images/logo.png')} // Update the path to where your logo.png is located
        style={styles.logo} 
        resizeMode="contain" // Ensure the logo maintains its aspect ratio
      />
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Please enter your email address to reset your password.
      </Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="#d32f2f" />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
      </View>

      {/* Reset Password Button */}
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Reset Password</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Background color
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#d32f2f', // Title color
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center', // Center the subtitle text
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background for input
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%', // Full width for input field
    elevation: 2, // Shadow effect for elevation
  },
  input: {
    flex: 1,
    height: 50, // Height for the input field
    paddingHorizontal: 10,
    color: '#333',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#d32f2f', // Red color for the button
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  logo: {
    width: 250, // Adjust the width of the logo as necessary
    height: 250, // Adjust the height of the logo as necessary
    borderRadius: 75, // 50% of width/height to make the logo round
    marginBottom: 20, // Space below the logo
  },
});
