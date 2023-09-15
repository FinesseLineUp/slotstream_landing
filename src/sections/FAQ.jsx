import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { width, height, colors, fonts } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const FAQ = ({ width, height }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.darkBlue1,
      paddingHorizontal: "10%",
      paddingBottom: "6%",
    },
    itemWrapper: {
      flexDirection: "row",
      paddingVertical: "2%",
      backgroundColor: colors.darkViolet,
    },
    title: {
      marginTop: height > width ? "8%" : "4%",
      width: "100%",
      marginBottom: "2%",
    },
    titleText: {
      fontFamily: fonts.bold,
      fontSize: width / 25,
      color: colors.white,
      marginBottom: "1%",
      textAlign: "center",
    },
    icon: {
      width: width / 25,
      height: width / 25,
    },
    number: {
      fontFamily: fonts.bold,
      color: colors.lightGrey3,
      fontSize: width / 27,
    },
    itemTitle: {
      fontFamily: fonts.medium,
      fontSize: width / 35,
      color: colors.white,
    },
    itemText: {
      fontFamily: fonts.regular,
      fontSize: width / 77,
      color: colors.lightGrey1,
      marginTop: "2%",
    },
  });

  const Item = ({ title, text, number }) => {
    const [isOpened, setIsOpened] = useState(false);

    const wrapperStyles = {
      borderTopRightRadius: number === "01" ? 10 : 0,
      borderTopLeftRadius: number === "01" ? 10 : 0,
      borderBottomLeftRadius: number === "05" ? 10 : 0,
      borderBottomRightRadius: number === "05" ? 10 : 0,
      borderColor: colors.grey,
      borderTopWidth: number !== "01" ? 1 : 0,
    };

    return isOpened ? (
      <LinearGradient
        style={[styles.itemWrapper, wrapperStyles]}
        colors={["rgba(107, 98, 255, 1)", "rgba(54, 45, 198, 1)"]}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.number}>{number}</Text>
        </View>
        <View style={{ flex: 6, justifyContent: "center" }}>
          <View style={{}}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemText}>{text}</Text>
          </View>
        </View>

        <Pressable
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            setIsOpened((state) => !state);
          }}
        >
          <Image
            source={require("../../assets/xmark.png")}
            style={styles.icon}
          />
        </Pressable>
      </LinearGradient>
    ) : (
      <View style={[styles.itemWrapper, wrapperStyles]}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.number}>{number}</Text>
        </View>
        <View style={{ flex: 6, justifyContent: "center" }}>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
        <Pressable
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            setIsOpened((state) => !state);
          }}
        >
          <Image
            source={require("../../assets/plus.png")}
            style={styles.icon}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>FAQ</Text>
      </View>
      <View style={styles.main}>
        <Item
          number="01"
          title="Are the casino machines real?"
          text="Sure! The SaaS product we offer is a comprehensive solution that allows gambling platforms to integrate live streaming from real casino machines into their online offerings. This means players can access and interact with classic casino games in real-time via the internet."
        />
        <Item
          number="02"
          title="How does live streaming with real casino machines work?"
          text="Live streaming with real casino machines involves setting up cameras and audio equipment in a physical casino environment. The live feed from these machines is then transmitted over the internet to the app, where users can interact with the gameplay. It's like having a virtual seat at a real casino table or slot machine."
        />
        <Item
          number="03"
          title="Is the live streaming fair and transparent for players?"
          text="Absolutely. One of the key advantages of this SaaS product is its ability to provide complete transparency."
        />
        <Item
          number="04"
          title="How can gambling platforms benefit from integrating with the Slot Stream?"
          text="The pioneers can secure their position at the forefront of the online gambling industry. 
          Integrating live streaming with real casino machines can increase user engagement, improve authenticity and the potential for higher revenues through player interaction and monetization opportunities."
        />
        <Item
          number="05"
          title="What results can gambling platforms expect after integrating with the Slot Stream?"
          text="It can transform the online gambling experience, attracting a broader audience and setting the platform apart from competitors."
        />
      </View>
    </View>
  );
};

export default FAQ;
