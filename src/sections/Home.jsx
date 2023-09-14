import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Navigation />
      </View>
      <View style={styles.main}>
        <View
          style={{
            flex: 1,
            // width: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Welcome to Slot Stream</Text>
          <Text style={styles.description}>
            Slot Stream is an innovative approach in the igaming industry. It's
            a web application allowing users to play on real slot machines
            online.
          </Text>
        </View>
        <View
          style={{
            // width: "50%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/home_image.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height > width ? height / 2 : height,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.darkBlue1,
    paddingHorizontal: "10%",
  },
  header: {
    // position: "absolute",
    // top: 0,
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-between",
    paddingVertical: "3%",
    // paddingHorizontal: "10%",
  },
  main: {
    flexDirection: "row",
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: width / 20,
    color: colors.white,
    marginBottom: 30,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: width / 60,
    color: colors.lightGrey2,
  },
  image: {
    width: width / 1.2,
    height: height,
  },
});

export default Home;
