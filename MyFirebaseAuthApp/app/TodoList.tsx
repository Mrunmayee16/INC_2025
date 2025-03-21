//working todo list but all users see all data

// import React, { useState, useEffect } from 'react';
// import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
// import { database, ref, set, push, remove, onValue } from '../firebaseConfig'; // Import Firebase functions
// import Task from './Screens/task'; // Assuming Task component exists
// import { DataSnapshot } from "firebase/database";

// const TodoList = () => {
//   const [task, setTask] = useState<string>(''); // Typed as string
//   const [taskItems, setTaskItems] = useState<{ id: string; text: string }[]>([]); // Array of objects [{id, text}]

//   // Fetch tasks from Firebase when component mounts & listen for changes
//   useEffect(() => {
//     const tasksRef = ref(database, 'tasks'); // Reference to "tasks" in DB

//     const unsubscribe = onValue(tasksRef, (snapshot: DataSnapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const tasksArray = Object.keys(data).map((key) => ({
//           id: key,
//           text: data[key].text,
//         }));
//         setTaskItems(tasksArray);
//       } else {
//         setTaskItems([]); // No tasks in DB
//       }
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, []);

//   // Add task to Firebase and update state immediately
//   const handleAddTask = () => {
//     Keyboard.dismiss();
//     if (task.trim()) {
//       const tasksRef = ref(database, 'tasks');
//       const newTaskRef = push(tasksRef);
//       const newTask = { id: newTaskRef.key!, text: task };

//       // Update UI instantly
//       setTaskItems((prev) => [...prev, newTask]);

//       // Save to Firebase
//       set(newTaskRef, { text: task });

//       // Reset input
//       setTask('');
//     }
//   };

//   // Remove task from Firebase and update UI immediately
//   const completeTask = (taskId: string) => {
//     remove(ref(database, `tasks/${taskId}`));

//     // Update UI instantly
//     setTaskItems((prev) => prev.filter((task) => task.id !== taskId));
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
//         <View style={styles.tasksWrapper}>
//           <Text style={styles.sectionTitle}>Today's Tasks</Text>
//           <View style={styles.items}>
//             {taskItems.map((item) => (
//               <TouchableOpacity key={item.id} onPress={() => completeTask(item.id)}>
//                 <Task text={item.text} />
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </ScrollView>

//       {/* Input task */}
//       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
//         <TextInput
//           style={styles.input}
//           placeholder="Write a task"
//           value={task}
//           onChangeText={(text) => setTask(text)}
//         />
//         <TouchableOpacity onPress={handleAddTask}>
//           <View style={styles.addWrapper}>
//             <Text style={styles.addText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: "#E3F2FD", // Light blue background for a fresh look
//   },
//   tasksWrapper: { 
//     paddingTop: 80, 
//     paddingHorizontal: 20 
//   },
//   sectionTitle: { 
//     fontSize: 24, 
//     fontWeight: "bold", 
//     color: "#0D47A1", // Deep blue title for contrast
//   },
//   items: { 
//     marginTop: 30 
//   },
//   writeTaskWrapper: {
//     position: "absolute",
//     bottom: 60,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     borderColor: "#1E88E5", // Blue border for an accent touch
//     borderWidth: 2,
//     width: 250,
//     fontSize: 16,
//     color: "#0D47A1", // Dark blue text color
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#1976D2", // Blue add button
//     borderRadius: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#1565C0", // Slightly darker blue border
//     borderWidth: 2,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5, // Smooth elevation for button
//   },
//   addText: {
//     fontSize: 24,
//     color: "#FFF", // White text for contrast
//     fontWeight: "bold",
//   },
// });

// export default TodoList;



//working code with every use see only its own data
import React, { useState, useEffect } from 'react';
import { 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Keyboard, 
  ScrollView, 
  Platform 
} from 'react-native';

import { database, ref, set, push, remove, onValue } from '../firebaseConfig'; // Firebase imports
import { getAuth } from "firebase/auth"; // Firebase Authentication
import Task from './Screens/task'; // Assuming Task component exists
import { DataSnapshot } from "firebase/database";

const TodoList = () => {
  const [task, setTask] = useState<string>(''); 
  const [taskItems, setTaskItems] = useState<{ id: string; text: string }[]>([]); 
  const auth = getAuth(); // Firebase authentication

  // Fetch tasks for the logged-in user
  useEffect(() => {
    if (!auth.currentUser) return; // Ensure user is logged in

    const userId = auth.currentUser.uid; // Get the logged-in user's UID
    const tasksRef = ref(database, `tasks/${userId}`); // Fetch tasks only for this user

    const unsubscribe = onValue(tasksRef, (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const tasksArray = Object.keys(data).map((key) => ({
          id: key,
          text: data[key].text,
        }));
        setTaskItems(tasksArray);
      } else {
        setTaskItems([]); // No tasks in DB
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth.currentUser]);

  // Add task to Firebase under the logged-in user's UID
  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task.trim() && auth.currentUser) {  
      const userId = auth.currentUser.uid;
      const tasksRef = ref(database, `tasks/${userId}`); // Store inside user's node
      const newTaskRef = push(tasksRef);
      const newTask = { id: newTaskRef.key!, text: task };

      // Update UI instantly
      setTaskItems((prev) => [...prev, newTask]);

      // Save to Firebase
      set(newTaskRef, { text: task });

      // Reset input
      setTask('');
    }
  };

  // Remove task from Firebase under the logged-in user's UID
  const completeTask = (taskId: string) => {
    if (!auth.currentUser) return; 

    const userId = auth.currentUser.uid;
    remove(ref(database, `tasks/${userId}/${taskId}`)); // Remove from user's task list

    // Update UI instantly
    setTaskItems((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => completeTask(item.id)}>
                <Task text={item.text} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Input task */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#E3F2FD", // Light blue background for a fresh look
  },
  tasksWrapper: { 
    paddingTop: 80, 
    paddingHorizontal: 20 
  },
  sectionTitle: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#0D47A1", // Deep blue title for contrast
  },
  items: { 
    marginTop: 30 
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#1E88E5", // Blue border for an accent touch
    borderWidth: 2,
    width: 250,
    fontSize: 16,
    color: "#0D47A1", // Dark blue text color
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#1976D2", // Blue add button
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1565C0", // Slightly darker blue border
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Smooth elevation for button
  },
  addText: {
    fontSize: 24,
    color: "#FFF", // White text for contrast
    fontWeight: "bold",
  },
});

export default TodoList;
