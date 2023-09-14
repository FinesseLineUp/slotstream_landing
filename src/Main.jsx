import { StyleSheet, ScrollView } from "react-native";
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

export const Main = () => {
  return (
    <ScrollView>
      <div id="home">
        <Home />
      </div>
      <div id="what_is_slotstream">
        <WhatIsSlotStream />
      </div>
      <GetStarted />

      <div id="features">
        <ExploreTheFeatures />
      </div>

      <div id="how_it_works">
        <HowItWorks />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <Partner />
      <WantToCollaborate />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
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
