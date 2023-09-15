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
  width,
}) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: "3%",
      paddingHorizontal: "3%",
      paddingVertical: "3%",
      justifyContent: "center",
      alignItems: "center",
      width: "23%",
    },
    icon: {
      width: width / 45,
      height: width / 45,
      marginBottom: "5%",
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
  return (
    <View style={[styles.container, { ...style }]}>
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
