import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Menu = () => {
  const router = useRouter(); // Initialize the router

  // Function to navigate to the given screen
  const handleNavigate = (screen) => {
    router.push(screen); // Navigate to the screen
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}
      onPress={() => handleNavigate('/airtime')}
      >
        <Ionicons name="phone-portrait-outline" size={24} color="#ef4444" />
        <Text style={styles.menuItemText}>Airtime</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}
        onPress={() => handleNavigate('/buyData')}
      >
        <Ionicons name="cellular-outline" size={24} color="#ef4444" />
        <Text style={styles.menuItemText}>Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="gift-outline" size={24} color="#ef4444" />
        <Text style={styles.menuItemText}>Gift Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="tv-outline" size={24} color="#ef4444" />
        <Text style={styles.menuItemText}>TV</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="wallet-outline" size={24} color="#ef4444" />
        <Text style={styles.menuItemText}>Referral Bonus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="cash-outline" size={24} color="#ef4444" />
        <Text style={styles.menuItemText}>Loan</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={[styles.menuItem]}>
        <Ionicons name="ellipsis-horizontal-outline" size={24} color="#ef4444" />
        <Text style={styles.menuItemText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor:"#f8fafc"
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#f4f3f2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 8,
  },
  moreButton: {
    backgroundColor: '#F06292', // Pepper Red
  },
  menuItemText: {
    fontSize: 12,
    marginTop: 4,
    color:'#ef4444'
  },
});

export default Menu;