import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Install this package if not already installed
import { useRouter } from 'expo-router';

const Airtime = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

  const handleBuy = async () => {
    if (!phoneNumber || !amount || !selectedNetwork) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid phone number.');
      return;
    }

    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      Alert.alert('Error', 'Please enter a valid amount.');
      return;
    }

    setLoading(true);

    // Simulate an API call delay
    setTimeout(async () => {
      setLoading(false);

      const details = {
        phoneNumber,
        amount,
        selectedNetwork,
        discount: selectedDiscount?.value || null,
      };

      try {
        // Save to local storage
        await AsyncStorage.setItem('airtimeDetails', JSON.stringify(details));

        Alert.alert('Success', `Airtime purchase saved for ${selectedNetwork} with ${amount} Naira.`);
        
        // Navigate to PIN page
        router.push('/pin');
      } catch (error) {
        Alert.alert('Error', 'Failed to save details. Please try again.');
        console.error(error);
      }
    }, 2000);
  };

  const networks = [
    { name: 'Glo', image: require('../../assets/images/gloImage.png') },
    { name: 'MTN', image: require('../../assets/images/mtnImage.png') },
    { name: 'Airtel', image: require('../../assets/images/airtelImage.png') },
    { name: '9Mobile', image: require('../../assets/images/etisalat.png') },
  ];

  const discountOptions = [
    { value: 5, label: '5%' },
    { value: 10, label: '10%' },
    { value: 20, label: '20%' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy Airtime</Text>

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

      <View style={styles.discountOptions}>
        {discountOptions.map((discount) => (
          <TouchableOpacity
            key={discount.value}
            style={[
              styles.discountOption,
              selectedDiscount?.value === discount.value ? styles.selectedDiscount : null,
            ]}
            onPress={() => handleDiscountSelection(discount)}
          >
            <Text style={styles.discountText}>{discount.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.buyButton, loading && styles.disabledButton]}
        onPress={handleBuy}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.buttonText}>Buy</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF7F3',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D90000',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D90000',
  },
  input: {
    height: 50,
    borderColor: '#D90000',
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
    color: '#D90000',
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
  buyButton: {
    backgroundColor: '#D90000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Airtime;
