import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const [name, setName] = useState('John Doe');  // Example default name
  const [email, setEmail] = useState('john.doe@example.com');  // Example default email
  const [phone, setPhone] = useState('123-456-7890');  // Example default phone
  const navigation = useNavigation();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user session)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Appbar for better header */}
      <Appbar.Header>
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.heading}>
          Profile Details
        </Text>

        {/* Display Name */}
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
        />

        {/* Display Email */}
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          mode="outlined"
        />

        {/* Display Phone Number */}
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
          mode="outlined"
        />
      </View>

      <Button
        mode="contained"
        onPress={handleLogout}
        style={styles.button}
        contentStyle={{ padding: 10 }}
      >
        Log Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#d4480c', // Updated color
  },
  input: {
    marginBottom: 15,
  },
  button: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#d4480c', // Updated button color
  },
});
