import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Success = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🎉 Payment Successful!</Text>
        <Text style={styles.message}>
          Thank you for your payment. Your transaction was processed successfully.
        </Text>
        <Text style={styles.reference}>Your Reference ID: <Text style={styles.refID}>CSC123456789</Text></Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Receipt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3F3', // Soft background for elegance
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#FF5252', // Vibrant red
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  reference: {
    fontSize: 14,
    color: '#FFCDD2',
    marginBottom: 20,
    textAlign: 'center',
  },
  refID: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#FF5252',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5252',
    textAlign: 'center',
  },
});
