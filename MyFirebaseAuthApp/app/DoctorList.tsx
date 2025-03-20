
// import React from "react";
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

// // Sample data
// const doctors = [
  
//     {
//       "name": "Dr. Neha Deshmukh",
//       "specialty": "Psychologist",
//       "contact": "987-654-3210",
//       "address": "123 Mind Care St, Pune, Maharashtra, India"
//     },
//     {
//       "name": "Dr. Rajesh Patil",
//       "specialty": "Psychologist",
//       "contact": "976-543-2109",
//       "address": "456 Peace Road, Pune, Maharashtra, India"
//     },
//     {
//       "name": "Dr. Aarti Kulkarni",
//       "specialty": "Psychologist",
//       "contact": "965-432-1098",
//       "address": "789 Wellness Blvd, Pune, Maharashtra, India"
//     },
//     {
//       "name": "Dr. Suresh Deshmukh",
//       "specialty": "Psychologist",
//       "contact": "987-654-3210",
//       "address": "123 Mind Care St, Pune, Maharashtra, India"
//     },
//     {
//       "name": "Dr. Rajesh Patil",
//       "specialty": "Psychologist",
//       "contact": "976-543-2109",
//       "address": "456 Peace Road, Pune, Maharashtra, India"
//     },
//     {
//       "name": "Dr. Ruturaj Kulkarni",
//       "specialty": "Psychologist",
//       "contact": "965-432-1098",
//       "address": "789 Wellness Blvd, Pune, Maharashtra, India"
//     }
  
  
// ];

// // Doctor Card Component
// const DoctorCard = ({ name, specialty, contact, address }) => {
//   return (
//     <TouchableOpacity style={styles.card} activeOpacity={0.7}>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.specialty}>{specialty}</Text>
//       <Text style={styles.info}><Text style={styles.bold}>Contact:</Text> {contact}</Text>
//       <Text style={styles.info}><Text style={styles.bold}>Address:</Text> {address}</Text>
//     </TouchableOpacity>
//   );
// };

// // Doctor List Component
// const DoctorList = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={doctors}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => <DoctorCard {...item} />}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   list: {
//     alignItems: "center",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 16,
//     marginVertical: 8,
//     width: 300,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 4,
//   },
//   specialty: {
//     fontSize: 16,
//     color: "#666",
//     textAlign: "center",
//     marginBottom: 8,
//   },
//   info: {
//     fontSize: 14,
//     color: "#444",
//     marginTop: 4,
//   },
//   bold: {
//     fontWeight: "bold",
//   },
// });

// export default DoctorList;
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

// Sample data
const doctors = [
  
    {
      "name": "Dr. Neha Deshmukh",
      "specialty": "Psychologist",
      "contact": "987-654-3210",
      "address": "123 Mind Care St, Pune, Maharashtra, India"
    },
    {
      "name": "Dr. Rajesh Patil",
      "specialty": "Psychologist",
      "contact": "976-543-2109",
      "address": "456 Peace Road, Pune, Maharashtra, India"
    },
    {
      "name": "Dr. Aarti Kulkarni",
      "specialty": "Psychologist",
      "contact": "965-432-1098",
      "address": "789 Wellness Blvd, Pune, Maharashtra, India"
    },
    {
      "name": "Dr. Suresh Deshmukh",
      "specialty": "Psychologist",
      "contact": "987-654-3210",
      "address": "123 Mind Care St, Pune, Maharashtra, India"
    },
    {
      "name": "Dr. Rajesh Patil",
      "specialty": "Psychologist",
      "contact": "976-543-2109",
      "address": "456 Peace Road, Pune, Maharashtra, India"
    },
    {
      "name": "Dr. Ruturaj Kulkarni",
      "specialty": "Psychologist",
      "contact": "965-432-1098",
      "address": "789 Wellness Blvd, Pune, Maharashtra, India"
    }
  
  
];

// Doctor Card Component
const DoctorCard = ({ name, specialty, contact, address }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <Text style={styles.info}><Text style={styles.bold}>Contact:</Text> {contact}</Text>
      <Text style={styles.info}><Text style={styles.bold}>Address:</Text> {address}</Text>
    </TouchableOpacity>
  );
};

// Doctor List Component
const DoctorList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DoctorCard {...item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#eef5ff", // Light blue background
  },
  list: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    marginVertical: 8,
    width: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: "#007bff", // Blue left border for a stylish look
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
    color: "#007bff", // Blue color for doctor names
  },
  specialty: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 6,
    fontStyle: "italic",
  },
  info: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
    color: "#0056b3", // Slightly darker blue for emphasis
  },
});

export default DoctorList;
