// screens/Home.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  // Dummy route data
  const routeData = [
    { id: 'A', name: 'Origin', details: 'Start point' },
    { id: 'B', name: 'Checkpoint', details: 'Midway stop' },
    { id: 'C', name: 'Destination', details: 'End point' }
  ];

  const handleStopPress = (stop) => {
    navigation.navigate('Details', { stop });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vehicle Management System</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Live Vehicle Data</Text>
          <View style={styles.mapContainer}>
            <Image 
              source={require('../assets/map-placeholder.png')} // Update this path if necessary
              style={styles.mapImage}
              resizeMode="cover"
            />
            <View style={styles.vehicleMarker}>
              <View style={styles.markerDot} />
              <Text style={styles.markerLabel}>Current Location</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current Vehicle State</Text>
          <Text>Status: In Transit</Text>
          <Text>Current Location: Checkpoint B</Text>
          <Text>Next Stop: Destination C</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Route Details</Text>
          {routeData.map((stop) => (
            <TouchableOpacity 
              key={stop.id} 
              style={styles.stopItem}
              onPress={() => handleStopPress(stop)}
            >
              <Text style={styles.stopText}>{stop.name} ({stop.id})</Text>
              <Text style={styles.stopDetails}>{stop.details}</Text> {/* Updated to use new style */}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>cmti ©2024</Text> {/* Updated text color */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fd',
  },
  header: {
    padding: 20,
    backgroundColor: '#fa7515',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#d4480c', // Updated color
  },
  mapContainer: {
    height: 220,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#e1e4e8',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  vehicleMarker: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    alignItems: 'center',
  },
  markerDot: {
    width: 20,
    height: 20,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  markerLabel: {
    color: '#FF0000',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  stopItem: {
    padding: 15,
    backgroundColor: '#f0f4ff',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#3D5AFE',
    borderWidth: 1,
  },
  stopText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d4480c', // Updated color
  },
  stopDetails: {
    color: '#FFA500', // Updated to orange color
  },
  footer: {
    padding: 8, // Updated padding for larger size
    alignItems: 'center',
    backgroundColor: '#fa7515',
    marginTop: 10,
  },
  footerText: {
    color: '#fff',
  }
});

export default Home;