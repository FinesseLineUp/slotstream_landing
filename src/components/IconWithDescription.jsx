import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { colors, fonts, width } from "../constants";

export const IconWithDescription = ({
  icon,
  text,
  style,
  shadowStyle,
  longText,
  textStyle,
}) => {
  let longTextStyle = {};

  if (longText) {
    longTextStyle = {
      flexDirection: "row",
      paddingHorizontal: "3%",
      paddingVertical: "3%",
      justifyContent: "start",
      alignItems: "flex-start",
      width: "100%",
      // backgroundColor: "red",
      // width: "23%",
    };
  }
  return (
    <View style={[styles.container, { ...style, ...longTextStyle }]}>
      <View style={{ ...shadowStyle }}> </View>

      <Image
        source={require("../../assets/" + icon)}
        style={[styles.icon, { ...shadowStyle }]}
      />
      {/* <View style={styles.shadowView}></View> */}

      <Text
        style={[
          styles.text,
          { textAlign: longText ? "left" : "center", ...textStyle },
        ]}
      >
        {text}
      </Text>
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
    marginRight: "5%",
  },
  text: {
    fontSize: width / 64,
    fontFamily: fonts.medium,
    color: colors.white,
    textAlign: "center",
    // shadowColor: colors.shadowBlue,
    // shadowRadius: 150,
    // shadowOpacity: 1,
    // backgroundColor: "transparent",
  },
  shadowView: {
    width: 50,
    height: 50,
    shadowColor: "blue", // Set your desired shadow color
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 300, // Adjust the shadow radius as needed
    shadowOpacity: 1,
    borderRadius: 25,
    backgroundColor: "transparent",
  },
});
