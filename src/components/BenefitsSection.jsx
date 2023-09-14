import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  LayoutAnimation,
} from "react-native";
import React, { useState } from "react";
import { colors, fonts, width } from "../constants";

export const BenefitsSection = ({ title, children }) => {
  const [opened, setOpened] = useState(true);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.title}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setOpened((state) => !state);
        }}
      >
        <Text style={styles.titleText}>{title}</Text>
        <Image
          source={require("../../assets/small_arrow_icon.png")}
          style={[
            styles.icon,
            {
              transform: [
                {
                  rotate: opened ? "180deg" : "0deg",
                },
              ],
            },
          ]}
        />
      </Pressable>
      {opened ? children : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: colors.lightGrey3,
    borderTopWidth: 1,
    borderBottomColor: colors.lightGrey3,
    borderBottomWidth: 1,
    paddingVertical: "1%",
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: width / 33,
    color: colors.white,
    textAlign: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
