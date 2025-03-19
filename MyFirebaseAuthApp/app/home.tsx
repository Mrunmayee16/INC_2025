// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { getAuth, signOut, User } from 'firebase/auth';
// import { router } from 'expo-router'; // Import the router for navigation

// export default function HomeScreen() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         router.replace('/login'); // Redirect to login if not logged in
//       }
//       setLoading(false);
//     });

//     return unsubscribe; // Cleanup subscription
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.replace('/login'); // Redirect to login after logout
//     } catch (error) {
//       console.error('Logout Error:', error);
//     }
//   };

//   const navigateToTodoList = () => {
//     router.push('/TodoList'); // Navigate to the Todo List screen (assuming it's /todo route)
//   };
//   // const navigateToDoctorList = () => {
//   //   router.push('/DoctorList'); 
//   // };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#6200ee" />
//       </View>
//     );
//   }

//   return (
  
//     <View style={styles.container}>
//       <Text style={styles.title}>🎉 Welcome to the App!</Text>
//       <Text style={styles.subtitle}>Logged in as: {user?.email}</Text>

//       {/* Button to access the To-Do List */}
//       <TouchableOpacity style={styles.button} onPress={navigateToTodoList}>
//         <Text style={styles.buttonText}>Go to To-Do List</Text>
//       </TouchableOpacity>
       
     

//       {/* Logout Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   description: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 32,
//   },
//   button: {
//     backgroundColor: '#6200ee',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 8,
//     marginVertical: 10, // Added margin between buttons
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// working previous app before chat feature
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { getAuth, signOut, User } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook
// import { router } from 'expo-router'; 

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
//         navigation.replace('Login'); // Redirect to login if not logged in
//       }
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

  
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.replace('/login'); // Redirect to login after logout
//     } catch (error) {
//       console.error('Logout Error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🎉 Welcome to the App!</Text>
//       <Text style={styles.subtitle}>Logged in as: {user?.email}</Text>

//       {/* Button to access the To-Do List */}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TodoList')}>
//         <Text style={styles.buttonText}>Go to To-Do List</Text>
//       </TouchableOpacity>

//       {/* Button to access the Doctor List */}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorList')}>
//         <Text style={styles.buttonText}>Go to Doctor List</Text>
//       </TouchableOpacity>
//       {/* Button to access the Tips*/}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
//   <Text style={styles.buttonText}>Go to Tips</Text>
// </TouchableOpacity>

//       {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
//         <Text style={styles.buttonText}>Go to Tips</Text>
//       </TouchableOpacity> */}


//       {/* Logout Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 32,
//   },
//   button: {
//     backgroundColor: '#6200ee',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 8,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Home.tsx with working feature of chatbot
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { getAuth, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Define the type for navigation parameters
type RootStackParamList = {
  Login: undefined;
  TodoList: undefined;
  DoctorList: undefined;
  Tips: undefined;
  Music: undefined;
  Exercise: undefined;
  AiChat: undefined;
};

type MenuItem = {
  title: string;
  screen: keyof RootStackParamList;
};

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      try {
        setUser(currentUser);
        setLoading(false);
        if (!currentUser) {
          navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        }
      } catch (error) {
        console.error('Auth State Change Error:', error);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const menuItems: MenuItem[] = [
    { title: 'To-Do List', screen: 'TodoList' },
    { title: 'Doctor List', screen: 'DoctorList' },
    { title: 'Tips', screen: 'Tips' },
    { title: 'Music', screen: 'Music' },
    { title: 'Exercise', screen: 'Exercise' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breathe. Focus. Achieve. Welcome to InnerPeace!</Text>
      <Text style={styles.subtitle}>Logged in as: {user?.email || 'Unknown User'}</Text>

      {/* Grid Menu */}
      <FlatList
        data={menuItems}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.screen}
      />

      {/* Logout Button */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      {/* AI Chat Panel */}
      <TouchableOpacity style={styles.aiChatPanel} onPress={() => navigation.navigate('AiChat')}>
        <MaterialCommunityIcons name="robot" size={24} color="#fff" />
        <Text style={styles.aiChatText}>Chat with AI</Text>
      </TouchableOpacity>
    </View>
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
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
  gridContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#03DAC5',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    elevation: 3,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    flexWrap: 'wrap', // Allows long text to wrap instead of cutting off
    width: '100%', // Ensures proper spacing inside the button
  },
  logoutButton: {
    backgroundColor: '#B00020',
    width: '90%',
    marginTop: 20,
    marginBottom: 100, // Increased space to avoid overlap
  },
  aiChatPanel: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6B4EFF',
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  aiChatText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});


