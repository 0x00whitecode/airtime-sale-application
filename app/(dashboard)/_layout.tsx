import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import * as Haptics from 'expo-haptics'; // Import Haptics for feedback
import { useState } from 'react';
import { Animated } from 'react-native'; // Import Animated for animations

// Tab icon animation component
const TabIcon = ({ name, scaleValue, color }) => (
  <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
    <FontAwesome name={name} size={28} color={color} />
  </Animated.View>
);

export default function Layout() {
  // State to manage the animation scale for each tab
  const [scaleValue] = useState(new Animated.Value(1));

  // Function to trigger tab icon animation
  const animateTab = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#D32F2F', // Paper Red shade for active tab
        tabBarInactiveTintColor: '#757575', // Neutral gray for inactive items
        tabBarStyle: {
          backgroundColor: '#FFEBEE', // Light red tint for the background
          borderTopWidth: 0, // Remove top border for a modern look
          elevation: 0, // Remove shadow on Android
        },
        tabBarLabelStyle: {
          fontSize: 14, // Slightly larger font size for better readability
          fontWeight: '600', // Semi-bold text for better readability
        },
        headerShown: false,
      }}
      onTabPress={() => {
        Haptics.selectionAsync(); // Trigger haptic feedback on tab press
        animateTab(); // Trigger animation
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabIcon name="home" scaleValue={scaleValue} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <TabIcon name="history" scaleValue={scaleValue} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabIcon name="user" scaleValue={scaleValue} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabIcon name="cog" scaleValue={scaleValue} color={color} />,
        }}
      />
    </Tabs>
  );
}
