// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer'; // Import Drawer Navigator
// import WelcomeScreen from './WelcomeScreen';
// import HomeScreen from './HomeScreen';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'Fitness & Nutrition App' }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Drawer.Screen
//           name="Home"
//           component={HomeStack}
//           options={{ title: 'Home' }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }







import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import UserDetailsScreen from './UserDetails/UserDetailsScreen';
import NutritionScreen from './Nutrition/NutritionScreen';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="User Details" component={UserDetailsScreen} />
        <Drawer.Screen name="Nutrition" component={NutritionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
