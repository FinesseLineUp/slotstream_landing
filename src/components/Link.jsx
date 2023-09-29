import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { colors, fonts, width } from "../constants";

export const Link = ({
  link = "hello@slotstream.online",
  text = "hello@slotstream.online",
  width,
}) => {
  const styles = StyleSheet.create({
    linkText: {
      fontSize: width / 64,
      fontFamily: fonts.regular,
      color: colors.lightViolet,
    },
  });
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
