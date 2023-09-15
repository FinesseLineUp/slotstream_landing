import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fonts } from "../constants";

export const Navigation = ({ isFooter, width }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navItem: {
      marginHorizontal: "2%",
    },
    text: {
      fontFamily: isFooter ? fonts.regular : fonts.medium,
      fontSize: width / 63,
      color: isFooter ? colors.white : colors.lightGrey2,
    },
  });

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
