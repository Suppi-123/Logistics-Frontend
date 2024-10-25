import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

const Details = ({ route }) => {
  const { stop } = route.params;
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{stop.name} Details</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Live Location</Text>
        <View style={styles.mapContainer}>
          <Image 
            source={require('../assets/map-placeholder.png')} 
            style={styles.mapImage}
            resizeMode="cover"
          />
          <View style={styles.vehicleMarker}>
            <View style={styles.markerDot} />
            <Text style={styles.markerLabel}>Vehicle Location</Text>
          </View>
          <View style={styles.stopMarker}>
            <View style={styles.stopDot} />
            <Text style={styles.markerLabel}>{stop.name}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Customer Information</Text>
        <View style={styles.customerPhotoPlaceholder}>
          <Text>Customer Photo Placeholder</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>OTP Verification</Text>
        <TextInput
          style={styles.input}
          onChangeText={setOtp}
          value={otp}
          placeholder="Enter OTP"
          keyboardType="numeric"
        />
        <Button 
          title="Submit OTP" 
          onPress={() => console.log('OTP submitted:', otp)} 
          color="#d4480c" // Updated color to orange
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#d4480c', // Updated color
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d4480c', // Updated color
  },
  mapContainer: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  vehicleMarker: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    alignItems: 'center',
  },
  stopMarker: {
    position: 'absolute',
    top: '60%',
    left: '60%',
    alignItems: 'center',
  },
  markerDot: {
    width: 12,
    height: 12,
    backgroundColor: '#4169E1',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  stopDot: {
    width: 12,
    height: 12,
    backgroundColor: '#FF4444',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  markerLabel: {
    color: '#d4480c', // Updated color for marker label
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },


  customerPhotoPlaceholder: {
    height: 150,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Details;