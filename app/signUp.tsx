import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';



const SignUp = () => {
  const handleSignUp = () => {
    console.log("Sign Up Pressed");
  };

  return (
    <View style={styles.container}>
        <Image 
        source={require('../assets/images/logo.png')} // Update the path to where your logo.png is located
        style={styles.logo} 
        resizeMode="contain" // Ensure the logo maintains its aspect ratio
      />
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={24} color="#d32f2f" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="#d32f2f" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="#d32f2f" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already have an account Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Link href="/signIn">
          <Text style={styles.linkText}> Sign In</Text>
        </Link>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background for a clean look
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#d32f2f', // Red color for the title
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background for inputs
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%', // Full width for input fields
    elevation: 2, // Shadow effect for elevation
  },
  input: {
    flex: 1,
    height: 50, // Increased height for better usability
    paddingHorizontal: 10,
    color: '#333',
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#d32f2f', // Red color for sign-up button
    paddingVertical: 12, // Increased vertical padding
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 250, // Adjust the width of the logo as necessary
    height: 250, // Adjust the height of the logo as necessary
    borderRadius: 75, // 50% of width/height to make the logo round
    marginBottom: 20, // Space below the logo
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  linkText: {
    color: '#d32f2f', // Red color for links
    marginTop: 10,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: '#777',
  },
});
