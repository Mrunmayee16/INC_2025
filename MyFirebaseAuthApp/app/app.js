// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// //import LoginScreen from './screens/LoginScreen';
// import LoginScreen from './Screens/LoginScreen';
// //import SignupScreen from './screens/SignupScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from './app/(tabs)/index';
//import ExploreScreen from './app/(tabs)/explore';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
