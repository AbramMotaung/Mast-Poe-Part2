import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import HomeScreen from './HomeScreen';
import AddMenuItemScreen from './AddMenuItemScreen';

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
});

export default App;
