import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import CardComponent from '../components/cardBanner';
import ProfileBanner from '../components/profileBanner';
import TransactionBanner from '../components/transectionBanner';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ProfileBanner />
        
        {/* Scrollable content */}
        <ScrollView contentContainerStyle={styles.content}>
          <CardComponent />
          <TransactionBanner />
          <Menu />
          <Text>Other content goes here...</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d32f2f', // Paper red theme background color
    padding: 5,
    height: 70,
    width: '100%',
    position: 'absolute', // Position it at the top
    top: 0, // Align to the top of the container
    left: 0,
    right: 0,
    zIndex: 1, // Ensure it stays above other content
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // 100% radius for a circular image
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Change text color to white for better contrast
  },
  searchIcon: {
    padding: 5,
  },
  content: {
    marginTop: 20, // Adjust this to ensure the content is below the profile banner
    paddingLeft: 5,
    paddingRight: 5,
    margin: 10,
  },
});
