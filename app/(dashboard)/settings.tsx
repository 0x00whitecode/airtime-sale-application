import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Section 1: Account & Login Settings */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="account-circle-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Login Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="help-circle-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Security Questions</Text>
        </TouchableOpacity>
      </View>

      {/* Section 2: Payment & Saving Settings */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="credit-card-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Payment Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="cloud-save-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Saving Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Section 3: Customization */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="palette-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Themes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="clipboard-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Access to Clipboard</Text>
        </TouchableOpacity>
      </View>

      {/* Section 4: Notifications */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="message-text-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>SMS Alert Subscription</Text>
        </TouchableOpacity>
      </View>

      {/* Section 5: Security */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="shield-lock-outline" size={24} color="#fff" />
          <Text style={styles.optionText}>Security Center</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="power-off" size={24} color="#fff" />
          <Text style={styles.optionText}>Close Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f2', // Soft background color for contrast
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C62828', // Stronger contrast for header
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#C62828', // Accent color for options
    marginBottom: 10,
    elevation: 2, // Adds subtle shadow for better depth
    borderWidth: 1,
    borderColor: '#b22e26',
  },
  optionText: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SettingScreen;
