import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuItemComponent from './MenuItemComponent';

interface HomeScreenProps {
  menu: Array<{ name: string; description: string; course: string; price: number }>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ menu }) => (
  <View style={styles.screen}>
    <Text style={styles.header}>Menu</Text>
    {menu.length === 0 ? (
      <Text style={styles.noMenuText}>No menu items available. Add a dish to get started!</Text>
    ) : (
      menu.map((item, index) => <MenuItemComponent key={index} item={item} />)
    )}
    <Text style={styles.totalItems}>Total Items: {menu.length}</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  noMenuText: {
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginBottom: 16,
    textAlign: 'center',
  },
  totalItems: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#0b8e70',
  },
});

export default HomeScreen;
