import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Dummy Data for Deliveries
const deliveries = [
  { id: 1, address: '456 Pine Rd, Jane Smith', status: 'Completed', confirmDelivery: true },
  { id: 2, address: '789 Oak Ave, Bob Johnson', status: 'Pending', confirmDelivery: false },
  { id: 3, address: '321 Maple Dr, Alice Brown', status: 'Completed', confirmDelivery: true },
  { id: 4, address: '654 Cedar Ln, Tom White', status: 'Pending', confirmDelivery: false }
];

const TripSheet = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trip Sheet</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Deliveries List</Text>
        
        {deliveries.map((delivery) => (
          <View
            key={delivery.id}
            style={[
              styles.deliveryCard,
              delivery.status === 'Completed' ? styles.completedCard : styles.pendingCard
            ]}
          >
            <Text style={styles.deliveryAddress}>{delivery.address}</Text>
            
            <Text style={delivery.status === 'Completed' ? styles.statusCompleted : styles.statusPending}>
              {delivery.status}
            </Text>
            
            <TouchableOpacity style={styles.confirmationContainer}>
              <Text style={styles.confirmText}>Confirm delivery:</Text>
              <View style={styles.checkbox}>
                <Text>{delivery.confirmDelivery ? '[x]' : '[ ]'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##fff7ed', // Light orange background
    padding: 20,
  },
  header: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFB74D', // Light orange border
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D84315', // Darker orange for header
  },
  content: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '##431507', // Darker subtitle color
  },
  deliveryCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  completedCard: {
    backgroundColor: '#FFCC80',  // Light orange for completed
  },
  pendingCard: {
    backgroundColor: '#FFAB40',  // Darker orange for pending
  },
  deliveryAddress: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3E2723', // Darker color for address
    marginBottom: 10,
  },
  statusCompleted: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#388E3C',  // Dark green for completed
    marginBottom: 10,
  },
  statusPending: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '###9b3511',  // Dark orange for pending
    marginBottom: 10,
  },
  confirmationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 14,
    marginRight: 10,
    color: '##7d2e11', // Darker orange for confirm text
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#FFB74D', // Light orange for the checkbox border
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // White background for the checkbox
  }
});

export default TripSheet;