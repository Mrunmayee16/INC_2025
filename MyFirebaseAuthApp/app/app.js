
// import TodoList from './TodoList';
// import DoctorList from './DoctorList'; // Ensure correct path
// import Tips from './Tips'; // Ensure correct path
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './Screens/LoginScreen';
// import SignupScreen from './Screens/SignupScreen';
// import TipsScreen from './TipsScreen';


// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="SignUp" component={SignupScreen} /> 
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Explore" component={ExploreScreen} />
//         <Stack.Screen name="TodoList" component={TodoList} />
//         <Stack.Screen name="DoctorList" component={DoctorList} /> 
//         <Stack.Screen name="Tips" component={TipsScreen} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import TodoList from './TodoList';
import DoctorList from './DoctorList'; // Ensure correct path
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import Tips from './Tips';
import Exercise from './Exercise';
import Music from './Music';
import JournalScreen from './Journal';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="DoctorList" component={DoctorList} />
        <Stack.Screen name="Tips" component={Tips} /> 
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="Music" component={Music} /> 
        <Stack.Screen name="Journal" component={JournalScreen} /> 
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
