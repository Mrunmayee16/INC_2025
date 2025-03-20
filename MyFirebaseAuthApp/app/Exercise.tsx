// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { WebView } from "react-native-webview";

// const Exercise: React.FC = () => {
//   const videoUrls = [
//     "https://www.youtube.com/embed/L4odvR0K800",
//     "https://www.youtube.com/embed/Cz4UN4T9CWA",
//     "https://www.youtube.com/embed/dWjoUbt5baA",
//     "https://www.youtube.com/embed/qWy_aOlB45Y",
//   ];

//   return (
//     <View style={styles.container}>
//       {videoUrls.map((url, index) => (
//         <WebView
//           key={index}
//           source={{ uri: url }}
//           style={styles.webview}
//           allowsFullscreenVideo
//           javaScriptEnabled
//           domStorageEnabled
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   webview: {
//     width: "100%",
//     maxWidth: 500,
//     height: 300,
//     marginBottom: 20,
//   },
// });

// export default Exercise;
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

const Exercise: React.FC = () => {
 
    const videoUrls = [
      "https://www.youtube.com/embed/E0PAcQ3JMs0", // Your video
      "https://www.youtube.com/embed/L4odvR0K800",
      "https://www.youtube.com/embed/Cz4UN4T9CWA",
      "https://www.youtube.com/embed/dWjoUbt5baA",
    ];
    


  const generateHTML = (url: string) => `
    <html>
      <body style="margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#000;">
        <iframe 
          width="100%" 
          height="100%" 
          src="${url}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </body>
    </html>
  `;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {videoUrls.map((url, index) => (
        <View key={index} style={styles.videoContainer}>
          <WebView
            originWhitelist={['*']}
            source={{ html: generateHTML(url) }}
            style={styles.webview}
            allowsFullscreenVideo
            javaScriptEnabled
            domStorageEnabled
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  videoContainer: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  webview: {
    flex: 1,
  },
});

export default Exercise;
