import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MenuItemComponentProps {
  item: { name: string; description: string; course: string; price: number };
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuItemText}>{item.name}</Text>
    <Text>{item.description}</Text>
    <Text>{item.course}</Text>
    <Text>${item.price.toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    marginBottom: 12,
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
  },
});

export default MenuItemComponent;
