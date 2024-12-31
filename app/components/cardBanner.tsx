import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const CardComponent = () => {
  const router = useRouter();
  // Function to handle navigation
  const navigateToHistory = () => {
    router.push('/transectionPage'); // Navigate to the "trasection" page
  };
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Available Balance Section */}
        <View style={styles.balanceSection}>
          <View style={styles.row2}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#fff" />
            <Text style={styles.label}>Available Balance</Text>
            <Ionicons name="eye-outline" size={20} color="#fff" style={styles.icon} />
          </View>
          <Text style={styles.balance}>₦516.36</Text>
        </View>

        {/* Transaction History */}
        <TouchableOpacity style={styles.historySection} onPress={navigateToHistory}>
          <Text style={styles.historyText}>Transaction History</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Add Money Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Topup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E63946', // Pepper Red Theme
    borderRadius: 5,
    padding: 10,
    paddingTop:14,
   
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  balanceSection: {
    flex: 1,
    marginRight: 16,
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 8,
  },
  icon: {
    marginLeft: 8,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  historySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    fontSize: 11,
    color: '#fff',
    marginRight: 4,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#fda4af',
    borderRadius: 10,
    paddingVertical: 10,
    width: 130,
    alignItems: 'center',
    alignSelf: 'flex-end', // Moves the button to the right
},

  buttonText: {
    fontSize: 14,
    color: '#991b1b',
  },
});

export default CardComponent;
