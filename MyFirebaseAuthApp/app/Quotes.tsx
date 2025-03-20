// import React from 'react';
// import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

// const quotes = [
//   { id: '1', imageUrl: require('@/assets/images/quote1.jpeg') },
//   { id: '2', imageUrl: require('@/assets/images/quote2.jpeg') },
//   { id: '3', imageUrl: require('@/assets/images/quote3.jpeg') },
//   { id: '4', imageUrl: require('@/assets/images/quote4.jpeg') },
//   { id: '5', imageUrl: require('@/assets/images/quote5.jpeg') },
//   { id: '6', imageUrl: require('@/assets/images/quote6.jpeg') },
//   { id: '7', imageUrl: require('@/assets/images/quote7.jpeg') },
//   { id: '8', imageUrl: require('@/assets/images/quote8.jpeg') },
//   { id: '9', imageUrl: require('@/assets/images/quote9.jpeg') },
// ];

// const screenWidth = Dimensions.get('window').width;

// const Quotes: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={quotes}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Image source={item.imageUrl} style={styles.image} />
//         )}
//         pagingEnabled
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.listContent} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listContent: {
//     paddingBottom: 100, 
//   },
//   image: {
//     width: screenWidth * 0.9,
//     height: 300,
//     borderRadius: 16,
//     marginVertical: 10,
//     alignSelf: 'center',
//   },
// });

// export default Quotes;
import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const quotes = [
  { id: '1', imageUrl: require('@/assets/images/quote1.jpeg') },
  { id: '2', imageUrl: require('@/assets/images/quote2.jpeg') },
  { id: '3', imageUrl: require('@/assets/images/quote3.jpeg') },
  { id: '4', imageUrl: require('@/assets/images/quote4.jpeg') },
  { id: '5', imageUrl: require('@/assets/images/quote5.jpeg') },
  { id: '6', imageUrl: require('@/assets/images/quote6.jpeg') },
  { id: '7', imageUrl: require('@/assets/images/quote7.jpeg') },
  { id: '8', imageUrl: require('@/assets/images/quote8.jpeg') },
  { id: '9', imageUrl: require('@/assets/images/quote9.jpeg') },
];

const screenWidth = Dimensions.get('window').width;

const Quotes: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.imageUrl} style={styles.image} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 50,
  },
  image: {
    width: screenWidth * 0.9,
    height: 350, 
    borderRadius: 16,
    marginVertical: 10,
    alignSelf: 'center',
    resizeMode: 'contain', 
  },
});

export default Quotes;
