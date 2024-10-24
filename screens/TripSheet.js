// screens/TripSheetScreen.js
import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function TripSheetScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trip Sheet</Text>
        <Text style={styles.headerIcon}>📋</Text>
      </View>

      <Text style={styles.sectionTitle}>Deliveries List</Text>
      
      <ScrollView style={styles.scrollView}>
        <DeliveryItem 
          address="456 Pine Rd, Jane Smith"
          status="Completed"
          confirmed={true}
        />
        <DeliveryItem 
          address="789 Oak Ave, Bob Johnson"
          status="Pending"
          confirmed={false}
        />
        <DeliveryItem 
          address="321 Maple Dr, Alice Brown"
          status="Completed"
          confirmed={true}
        />
        <DeliveryItem 
          address="654 Cedar Ln, Tom White"
          status="Pending"
          confirmed={false}
        />
      </ScrollView>

      {/* <View style={styles.fuelSection}>
        <Text style={styles.sectionTitle}>Fuel Usage Input</Text>
        <TextInput 
          style={styles.input}
          placeholder="Current Fuel (L)"
        />
        <TextInput 
          style={styles.input}
          placeholder="Fuel Used (L)"
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const DeliveryItem = ({ address, status, confirmed }) => (
  <View style={styles.deliveryItem}>
    <Text style={styles.addressText}>{address}</Text>
    <Text style={[styles.statusText, status === 'Completed' ? styles.completedStatus : styles.pendingStatus]}>
      {status}
    </Text>
    <Text style={styles.confirmText}>
      Confirm delivery: {confirmed ? '[x]' : '[ ]'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcon: {
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    padding: 16,
    paddingBottom: 8,
  },
  scrollView: {
    flex: 1,
  },
  deliveryItem: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    margin: 8,
    padding: 12,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    marginBottom: 4,
  },
  completedStatus: {
    color: 'green',
  },
  pendingStatus: {
    color: 'orange',
  },
  confirmText: {
    fontSize: 14,
    color: '#666',
  },
  fuelSection: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});