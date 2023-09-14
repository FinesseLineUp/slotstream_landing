import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";

const HowItWorks = () => {
  const videoWidth = width / 5;

  //width="1206" height="749"

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>How it works</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.videoWrapper}>
          <ImageBackground
            source={require("../../assets/casino_image.png")}
            style={styles.videoBackground}
          >
            <View style={styles.videoBorder}>
              <View style={styles.video}>
                <iframe
                  width={videoWidth}
                  height={videoWidth * 1.75}
                  src="https://www.youtube.com/embed/NeuI4vBl9n4"
                  // title="sliz"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.descriptionWrapper}>
          <View>
            <View
              style={{
                position: "absolute",
                left: 19,
                top: 29,
                backgroundColor: colors.lightViolet,
                width: 2,
                height: "100%",
              }}
            ></View>
            <Item text="Go to the app from the selected gaming platform" />
            <Item text="Choose a bid" />
            <Item text="Book the real machine" />
            <Item text="Start a game!" />
          </View>
        </View>
      </View>
    </View>
  );
};

const Item = ({ text }) => {
  return (
    <View style={styles.descriptionItem}>
      <Image
        source={require("../../assets/check_circle_image.png")}
        style={styles.checkCircle}
        resizeMode="contain"
      />
      <Text style={styles.descriptionText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height > width ? height / 2.5 : height,
    backgroundColor: colors.darkBlue2,
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
    marginTop: height > width ? "8%" : "4%",
    position: "absolute",
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
  },
  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: width / 64,
    color: colors.white,
  },
  descriptionItem: {
    height: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  videoWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  videoBorder: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "grey",
  },
  video: {
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "black",
    shadowColor: colors.shadowBlue,
    shadowRadius: 150,
    shadowOpacity: 1,
  },
  videoBackground: {
    width: width / 2,
    heoght: height / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  // image: {
  //   width: width / 1.85,
  //   height: height * 2,
  // },
  checkCircle: {
    width: 40,
    height: 40,
    marginRight: "3%",
  },
  playButton: {
    flex: 1,
    position: "absolute",
    backgroundColor: "red",
    // width: 100,
    // height: 100,
  },
});

export default HowItWorks;
