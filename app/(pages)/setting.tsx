import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="account-circle-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Login Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="credit-card-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Payment Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="cloud-save-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Saving Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="home-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Homepage Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="help-circle-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Security Questions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="message-text-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>SMS Alert Subscription</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="palette-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Themes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="clipboard-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Access to Clipboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="shield-lock-outline" size={24} color="#fff" />
        <Text style={styles.optionText}>Security Center</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="power-off" size={24} color="#fff" />
        <Text style={styles.optionText}>Close Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B71C1C', // Paper red color
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#C62828', // Slightly darker shade
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    marginLeft: 15,
  },
});

export default SettingScreen;