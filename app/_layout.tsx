import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(dashboard)" 
        options={{ 
          title: 'Home', 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="signIn" 
        options={{ 
          title: 'Sign In', 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="signUp" 
        options={{ 
          title: 'Sign Up', 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="forgetPassword" 
        options={{ 
          title: 'Forget Password', 
          headerShown: false 
        }} 
      />
       <Stack.Screen 
        name="index" 
        options={{ 
          title: 'onBoarding', 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="verify" 
        options={{ 
          title: 'verify', 
          headerShown: false 
        }} 
      />

<Stack.Screen 
        name="(pages)" 
        options={{ 
          title: 'Home', 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}
