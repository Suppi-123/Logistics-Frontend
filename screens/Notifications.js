// screens/NotificationScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#666" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Filter notifications"
          placeholderTextColor="#666"
        />
      </View>

      <ScrollView style={styles.notificationsList}>
        <NotificationItem 
          title="Route Change"
          message="Route 12 delayed by 15 mins."
          time="10:45 AM"
          type="route"
          read={false} // Updated to indicate unread
        />
        <NotificationItem 
          title="New Task"
          message="Complete project report by EOD."
          time="9:30 AM"
          type="task"
          read={true} // Updated to indicate read
        />
        <NotificationItem 
          title="Route Alert"
          message="Accident on Route 5, expect delays."
          time="8:20 AM"
          type="route"
          read={false} // Updated to indicate unread
        />
        <NotificationItem 
          title="Task Update"
          message="Client feedback received, revise slides."
          time="7:50 AM"
          type="task"
          read={true} // Updated to indicate read
        />
        <NotificationItem 
          title="Route Change"
          message="Route 23 rerouted due to construction."
          time="6:15 AM"
          type="route"
          read={false} // Updated to indicate unread
        />
        <NotificationItem 
          title="Task Reminder"
          message="Team meeting at 11 AM."
          time="5:00 AM"
          type="task"
          read={true} // Updated to indicate read
        />
      </ScrollView>
    </View>
  );
}

const NotificationItem = ({ title, message, time, type, read }) => (
  <View style={[styles.notificationItem, { backgroundColor: read ? '#febb73' : '#FFF' }]}>
    <View style={styles.notificationContent}>
      <View style={styles.notificationText}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationMessage}>{message}</Text>
      </View>
      <Text style={styles.notificationTime}>{time}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA07A', // Updated color
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#00008B',
    borderRadius: 10, // Added for card effect
    elevation: 3, // Added for shadow effect on Android
    shadowColor: '#000', // Added for shadow effect on iOS
    shadowOffset: { width: 0, height: -3 }, // Added for shadow effect on iOS
    shadowOpacity: 0.2, // Added for shadow effect on iOS
    shadowRadius: 4, // Added for shadow effect on iOS
    marginVertical: 8, // Added for spacing between cards
    marginLeft: 9,
    marginRight: 9,
  },
  notificationContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '##fed8aa', // Updated color
  },
notificationMessage: {
    fontSize: 14,
    color: '##fed8aa', // Updated color to match title
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});