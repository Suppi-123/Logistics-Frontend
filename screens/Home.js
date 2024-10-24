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
              <Text>{stop.details}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text>cmti ©2024</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
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
    top: '50%',
    left: '50%',
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
  markerLabel: {
    color: '#4169E1',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  stopItem: {
    marginBottom: 10,
  },
  stopText: {
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default Home;