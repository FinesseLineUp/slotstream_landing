import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { colors, fonts, width } from "../constants";

export const BenefitsBlock = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/" + icon)} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkViolet,
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: "4%",
    paddingHorizontal: "8%",
    width: "49%",
    marginBottom: 30,
    width: "100%",
    height: "45%",
  },
  text: {
    fontSize: width / 64,
    fontFamily: fonts.regular,
    color: colors.white,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: "10%",
    marginRight: "5%",
  },
});
