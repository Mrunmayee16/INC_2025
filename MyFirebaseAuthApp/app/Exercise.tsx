// import React from "react";

// const Exercise: React.FC = () => {
//   const containerStyle: React.CSSProperties = {
//     display: "grid",
//     gridTemplateColumns: "repeat(2, 1fr)", // 2 videos per row
//     gap: "20px",
//     justifyContent: "center",
//     padding: "20px",
//   };

//   const iframeStyle: React.CSSProperties = {
//     width: "100%",
//     maxWidth: "500px",
//     height: "300px",
//     border: "none",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Video 1 */}
//       <iframe
//         src="https://www.youtube.com/embed/L4odvR0K800"
//         title="Exercise Video 1"
//         style={iframeStyle}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe>

//       {/* Video 2 */}
//       <iframe
//         src="https://www.youtube.com/embed/Cz4UN4T9CWA"
//         title="Exercise Video 2"
//         style={iframeStyle}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe>

//       {/* Video 3 */}
//       <iframe
//         src="https://www.youtube.com/embed/dWjoUbt5baA"
//         title="Exercise Video 3"
//         style={iframeStyle}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe>

//       {/* Video 4 */}
//       <iframe
//         src="https://www.youtube.com/embed/qWy_aOlB45Y"
//         title="Exercise Video 4"
//         style={iframeStyle}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default Exercise;
import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const Exercise: React.FC = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/L4odvR0K800",
    "https://www.youtube.com/embed/Cz4UN4T9CWA",
    "https://www.youtube.com/embed/dWjoUbt5baA",
    "https://www.youtube.com/embed/qWy_aOlB45Y",
  ];

  return (
    <View style={styles.container}>
      {videoUrls.map((url, index) => (
        <WebView
          key={index}
          source={{ uri: url }}
          style={styles.webview}
          allowsFullscreenVideo
          javaScriptEnabled
          domStorageEnabled
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  webview: {
    width: "100%",
    maxWidth: 500,
    height: 300,
    marginBottom: 20,
  },
});

export default Exercise;
