import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.circle}></View>
        <Text style={styles.profileName}>Hi, JOSEPH</Text>
        <View style={styles.badgeContainer}>

        </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="help-circle-outline" size={24} color="#e11d48" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="square-outline" size={24} color="#e11d48" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="notifications-outline" size={24} color="#e11d48">
            <Text style={styles.notificationBadge}>29</Text>
          </Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
circle: {
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
    backgroundColor: '#FF5E3A', // Pepper red color
    borderRadius: 200, // Half of width/height to make it circular
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Centers any content inside the circle (like a profile picture)
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#f00',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeImage: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  badgeNumber: {
    color: '#fff',
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginRight: 16,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f00',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    color: '#fff',
    fontSize: 12,
  },
});

export default ProfileBanner;