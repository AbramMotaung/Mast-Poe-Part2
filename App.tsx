import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

// Main App Component
const App: React.FC = () => {
  const [menu, setMenu] = useState<Array<{ name: string, description: string, course: string, price: number }>>([]);
  const [screen, setScreen] = useState<'home' | 'add'>('home');
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addMenuItem = (item: { name: string, description: string, course: string, price: number }) => {
    setMenu([...menu, item]);
    setScreen('home');
  };

  const handleSubmit = () => {
    if (!dishName || !description || !course || !price) {
      setError('Please fill in all fields');
      return;
    }
    if (isNaN(Number(price))) {
      setError('Price must be a valid number');
      return;
    }
    addMenuItem({ name: dishName, description, course, price: Number(price) });
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Chef's Menu</Text>
      <Navigation screen={screen} setScreen={setScreen} />
      {screen === 'home' ? (
        <HomeScreen menu={menu} />
      ) : (
        <AddMenuItemScreen
          dishName={dishName}
          description={description}
          course={course}
          price={price}
          setDishName={setDishName}
          setDescription={setDescription}
          setCourse={setCourse}
          setPrice={setPrice}
          handleSubmit={handleSubmit}
          error={error}
        />
      )}
    </View>
  );
};

// Navigation Component
const Navigation: React.FC<{ screen: string, setScreen: (screen: 'home' | 'add') => void }> = ({ screen, setScreen }) => (
  <View style={styles.nav}>
    <TouchableOpacity onPress={() => setScreen('home')}>
      <Text style={[styles.navButton, screen === 'home' && styles.activeButton]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setScreen('add')}>
      <Text style={[styles.navButton, screen === 'add' && styles.activeButton]}>Add Menu Item</Text>
    </TouchableOpacity>
  </View>
);

// HomeScreen Component
const HomeScreen: React.FC<{ menu: Array<{ name: string, description: string, course: string, price: number }> }> = ({ menu }) => (
  <View style={styles.screen}>
    <Text style={styles.header}>Menu</Text>
    {menu.length === 0 ? (
      <Text style={styles.noMenuText}>No menu items available. Add a dish to get started!</Text>
    ) : (
      menu.map((item, index) => (
        <MenuItemComponent key={index} item={item} />
      ))
    )}
    <Text style={styles.totalItems}>Total Items: {menu.length}</Text>
  </View>
);

// AddMenuItemScreen Component
const AddMenuItemScreen: React.FC<{
  dishName: string;
  description: string;
  course: string;
  price: string;
  setDishName: (text: string) => void;
  setDescription: (text: string) => void;
  setCourse: (text: string) => void;
  setPrice: (text: string) => void;
  handleSubmit: () => void;
  error: string;
}> = ({
  dishName,
  description,
  course,
  price,
  setDishName,
  setDescription,
  setCourse,
  setPrice,
  handleSubmit,
  error,
}) => (
  <View style={styles.screen}>
    <Text style={styles.header}>Add Menu Item</Text>
    <TextInput style={styles.input} placeholder="Dish Name" value={dishName} onChangeText={setDishName} />
    <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
    <TextInput style={styles.input} placeholder="Course (Starter, Main, Dessert)" value={course} onChangeText={setCourse} />
    <TextInput style={styles.input} placeholder="Price" keyboardType="numeric" value={price} onChangeText={setPrice} />
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
    <Button title="Add Menu Item" onPress={handleSubmit} color="#820b33" />
  </View>
);

// MenuItemComponent Component
const MenuItemComponent: React.FC<{ item: { name: string, description: string, course: string, price: number } }> = ({ item }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuItemText}>{item.name}</Text>
    <Text>{item.description}</Text>
    <Text>{item.course}</Text>
    <Text>${item.price.toFixed(2)}</Text>
  </View>
);

// Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8',
    minHeight: '100%',
    padding: 20,
    paddingTop: 40,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0b8e70',
    textAlign: 'center',
    marginBottom: 24,
  },
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
  input: {
    height: 44,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: '#e74c3c',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
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


export default App;
