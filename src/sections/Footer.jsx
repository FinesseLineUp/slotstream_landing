import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { Link } from "../components/Link";

const Footer = ({ width }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: colors.dark,
      paddingHorizontal: "10%",
      paddingBottom: "3%",
    },
    header: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      paddingTop: "4%",
    },
    rights: {
      fontFamily: fonts.regular,
      fontSize: width / 88,
      color: colors.lightGrey2,
      paddingVertical: "2%",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={width} />
        <Navigation isFooter={true} width={width} />
      </View>
      <Text style={styles.rights}>
        © 2023. Slot Stream. All Rights Reserved
      </Text>
      <Link width={width} />
    </View>
  );
};

export default Footer;
