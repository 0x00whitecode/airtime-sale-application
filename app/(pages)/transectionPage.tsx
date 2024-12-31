import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const TransactionHistoryPage = () => {
  // Sample transaction data
  const [transactions] = useState([
    { id: '1', date: '2024-12-25', service: 'Data', amount: '₦500', status: 'Success' },
    { id: '2', date: '2024-12-24', service: 'Airtime', amount: '₦200', status: 'Success' },
    { id: '3', date: '2024-12-23', service: 'Subscription', amount: '₦1000', status: 'Failed' },
    { id: '4', date: '2024-12-22', service: 'Data', amount: '₦1500', status: 'Success' },
  ]);

  // Render each transaction item
  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>Date: {item.date}</Text>
      <Text style={styles.transactionText}>Service: {item.service}</Text>
      <Text style={styles.transactionText}>Amount: {item.amount}</Text>
      <Text style={[styles.transactionText, item.status === 'Success' ? styles.success : styles.failed]}>
        Status: {item.status}
      </Text>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  success: {
    color: 'green',
  },
  failed: {
    color: 'red',
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#0288D1',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TransactionHistoryPage;
