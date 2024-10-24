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
          time="Received at 10:45 AM"
          type="route"
        />
        <NotificationItem 
          title="New Task"
          message="Complete project report by EOD."
          time="Received at 9:30 AM"
          type="task"
        />
        <NotificationItem 
          title="Route Alert"
          message="Accident on Route 5, expect delays."
          time="Received at 8:20 AM"
          type="route"
        />
        <NotificationItem 
          title="Task Update"
          message="Client feedback received, revise slides."
          time="Received at 7:50 AM"
          type="task"
        />
        <NotificationItem 
          title="Route Change"
          message="Route 23 rerouted due to construction."
          time="Received at 6:15 AM"
          type="route"
        />
        <NotificationItem 
          title="Task Reminder"
          message="Team meeting at 11 AM."
          time="Received at 5:00 AM"
          type="task"
        />
      </ScrollView>
    </View>
  );
}

const NotificationItem = ({ title, message, time, type }) => (
  <View style={styles.notificationItem}>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationMessage}>{message}</Text>
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
    borderBottomColor: '#E0E0E0',
  },
  notificationContent: {
    gap: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#444',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});