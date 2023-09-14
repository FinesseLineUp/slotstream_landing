import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { colors, fonts, width } from "../constants";

export const IconWithDescription = ({ icon, text, style }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <Image source={require("../../assets/" + icon)} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: "3%",
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    justifyContent: "center",
    alignItems: "center",
    width: "23%",
    // backgroundColor: "green",
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: "10%",
  },
  text: {
    fontSize: width / 64,
    fontFamily: fonts.medium,
    color: colors.white,
    textAlign: "center",
  },
});
