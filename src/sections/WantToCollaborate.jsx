import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";
import { Link } from "../components/Link";

const WantToCollaborate = ({ width, height }) => {
  //536 335

  const imageWidth = width / 2.3;

  const ratio = 536 / 335;

  const imageHeight = imageWidth / ratio;

  const styles = StyleSheet.create({
    container: {
      // width: "100%",
      // height: height > width ? height / 2.5 : height / 1.5,
      backgroundColor: colors.darkViolet,
      paddingVertical: "5%",
    },
    header: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      paddingVertical: "3%",
    },
    main: {
      flexDirection: "row",
      flex: 1,
    },
    title: {
      marginTop: "3%",
      // position: "absolute",
      width: "100%",
    },
    titleText: {
      fontFamily: fonts.bold,
      fontSize: width / 22,
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
      lineHeight: width / 35,
    },
    imageWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      shadowColor: colors.shadowRed,
      shadowOpacity: 1,
      shadowRadius: 150,
    },
    icon: {
      width: width / 35,
      height: width / 35,
    },
    linkText: {
      fontFamily: fonts.medium,
      color: colors.lightViolet,
      fontSize: width / 60,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Want to collaborate?</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/want_to_collaborate_image.png")}
            style={[styles.image, { width: imageWidth, height: imageHeight }]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={[styles.description, { marginBottom: "3%" }]}>
            Getting started is straightforward. Contact our team to discuss your
            specific needs and requirements. We'll provide you with all the
            necessary information, documentation, and support to seamlessly
            integrate live streaming with real casino machines into your
            platform.
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("../../assets/mail_icon.png")}
                style={[styles.icon, { marginRight: 15 }]}
                resizeMode="contain"
              />
              <Text style={styles.description}>Send us a message:</Text>
            </View>
            <Link width={width} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WantToCollaborate;
