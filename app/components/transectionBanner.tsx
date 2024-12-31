import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const TransactionBanner = () => {
  const router = useRouter(); // Initialize the router

  // Function to navigate to the given screen
  const handleNavigate = (screen) => {
    router.push(screen); // Navigate to the screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigate('(transaction)/buydate')} // Navigate to buydate
      >
        <Ionicons name="person-circle-outline" size={24} color="#e11d48" />
        <Text style={styles.buttonText}>To Philo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigate('/buyData')} // Navigate to buydate
      >
        <Ionicons name="arrow-up-circle-outline" size={24} color="#e11d48" />
        <Text style={styles.buttonText}>Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigate('/airtime')} // Navigate to airtime
      >
        <FontAwesome5 name="sd-card" size={24} color="#e11d48" />
        <Text style={styles.buttonText}>Airtime</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#fee2e2',
    marginTop: 25,
    marginBottom: 5,
    shadowOpacity: 0.1,
    // Adds shadow for Android
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fee2e2',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    opacity: 0.9,
  },
  buttonText: {
    marginTop: 8,
    color: '#e11d48',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default TransactionBanner;
