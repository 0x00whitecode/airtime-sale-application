import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const BuyAirtime = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handleNetworkSelection = (network) => {
    setSelectedNetwork(network);
  };
  const handleDiscountSelection = (discount) => {
    setSelectedDiscount(discount);
  };

  const handleBuy = () => {
    // Validate form fields
    if (!phoneNumber || !amount || !selectedNetwork) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Ensure phone number is valid (basic check)
    const phoneRegex = /^[0-9]{10}$/; // Assuming phone numbers are 10 digits
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid phone number.');
      return;
    }

    // Ensure amount is a valid number and greater than 0
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      Alert.alert('Error', 'Please enter a valid amount.');
      return;
    }

    // Handle the buy action, e.g., send a request to a backend API
    console.log('Buying Data:', phoneNumber, amount, selectedNetwork);
    Alert.alert('Success', `Data purchase initiated for ${selectedNetwork} with ${amount} Naira.`);
  };

  // Array of networks with their names and image paths
  const networks = [
    { name: 'Glo', image: require('../../assets/images/gloImage.png') },
    { name: 'MTN', image: require('../../assets/images/mtnImage.png') },
    { name: 'Airtel', image: require('../../assets/images/airtelImage.png') },
    { name: '9Mobile', image: require('../../assets/images/etisalat.png') },
    // Add more networks here if necessary
  ];
  const discountOptions = [
    { value: 5, label: '5%' },
    { value: 10, label: '10%' },
    { value: 20, label: '20%' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy Data</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter amount"
          value={amount}
          onChangeText={handleAmountChange}
        />
      </View>

      <Text style={styles.label}>Select Network:</Text>
      <View style={styles.networkOptions}>
        {networks.map((network, index) => (
          <TouchableOpacity
            key={index}
            style={styles.networkOption}
            onPress={() => handleNetworkSelection(network.name)}
          >
            <Image source={network.image} style={styles.networkLogo} />
            <Text style={styles.networkText}>{network.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.amountOptions}>
      
        {discountOptions.map((discount) => (
          <TouchableOpacity
            key={discount.value}
            style={[styles.discountOption, selectedDiscount === discount ? styles.selectedDiscount : null]}
            onPress={() => handleDiscountSelection(discount)}
          >
            <Text style={styles.discountText}>{discount.label}</Text>
          </TouchableOpacity>
        ))}
      
      </View>

      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF7F3', // Light pepper red background
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D90000', // Pepper red text color
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D90000', // Pepper red label color
  },
  discountOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  discountOption: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedDiscount: {
    backgroundColor: '#f0f0f0',
  },
  discountText: {
    fontSize: 14,
  },
  input: {
    height: 50,
    borderColor: '#D90000', // Pepper red border
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 5,
  },
  networkOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  networkOption: {
    alignItems: 'center',
  },
  networkLogo: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  networkText: {
    fontSize: 16,
    color: '#D90000', // Pepper red text color
  },
  amountOptions: {
    // Add custom logic for amount options here
  },
  buyButton: {
    backgroundColor: '#D90000', // Pepper red button
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BuyAirtime;
