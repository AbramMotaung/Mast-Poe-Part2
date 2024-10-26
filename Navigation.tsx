import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NavigationProps {
  screen: string;
  setScreen: (screen: 'home' | 'add') => void;
}

const Navigation: React.FC<NavigationProps> = ({ screen, setScreen }) => (
  <View style={styles.nav}>
    <TouchableOpacity onPress={() => setScreen('home')}>
      <Text style={[styles.navButton, screen === 'home' && styles.activeButton]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setScreen('add')}>
      <Text style={[styles.navButton, screen === 'add' && styles.activeButton]}>Add Menu Item</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  navButton: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#0b8e70',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#0b8e70',
    backgroundColor: '#e0f4f1',
    overflow: 'hidden',
  },
  activeButton: {
    backgroundColor: '#0b8e70',
    color: '#fff',
  },
});

export default Navigation;
