import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [nickname, setNickname] = useState('');
  const [isNicknameEditing, setIsNicknameEditing] = useState(false);

  const handleNicknameEditPress = () => {
    setIsNicknameEditing(true);
  };

  const handleNicknameSubmit = () => {
    setIsNicknameEditing(false);
    // Handle nickname submission (e.g., save to backend)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      <View style={styles.emailSection}>
        <MaterialCommunityIcons name="email-outline" size={24} color="#4B4B4B" />
        <View style={styles.emailTextContainer}>
          <Text style={styles.emailText}>Stay Informed with OPay</Text>
          <Text style={styles.emailSubtext}>Add your email to receive the latest updates</Text>
        </View>
      </View>

      <View style={styles.profilePictureContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>JOSEPH</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>OPay Account Number</Text>
          <Text style={styles.infoValue}>9122618760</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Account Tier</Text>
          <View style={styles.tierContainer}>
            <Text style={styles.tierText}>Tier 2</Text>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Full Name</Text>
          <Text style={styles.infoValue}>JOSEPH JACOB CHRISTOPHER</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Mobile Number</Text>
          <Text style={styles.infoValue}>+2349122618760</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nickname</Text>
          {isNicknameEditing ? (
            <View style={styles.nicknameInputContainer}>
              <TextInput
                style={styles.nicknameInput}
                value={nickname}
                onChangeText={setNickname}
                placeholder="Enter your nickname"
                placeholderTextColor="#888"
              />
              <TouchableOpacity style={styles.submitButton} onPress={handleNicknameSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={handleNicknameEditPress}>
              <Text style={styles.editButtonText}>Edit Nickname</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gender</Text>
          <Text style={styles.infoValue}>Male</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Date of Birth</Text>
          <Text style={styles.infoValue}>**-**-25</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Neutral background for a professional look
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#2C3E50', // Darker color for the header
    marginBottom: 20,
    textAlign: 'center',
  },
  emailSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  emailTextContainer: {
    marginLeft: 10,
  },
  emailText: {
    color: '#4B4B4B',
    fontSize: 16,
    fontWeight: '600',
  },
  emailSubtext: {
    color: '#7F8C8D',
    fontSize: 14,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#C62828', // Accent color for the border
  },
  profileName: {
    color: '#2C3E50',
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  infoLabel: {
    color: '#4B4B4B',
    fontSize: 16,
    fontWeight: '600',
  },
  infoValue: {
    color: '#2C3E50',
    fontSize: 16,
  },
  tierContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tierText: {
    color: '#C62828',
    marginRight: 5,
    fontWeight: '700',
  },
  upgradeButton: {
    backgroundColor: '#C62828',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  upgradeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  editButton: {
    backgroundColor: '#2C3E50',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  nicknameInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nicknameInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    marginRight: 10,
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#C62828',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ProfileScreen;
