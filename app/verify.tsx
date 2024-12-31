import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useState } from 'react';

const Verify = () => {
  const [pin, setPin] = useState(Array(6).fill('')); // Array to hold each digit of the PIN
  const [loading, setLoading] = useState(false); // Loading state

  const handlePinChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;

    // Move focus to the next input field
    if (value && index < 5) {
      const nextInput = index + 1;
      setPin(newPin);
      document.getElementById(`pin-input-${nextInput}`).focus(); // Focus on the next input
    }

    setPin(newPin);
  };

  const handleVerify = () => {
    console.log("Verify PIN:", pin.join('')); // Join array to get the complete PIN

    // Simulate an API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Add functionality to verify the PIN here
    }, 2000); // Simulating a 2 second loading time
  };

  return (
    <View style={styles.container}>
        <Image 
        source={require('../assets/images/logo.png')} // Update the path to where your logo.png is located
        style={styles.logo} 
        resizeMode="contain" // Ensure the logo maintains its aspect ratio
      />
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>
        Please enter the six-digit PIN sent to your email.
      </Text>

      {/* PIN Inputs */}
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder="0"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handlePinChange(value, index)}
            id={`pin-input-${index}`}
            autoFocus={index === 0} // Auto focus on the first input
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button} onPress={handleVerify} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Verify</Text>
        )}
      </TouchableOpacity>

      {/* Resend PIN Link */}
      <TouchableOpacity onPress={() => console.log("Resend PIN Pressed")}>
        <Text style={styles.resendText}>Didn't receive the PIN? Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Changed to white for a cleaner look
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#d32f2f', // Title color
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center', // Center the title
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center', // Center the subtitle text
  },
  logo: {
    width: 250, // Adjust the width of the logo as necessary
    height: 250, // Adjust the height of the logo as necessary
    borderRadius: 75, // 50% of width/height to make the logo round
    marginBottom: 20, // Space below the logo
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', // Wider input fields for better accessibility
    marginBottom: 30,
  },
  input: {
    width: 50, // Width for each input field
    height: 50, // Height for the input field
    backgroundColor: '#f9f9f9', // Light gray background for inputs
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d32f2f', // Red border color
    textAlign: 'center', // Center the text in input
    fontSize: 24,
    color: '#333',
    elevation: 1, // Slight shadow for depth
  },
  button: {
    backgroundColor: '#d32f2f', // Red color for the button
    paddingVertical: 14,
    borderRadius: 10,
    width: '90%', // Button width
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  resendText: {
    color: '#d32f2f', // Red color for resend text
    marginTop: 25,
    textDecorationLine: 'underline',
    fontSize: 14,
    textAlign: 'center', // Center the resend text
  },
});
