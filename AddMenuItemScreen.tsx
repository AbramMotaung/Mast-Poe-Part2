import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface AddMenuItemScreenProps {
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
}

const AddMenuItemScreen: React.FC<AddMenuItemScreenProps> = ({
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
});

export default AddMenuItemScreen;
