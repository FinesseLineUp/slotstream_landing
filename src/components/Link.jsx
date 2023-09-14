import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { colors, fonts, width } from "../constants";

export const Link = ({
  link = "igaming@lineup.ua",
  text = "igaming@lineup.ua",
}) => {
  return (
    <View style={styles.link}>
      <a
        href={"mailto: " + link}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Text style={styles.linkText}>{text}</Text>
      </a>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    // marginBottom: "3%",
  },
  linkText: {
    fontSize: width / 64,
    fontFamily: fonts.regular,
    color: colors.lightViolet,
  },
});
