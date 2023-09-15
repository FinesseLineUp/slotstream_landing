import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { colors } from "./constants";
import Home from "./sections/Home";
import WhatIsSlotStream from "./sections/WhatIsSlotStream";
import GetStarted from "./sections/GetStarted";
import ExploreTheFeatures from "./sections/ExploreTheFeatures";
import HowItWorks from "./sections/HowItWorks";
import Benefits from "./sections/Benefits";
import Partner from "./sections/Partner";
import WantToCollaborate from "./sections/WantToCollaborate";
import FAQ from "./sections/Faq";
import Footer from "./sections/Footer";

import React, { useState, useEffect } from "react";

export const Main = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    // Add an event listener for orientation changes
    const handleOrientationChange = ({ window: { width, height } }) => {
      setScreenWidth(width);
      setScreenHeight(height);
    };

    Dimensions.addEventListener("change", handleOrientationChange);

    // Remove the event listener when the component unmounts
    return () => {
      Dimensions.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <ScrollView>
      <div id="home">
        <Home width={screenWidth} height={screenHeight} />
      </div>
      <div id="what_is_slotstream">
        <WhatIsSlotStream width={screenWidth} height={screenHeight} />
      </div>
      <GetStarted width={screenWidth} height={screenHeight} />

      <div id="features">
        <ExploreTheFeatures width={screenWidth} height={screenHeight} />
      </div>

      <div id="how_it_works">
        <HowItWorks width={screenWidth} height={screenHeight} />
      </div>
      <div id="benefits">
        <Benefits width={screenWidth} height={screenHeight} />
      </div>
      <Partner width={screenWidth} height={screenHeight} />
      <WantToCollaborate width={screenWidth} height={screenHeight} />
      <div id="faq">
        <FAQ width={screenWidth} height={screenHeight} />
      </div>
      <Footer width={screenWidth} height={screenHeight} />
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
