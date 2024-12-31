import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const pin = () => {
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Automatically focus on the next input field
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Move to the previous field if the input is cleared
    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (pin.every((digit) => digit !== '')) {
      Alert.alert('Payment Confirmed', `Your PIN: ${pin.join('')}`);
    } else {
      Alert.alert('Error', 'Please enter all 4 digits of the PIN.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter PIN to Confirm Payment</Text>
      <View style={styles.inputContainer}>
        {pin.map((_, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={pin[index]}
            onChangeText={(value) => handleInputChange(value, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default pin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3F3',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  input: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#FF5252',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B71C1C',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF5252',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#B71C1C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
