import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";
import { IconWithDescription } from "../components/IconWithDescription";

const ExploreTheFeatures = ({ width, height }) => {
  const styles = StyleSheet.create({
    container: {
      // width: width,
      // height: height > width ? height / 3.6 : height / 1.8,
      backgroundColor: colors.darkViolet,
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      flexDirection: "row",
      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      marginTop: "3%",
      // position: "absolute",
      width: "100%",
    },
    titleText: {
      fontFamily: fonts.bold,
      fontSize: width / 25,
      color: colors.white,
      marginBottom: 30,
      textAlign: "center",
    },
    descriptionWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: "5%",
    },
    description: {
      fontFamily: fonts.regular,
      fontSize: width / 64,
      color: colors.white,
      lineHeight: width / 40,
    },
    imageWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: width / 1.85,
      height: height * 2,
    },
    border: {
      borderRightWidth: 1,
      borderColor: colors.lightGrey3,
    },
  });

  return (
    // <View style={styles.container}>
    <ImageBackground
      // source={require("../../assets/Explore the Features.png")}
      source={require("../../assets/rays_background1.png")}
      // source={{ uri: "../../assets/" }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>Explore the Features</Text>
      </View>
      <View style={styles.main}>
        <IconWithDescription
          icon="choose_icon.png"
          text="Сhoice of slot machine"
          style={styles.border}
          width={width}
        />
        <IconWithDescription
          icon="card_transfer_icon.png"
          text="Replenishment / withdrawal of funds from the slot machine"
          style={styles.border}
          width={width}
        />
        <IconWithDescription
          icon="broadcasting_icon.png"
          text="Broadcasting the image of a real machine in real time"
          style={styles.border}
          width={width}
        />
        <IconWithDescription
          icon="star_icon.png"
          text="Play a real slot machine 
          online and win!"
          // style={styles.border}
          width={width}
        />
      </View>
    </ImageBackground>
    // </View>
  );
};

export default ExploreTheFeatures;
