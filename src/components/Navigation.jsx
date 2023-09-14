import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors, fonts, height, width } from "../constants";

export const Navigation = () => {
  console.log("blaz w", width);
  return (
    <View style={styles.container}>
      <View style={styles.navItem}>
        <a href="#what_is_slotstream" style={{ textDecoration: "none" }}>
          <Text style={styles.text}>What Is Slot Stream</Text>
        </a>
      </View>
      <View style={styles.navItem}>
        <a href="#features" style={{ textDecoration: "none" }}>
          <Text style={styles.text}>Features</Text>
        </a>
      </View>
      <View style={styles.navItem}>
        <a href="#how_it_works" style={{ textDecoration: "none" }}>
          <Text style={styles.text}>How it works</Text>
        </a>
      </View>
      <View style={styles.navItem}>
        <a href="#benefits" style={{ textDecoration: "none" }}>
          <Text style={styles.text}>Benefits</Text>
        </a>
      </View>
      <View style={styles.navItem}>
        <a href="#faq" style={{ textDecoration: "none" }}>
          <Text style={styles.text}>FAQ</Text>
        </a>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    // alignSelf: "flex-end",
  },
  navItem: {
    marginHorizontal: "2%",
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: width / 63,
    color: colors.lightGrey2,
  },
});
