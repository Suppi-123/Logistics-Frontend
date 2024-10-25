// VehicleScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button, InputNumber, DatePicker, TimePicker, Modal } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const VehicleScreen = () => {
  const [truckCount, setTruckCount] = useState(1);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleIncrement = () => setTruckCount(truckCount + 1);
  const handleDecrement = () => truckCount > 1 && setTruckCount(truckCount - 1);

  const handleSelectLocation = (type) => {
    // This function would open a location selection modal or navigate to a location selection screen
    console.log(`Select ${type} location`);
    // For demonstration, we'll just set a dummy location
    if (type === 'from') {
      setFromLocation('Chicago, USA');
    } else {
      setToLocation('Washington, USA');
    }
  };

  return (
    <View style={styles.container}>
      <Card
        style={styles.card}
        bodyStyle={{ padding: 0 }}
        cover={
          <Image 
            source={{ uri: 'https://example.com/truck-image.png' }}
            style={styles.truckImage}
          />
        }
      >
        <View style={styles.truckInfo}>
          <Text style={styles.truckName}>Truck Name: Grave Digger</Text>
          <Text style={styles.truckDetails}>Per Day: $50 | Weight: 8 Ton</Text>
          <Text style={styles.truckDetails}>Max Load: 900 kgs</Text>
        </View>
      </Card>
      
      <View style={styles.detailsSection}>
        <Card>
          <View style={styles.locationRow}>
            <EnvironmentOutlined style={styles.icon} />
            <Text>From:</Text>
            <Button 
              style={styles.locationButton} 
              onClick={() => handleSelectLocation('from')}
            >
              {fromLocation || 'Select Location'}
            </Button>
          </View>
          <View style={styles.locationRow}>
            <EnvironmentOutlined style={styles.icon} />
            <Text>To:</Text>
            <Button 
              style={styles.locationButton} 
              onClick={() => handleSelectLocation('to')}
            >
              {toLocation || 'Select Location'}
            </Button>
          </View>
        </Card>

        <Card style={styles.controlCard}>
          <Text style={styles.sectionTitle}>Number of Trucks Required</Text>
          <View style={styles.truckCountContainer}>
            <Button icon={<MinusOutlined />} onClick={handleDecrement} />
            <InputNumber min={1} value={truckCount} readOnly style={styles.inputNumber} />
            <Button icon={<PlusOutlined />} onClick={handleIncrement} />
          </View>
          
          <View style={styles.dateTimePicker}>
            <DatePicker placeholder="Select Date" />
            <TimePicker placeholder="Select Time" use12Hours format="h:mm a" />
          </View>
          
          <Button type="primary" style={styles.payButton} icon={<CalendarOutlined />}>
            Pay Now - $250
          </Button>
        </Card>
      </View>
    </View>
  );
};

export default VehicleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  truckImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
  },
  truckInfo: {
    padding: 16,
    backgroundColor: '#d4480c', // Updated background color for truck info
    color: '#fff',
  },
  truckName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  truckDetails: {
    fontSize: 14,
    color: '#fff',
  },
  detailsSection: {
    marginTop: 16,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
    color: '#d4480c', // Updated icon color
  },
  locationText: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
  locationButton: {
    marginLeft: 8,
    flex: 1,
  },
  controlCard: {
    marginTop: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  truckCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputNumber: {
    width: 60,
    textAlign: 'center',
  },
  dateTimePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  payButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});