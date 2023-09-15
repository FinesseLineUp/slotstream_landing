import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors, fonts } from "../constants";

const WhatIsSlotStream = ({ width, height }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: height > width ? height / 2 : height,
      backgroundColor: colors.darkBlue2,
    },
    header: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      paddingVertical: "3%",
    },
    main: {
      flexDirection: "row",
      flex: 1,
    },
    title: {
      marginTop: "4%",
      position: "absolute",
      width: "100%",
    },
    titleText: {
      fontFamily: fonts.bold,
      fontSize: width / 22,
      color: colors.white,
      marginBottom: 30,
      textAlign: "center",
    },
    descriptionWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: "5%",
    },
    description: {
      fontFamily: fonts.regular,
      fontSize: width / 58,
      color: colors.white,
      lineHeight: width / 40,
    },
    imageWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: width / 1.85,
      height: height * 2,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>What is Slot Stream?</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/what_is_slotstream_image.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={[styles.description, { marginBottom: "3%" }]}>
            This innovative SaaS solution combines the excitement of physical
            casinos with the convenience and accessibility of online gambling,
            offering a win-win scenario for both platforms and players.
          </Text>
          <Text style={styles.description}>
            Live streaming isn't just about watching, it's about participating.
            Players can interact with the real machines and make decisions in
            real-time. This level of engagement bridges the gap between online
            and physical gambling, making it a highly captivating and unique
            experience.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WhatIsSlotStream;
