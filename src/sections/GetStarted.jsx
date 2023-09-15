import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";
import { Link } from "../components/Link";

const GetStarted = ({ width, height }) => {
  //823 1038

  const imageWidth = width / 2;

  const ratio = 823 / 1038;

  const imageHeight = imageWidth / ratio;

  const styles = StyleSheet.create({
    container: {
      // width: "100%",
      height: height > width ? height / 2.5 : height / 1.5,
      backgroundColor: colors.darkBlue1,
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
    // title: {
    //   marginTop: "8%",
    // },
    titleText: {
      fontFamily: fonts.bold,
      fontSize: width / 22,
      color: colors.white,
      marginBottom: "6%",
      // marginBottom: 30,
      // textAlign: "center",
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
  });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.descriptionWrapper}>
          {/* <View style={styles.title}> */}
          <View>
            <Text style={styles.titleText}>Get started</Text>
            {/* </View> */}
            <Text style={styles.description}>
              Slot Stream integrates with SKS (central server in the studio with
              real slot machines) and the gaming platform.
            </Text>
            <Text style={styles.description}>
              Quick API integration allows adding a platform with minimal time
              and effort.
            </Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/get_started_image.png")}
            style={{ width: imageWidth, height: imageHeight }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default GetStarted;
