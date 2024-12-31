import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const router = useRouter(); // Router for navigation

  const handleSignIn = async () => {
    setIsLoading(true); // Show loading indicator
    console.log("Sign In Pressed");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false); // Hide loading indicator
      router.push('(dashboard)/home'); // Navigate to dashboard home
    }, 2000); // Simulate a 2-second delay
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Pressed");
    // Google sign-in logic here
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo.png')} // Update the path to where your logo.png is located
        style={styles.logo} 
        resizeMode="contain" // Ensure the logo maintains its aspect ratio
      />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={24} color="#d32f2f" />
        <TextInput
          style={styles.input}
          placeholder="Username"
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

      {/* Sign In Button */}
      <TouchableOpacity 
        style={styles.signInButton} 
        onPress={handleSignIn}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>

      {/* Google Sign-In Button */}
      <TouchableOpacity 
        style={styles.googleSignInButton} 
        onPress={handleGoogleSignIn}
      >
        <FontAwesome name="google" size={20} color="white" />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Forgot Password Link */}
      <Link href="/forgetPassword">
        <Text style={styles.linkText}>Forgot Password?</Text>
      </Link>

      {/* Don't Have an Account Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Link href="/signUp">
          <Text style={styles.linkText}> Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#d32f2f',
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
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: '#333',
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  googleSignInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 75,
    marginBottom: 20,
  },
  googleButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  linkText: {
    color: '#d32f2f',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#777',
  },
});
