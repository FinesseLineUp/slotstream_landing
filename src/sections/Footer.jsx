import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { Link } from "../components/Link";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Navigation isFooter={true} />
      </View>
      <Text style={styles.rights}>
        © 2023. Slot Stream. All Rights Reserved
      </Text>
      <Link />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.dark,
    paddingHorizontal: "10%",
    paddingBottom: "3%",
  },
  header: {
    // position: "absolute",
    // top: 0,
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-between",
    paddingTop: "4%",
    // paddingHorizontal: "10%",
  },
  main: {
    // flexDirection: "row",
    // flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: width / 20,
    color: colors.white,
    marginBottom: 30,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: width / 60,
    color: colors.lightGrey2,
  },
  image: {
    width: width / 1.2,
    height: height,
  },
  rights: {
    fontFamily: fonts.regular,
    fontSize: width / 88,
    color: colors.lightGrey2,
    paddingVertical: "2%",
  },
});

export default Footer;
