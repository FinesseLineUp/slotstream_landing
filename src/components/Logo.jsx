import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fonts } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

export const Logo = ({ width }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      marginRight: "4%",
    },
    text: {
      fontFamily: fonts.bold,
      fontSize: width / 27,
      color: colors.lightGrey1,
    },
    redWrapper: {
      paddingHorizontal: 9,
      paddingVertical: 0,
      borderRadius: 5,
      margin: width / 160,
      shadowColor: colors.red1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.9,
      shadowRadius: 30,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SLOT</Text>
      <LinearGradient
        style={styles.redWrapper}
        colors={[colors.red1, colors.red2]}
      >
        <Text style={styles.text}>STREAM</Text>
      </LinearGradient>
    </View>
  );
};
