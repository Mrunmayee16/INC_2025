// // DoctorList.tsx

// import React from "react";
// import styled from "styled-components";
// import { useSpring, animated } from "react-spring";

// // Sample data (you can replace this with your real data or fetch it from an API)
// const doctors = [
//   {
//     name: "Dr. Alice Smith",
//     specialty: "Psychologist",
//     contact: "123-456-7890",
//     address: "123 Wellness St, Cityville, Country",
//   },
//   {
//     name: "Dr. Bob Johnson",
//     specialty: "Psychologist",
//     contact: "234-567-8901",
//     address: "456 Mind Care Blvd, Townsville, Country",
//   },
//   {
//     name: "Dr. Charlie Davis",
//     specialty: "Psychologist",
//     contact: "345-678-9012",
//     address: "789 Peace Rd, Villagetown, Country",
//   },
// ];

// // Card Component
// interface DoctorCardProps {
//   name: string;
//   specialty: string;
//   contact: string;
//   address: string;
// }

// const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, contact, address }) => {
//   const cardStyle = useSpring({
//     opacity: 1,
//     transform: 'translateY(0)',
//     from: { opacity: 0, transform: 'translateY(20px)' },
//   });

//   return (
//     <animated.Card style={cardStyle}>
//       <CardHeader>
//         <h3>{name}</h3>
//         <p>{specialty}</p>
//       </CardHeader>
//       <CardBody>
//         <p><strong>Contact:</strong> {contact}</p>
//         <p><strong>Address:</strong> {address}</p>
//       </CardBody>
//     </animated.Card>
//   );
// };

// // Doctor List Component
// const DoctorList: React.FC = () => {
//   return (
//     <Container>
//       {doctors.map((doctor, index) => (
//         <DoctorCard
//           key={index}
//           name={doctor.name}
//           specialty={doctor.specialty}
//           contact={doctor.contact}
//           address={doctor.address}
//         />
//       ))}
//     </Container>
//   );
// };

// // Styled components
// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
//   padding: 20px;
// `;

// const Card = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 250px;
//   padding: 20px;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const CardHeader = styled.div`
//   text-align: center;
//   margin-bottom: 15px;

//   h3 {
//     font-size: 1.2rem;
//     font-weight: 600;
//   }

//   p {
//     font-size: 1rem;
//     color: #888;
//   }
// `;

// const CardBody = styled.div`
//   font-size: 0.9rem;
//   color: #555;

//   p {
//     margin: 10px 0;
//   }
// `;

// export default DoctorList; // Ensure this is the default export
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
    backgroundColor: "#f9f9f9",
  },
  list: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  specialty: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default DoctorList;
