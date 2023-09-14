import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  LayoutAnimation,
} from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./constants";
import { useState, useRef } from "react";
import Home from "./sections/Home";
import WhatIsSlotStream from "./sections/WhatIsSlotStream";
import GetStarted from "./sections/GetStarted";
import ExploreTheFeatures from "./sections/ExploreTheFeatures";
import HowItWorks from "./sections/HowItWorks";

export const Main = () => {
  console.log("bla home");
  return (
    <ScrollView>
      <div id="home">
        <Home />
      </div>
      <div id="what_is_slotstream">
        <WhatIsSlotStream />
      </div>
      <GetStarted />
      <ExploreTheFeatures />
      <div id="how_it_works">
        <HowItWorks />
      </div>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeSection: {
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
    position: "absolute",
    // left: 40,
    // top: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkBlue2,
  },
});
