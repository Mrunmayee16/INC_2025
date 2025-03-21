// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
// import { getAuth, signOut, User } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Image } from 'react-native';
// import { Alert } from 'react-native';

// export default function HomeScreen() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();
//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         navigation.replace('Login');
//       }
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   // const handleLogout = async () => {
//   //   try {
//   //     await signOut(auth);
    
//   //     navigation.popToTop(); // Goes back to the initial screen

//   //   } catch (error) {
//   //     console.error('Logout Error:', error);
//   //   }
//   // };
//   const handleLogout = async () => {
//     Alert.alert(
//       "Confirm Logout",
//       "Are you sure you want to log out?",
//       [
//         { text: "Cancel", style: "cancel" },
//         { 
//           text: "Logout", 
//           onPress: async () => {
//             try {
//               await signOut(auth);
//               navigation.reset({
//                 index: 0,
//                 routes: [{ name: 'Login' }],
//               });
//             } catch (error) {
//               console.error('Logout Error:', error);
//             }
//           } 
//         }
//       ]
//     );
//   };

  

//   const buttons = [
//     { title: 'To-Do List', icon: 'clipboard-list', color: '#FFB74D', screen: 'TodoList' },
//     { title: 'Doctor List', icon: 'doctor', color: '#4DB6AC', screen: 'DoctorList' },
//     { title: 'Tips', icon: 'lightbulb-on', color: '#7986CB', screen: 'Tips' },
//     { title: 'Music', icon: 'music-note', color: '#BA68C8', screen: 'Music' },  
//     { title: 'Exercise', icon: 'run', color: '#64B5F6', screen: 'Exercise' },
//     { title: 'AI Chat', icon: 'robot-outline', color: '#FFD54F', screen: 'AiChat' },
//     { title: 'Journal', icon: 'book-open-variant', color: '#81C784', screen: 'Journal' },
//     { title: 'Quotes', icon: 'star-outline', color: '#F2D16D', screen: 'Quotes' },
//   ];

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
      
//       <View style={styles.container}>
//       <Image source={require('@/assets/images/logo-login.png')}style={styles.reactLogo}/>
//         <Text style={styles.title}>Breathe. Focus. Achieve. 🌿</Text>
//         <Text style={styles.subtitle}>Welcome to InnerPeace, {user?.email}!</Text>
//         <View style={styles.buttonContainer}>
//           {buttons.map((btn, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[styles.button, { backgroundColor: btn.color }]}
//               onPress={() => navigation.navigate(btn.screen)}
//             >
//               <MaterialCommunityIcons name={btn.icon} size={40} color="#FFF" />
//               <Text style={styles.buttonText}>{btn.title}</Text>
//             </TouchableOpacity>
//           ))}
//           <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
//             <MaterialCommunityIcons name="logout" size={40} color="#FFF" />
//             <Text style={styles.buttonText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   button: {
//     width: 120,
//     height: 120,
//     borderRadius: 20,
//     marginVertical: 10,
//     marginHorizontal: '2.5%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 4,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 8,
//   },
//   logoutButton: {
//     backgroundColor: '#E57373',
//   },
//   reactLogo: {
//    height: 200,
//    width: 160,
//     marginBottom: 20,
//   },
// });
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { getAuth, signOut, User } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigation.replace('Login');
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    
      navigation.popToTop(); // Goes back to the initial screen

    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  const buttons = [
    { title: 'To-Do List', icon: 'clipboard-list', color: '#FFB74D', screen: 'TodoList' },
    { title: 'Doctor List', icon: 'doctor', color: '#4DB6AC', screen: 'DoctorList' },
    { title: 'Tips', icon: 'lightbulb-on', color: '#7986CB', screen: 'Tips' },
    { title: 'Music', icon: 'music-note', color: '#BA68C8', screen: 'Music' },  
    { title: 'Exercise', icon: 'run', color: '#64B5F6', screen: 'Exercise' },
    { title: 'AI Chat', icon: 'robot-outline', color: '#FFD54F', screen: 'AiChat' },
    { title: 'Journal', icon: 'book-open-variant', color: '#81C784', screen: 'Journal' },
    { title: 'Quotes', icon: 'star-outline', color: '#F2D16D', screen: 'Quotes' },
  ];

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <View style={styles.container}>
      <Image source={require('@/assets/images/logo-login.png')}style={styles.reactLogo}/>
        <Text style={styles.title}>Breathe. Focus. Achieve. 🌿</Text>
        <Text style={styles.subtitle}>Welcome to InnerPeace, {user?.email}!</Text>
        <View style={styles.buttonContainer}>
          {buttons.map((btn, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.button, { backgroundColor: btn.color }]}
              onPress={() => navigation.navigate(btn.screen)}
            >
              <MaterialCommunityIcons name={btn.icon} size={40} color="#FFF" />
              <Text style={styles.buttonText}>{btn.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={40} color="#FFF" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  logoutButton: {
    backgroundColor: '#E57373',
  },
  reactLogo: {
   height: 200,
   width: 160,
    marginBottom: 20,
  },
});

//alternate code
//logout redirecting to login screen but there's still an error. we can work this code if no solution found by the time of presentation
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
// import { getAuth, signOut, User } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Image } from 'react-native';

// export default function HomeScreen() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();
//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         navigation.replace('Login');
//       }
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
    
//       navigation.popToTop(); // Goes back to the initial screen

//     } catch (error) {
//       console.error('Logout Error:', error);
//     }
//   };

//   const buttons = [
//     { title: 'To-Do List', icon: 'clipboard-list', color: '#FFB74D', screen: 'TodoList' },
//     { title: 'Doctor List', icon: 'doctor', color: '#4DB6AC', screen: 'DoctorList' },
//     { title: 'Tips', icon: 'lightbulb-on', color: '#7986CB', screen: 'Tips' },
//     { title: 'Music', icon: 'music-note', color: '#BA68C8', screen: 'Music' },  
//     { title: 'Exercise', icon: 'run', color: '#64B5F6', screen: 'Exercise' },
//     { title: 'AI Chat', icon: 'robot-outline', color: '#FFD54F', screen: 'AiChat' },
//     { title: 'Journal', icon: 'book-open-variant', color: '#81C784', screen: 'Journal' },
//     { title: 'Quotes', icon: 'star-outline', color: '#F2D16D', screen: 'Quotes' },
//   ];

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
      
//       <View style={styles.container}>
//       <Image source={require('@/assets/images/logo-login.png')}style={styles.reactLogo}/>
//         <Text style={styles.title}>Breathe. Focus. Achieve. 🌿</Text>
//         <Text style={styles.subtitle}>Welcome to InnerPeace, {user?.email}!</Text>
//         <View style={styles.buttonContainer}>
//           {buttons.map((btn, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[styles.button, { backgroundColor: btn.color }]}
//               onPress={() => navigation.navigate(btn.screen)}
//             >
//               <MaterialCommunityIcons name={btn.icon} size={40} color="#FFF" />
//               <Text style={styles.buttonText}>{btn.title}</Text>
//             </TouchableOpacity>
//           ))}
//           <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
//             <MaterialCommunityIcons name="logout" size={40} color="#FFF" />
//             <Text style={styles.buttonText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   button: {
//     width: 120,
//     height: 120,
//     borderRadius: 20,
//     marginVertical: 10,
//     marginHorizontal: '2.5%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 4,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 8,
//   },
//   logoutButton: {
//     backgroundColor: '#E57373',
//   },
//   reactLogo: {
//    height: 200,
//    width: 160,
//     marginBottom: 20,
//   },
// });
