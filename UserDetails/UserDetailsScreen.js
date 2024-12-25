import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/globalStyles';

function UserDetailsScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSave = () => {
    if (!name || !age || !weight || !height) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (isNaN(weight) || isNaN(height)) {
      Alert.alert('Error', 'Please enter valid numbers for weight and height.');
      return;
    }

    Alert.alert('Success', `Details Saved:\nName: ${name}\nAge: ${age}\nWeight: ${weight} kg\nHeight: ${height} cm`);
    
    // You can add functionality to save to local storage or database here
  };

  const handleReset = () => {
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter User Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Picker for selecting age */}
      <Text style={styles.inputLabel}>Select Age</Text>
      <Picker
        selectedValue={age}
        style={styles.picker}
        onValueChange={(itemValue) => setAge(itemValue)}
      >
        <Picker.Item label="Select Age" value="" />
        {Array.from({ length: 100 }, (_, i) => (
          <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Save Details" onPress={handleSave} />
      <Button title="Reset" onPress={handleReset} color="gray" />
    </View>
  );
}

export default UserDetailsScreen;
