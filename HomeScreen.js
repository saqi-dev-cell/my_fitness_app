import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, Alert, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import axios from 'axios';
import styles from './styles/globalStyles.js'; // Import your shared styles or create a new one

function HomeScreen() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // Add search term state
  const [filteredExercises, setFilteredExercises] = useState([]); // Add filtered exercises state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [offset, setOffset] = useState(0); // For pagination
  const [hasMore, setHasMore] = useState(true); // To track if more data is available

  // Fetch exercises on component mount and when offset changes
  useEffect(() => {
    fetchExercises();
  }, [offset]);

  // Filter exercises based on the search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredExercises(exercises.filter(exercise => exercise.name.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setFilteredExercises(exercises); // If no search term, show all exercises
    }
  }, [searchTerm, exercises]);

  const fetchExercises = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      params: {
        limit: 20, // Number of exercises to fetch per request
        offset: offset, // Start fetching from the current offset
      },
      headers: {
        'X-RapidAPI-Key': '49c99195d4msh7b53ecdc7fe119ap17d32djsn74c927d0cb3b', // Replace with your API key
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const fetchedExercises = response.data;
      setExercises((prevExercises) => [...prevExercises, ...fetchedExercises]); // Append new exercises to the existing ones
      setFilteredExercises((prevExercises) => [...prevExercises, ...fetchedExercises]);
      if (fetchedExercises.length < 20) {
        setHasMore(false); // If less than 20 exercises are fetched, assume there's no more data
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch exercises.');
    } finally {
      setLoading(false);
    }
  };

  const handlePressExercise = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalVisible(true);
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleFavoriteToggle = (exercise) => {
    const isFavorite = favorites.some(fav => fav.id === exercise.id);
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== exercise.id));
    } else {
      setFavorites([...favorites, exercise]);
    }
  };

  const renderExerciseModal = () => {
    if (!selectedExercise) return null;

    return (
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedExercise.name}</Text>
            <Text style={styles.modalText}>Target: {selectedExercise.bodyPart}</Text>
            <Text style={styles.modalText}>Equipment: {selectedExercise.equipment || 'No equipment'}</Text>
            <Text style={styles.modalText}>Description: {selectedExercise.description || 'No description available'}</Text>
            <Text style={styles.modalText}>Difficulty: {selectedExercise.difficulty || 'Not specified'}</Text>
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    );
  };

  const handleLoadMore = () => {
    if (hasMore) {
      setOffset(offset + 20); // Increase offset to fetch the next set of exercises
    }
  };

  if (loading && offset === 0) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.subtitle}>Loading Exercises...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercises</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search Exercises"
        placeholderTextColor="#c0c0c0"
        value={searchTerm}
        onChangeText={handleSearch}
      />

      Exercise List
      <FlatList
        data={filteredExercises} // Use filtered exercises instead of all exercises
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => handlePressExercise(item)}>
              <Image source={{ uri: item.gifUrl }} style={styles.image} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>Target: {item.bodyPart}</Text>
              <Text style={styles.cardSubtitle}>Difficulty: {item.difficulty || 'Not specified'}</Text>
            </TouchableOpacity>
            {/* Favorite Button */}
            <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
              <Text style={styles.favoriteButton}>
                {favorites.some(fav => fav.id === item.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        onEndReached={handleLoadMore} // Trigger when the user scrolls to the bottom
        onEndReachedThreshold={0.5} // How far from the bottom the user must scroll to trigger the event
      />

      {/* Exercise Details Modal */}
      {renderExerciseModal()}
    </View>
  );
}

export default HomeScreen;
