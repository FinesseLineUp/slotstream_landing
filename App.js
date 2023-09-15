import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/constants";
import { Main } from "./src/Main";
import { useAssets } from "expo-asset";
import { useEffect, useState } from "react";
import { width, height } from "./src/constants";

export default function App() {
  const [fontsLoaded, errorFonts] = useFonts({
    "VisueltPro-Bold": require("./assets/fonts/VisueltPro-Bold.ttf"),
    "VisueltPro-Medium": require("./assets/fonts/VisueltPro-Medium.ttf"),
    "VisueltPro-Regular": require("./assets/fonts/VisueltPro-Regular.ttf"),
  });

  // const [isReady, setIsReady] = useState(false);

  const [isReadyWithDelay, setIsReadyWithDelay] = useState(false);

  const [assets, error] = useAssets([
    require("./assets/arc.png"),
    require("./assets/banknote_icon.png"),
    require("./assets/casino_image.png"),
    require("./assets/check_circle_image.png"),
    require("./assets/get_started_image.png"),
    require("./assets/home_image.png"),
    require("./assets/rays_background1.png"),
    require("./assets/want_to_collaborate_image.png"),
    require("./assets/what_is_slotstream_image.png"),
    require("./assets/xmark.png"),
    require("./assets/broadcasting_icon.png"),
    require("./assets/card_transfer_icon.png"),
    require("./assets/choose_icon.png"),
    require("./assets/crown_icon.png"),
    require("./assets/Explore the Features.png"),
    require("./assets/graph_icon.png"),
    require("./assets/icon.png"),
    require("./assets/light_bulb_icon.png"),
    require("./assets/magic_icon.png"),
    require("./assets/mail_icon.png"),
    require("./assets/monitor_icon.png"),
    require("./assets/plus.png"),
    require("./assets/splash.png"),
  ]);
  useEffect(() => {
    if (assets && fontsLoaded) {
      // setIsReady(true);
      setTimeout(() => {
        setIsReadyWithDelay(true);
      }, 800);
    }
  }, [assets, fontsLoaded]);

  // console.log(
  //   " bla",
  //   { assets, isReady, error, errorFonts, fontsLoaded },
  //   assets?.map((a) => a.downloaded)
  // );

  // if (!isReady) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color={colors.white} />
  //     </View>
  //   );
  // }
  return (
    <View style={{ flex: 1 }}>
      {!isReadyWithDelay ? (
        <View
          style={[
            styles.loadingContainer,
            {
              position: "absolute",
              zIndex: 1,
              width: width,
              height: height,
            },
          ]}
        >
          <ActivityIndicator size="large" color={colors.white} />
        </View>
      ) : null}
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkBlue2,
    width: width,
    height: height,
  },
});
