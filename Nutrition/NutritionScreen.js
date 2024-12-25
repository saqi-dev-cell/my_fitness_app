import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/globalStyles.js';

function NutritionScreen() {
  const [foodQuery, setFoodQuery] = useState('');
  const [nutritionData, setNutritionData] = useState([]);

  const fetchNutritionData = async () => {
    if (!foodQuery.trim()) {
      Alert.alert('Error', 'Please enter a valid food item.');
      return;
    }

    const options = {
      method: 'POST',
      url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
      headers: {
        'x-app-id': 'fb1cf6eb',
        'x-app-key': 'e0733338a78170211558d383bcd4a4ad',
      },
      data: {
        query: foodQuery,
      },
    };

    try {
      const response = await axios.request(options);
      setNutritionData(response.data.foods);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch nutrition data. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Lookup</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for food (e.g., Apple)"
        value={foodQuery}
        onChangeText={setFoodQuery}
      />
      <Button title="Search" onPress={fetchNutritionData} />

      {nutritionData.length === 0 ? (
        <Text style={styles.noData}>No nutrition data available at the moment.</Text>
      ) : (
        <FlatList
          data={nutritionData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>Food: {item.food_name}</Text>
              <Text style={styles.bodyPart}>Calories: {item.nf_calories} kcal</Text>
              <Text style={styles.bodyPart}>Protein: {item.nf_protein} g</Text>
              <Text style={styles.bodyPart}>Carbs: {item.nf_total_carbohydrate} g</Text>
              <Text style={styles.bodyPart}>Fat: {item.nf_total_fat} g</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

export default NutritionScreen;
