import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/globalStyles.js'; // Import your shared styles or create a new one

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Image 
        source={require('./assets/Download Silhouette, Running, Run_ Royalty-Free Vector Graphic.jpg')} 
        style={styles.welcomeImage} 
      /> */}
      <Text style={styles.title}>Welcome to My First App</Text>
      <Text style={styles.subtitle}>Your journey to fitness starts here!</Text>
      <Button 
        title="Get Started" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

export default WelcomeScreen;
