import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/constants";
import { Main } from "./src/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "VisueltPro-Bold": require("./assets/fonts/VisueltPro-Bold.ttf"),
    "VisueltPro-Medium": require("./assets/fonts/VisueltPro-Medium.ttf"),
    "VisueltPro-Regular": require("./assets/fonts/VisueltPro-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    );
  }
  return <Main />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkBlue2,
  },
});
