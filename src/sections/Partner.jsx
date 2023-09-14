import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { width, height, colors, fonts } from "../constants";

const Partner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Your reliable partner</Text>
      </View>
      <View style={styles.title}>
        <Text style={[styles.label, { textAlign: "center" }]}>
          Slot Stream represents a pioneering concept within the realm of
          igaming.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
          marginTop: "3%",
        }}
      >
        <View style={styles.item}>
          <View style={styles.circle}>
            <Image
              source={require("../../assets/monitor_icon.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>
            It serves as a web-based application that grants users the
            opportunity to engage in online play on authentic slot machines.
          </Text>
        </View>
        <Image
          source={require("../../assets/arc.png")}
          style={styles.arc}
          resizeMode="contain"
        />
        <View style={styles.item}>
          <View style={styles.circle}>
            <Image
              source={require("../../assets/videocamera_icon.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>
            The live streaming ensures that the casino machines are in constant
            operation, guaranteeing fairness and transparency in every play.
          </Text>
        </View>
        <Image
          source={require("../../assets/arc.png")}
          style={[
            styles.arc,
            {
              transform: [
                {
                  scaleY: -1,
                },
              ],
              marginTop: "5%",
            },
          ]}
          resizeMode="contain"
        />
        <View style={styles.item}>
          <View style={styles.circle}>
            <Image
              source={require("../../assets/star_icon.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>
            This versatility attracts a broader audience, catering to a wider
            range of interests.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue1,
    paddingHorizontal: "10%",
    paddingBottom: "5%",
  },

  title: {
    marginTop: height > width ? "8%" : "4%",
    width: "100%",
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: width / 25,
    color: colors.white,
    marginBottom: "1%",
    textAlign: "center",
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: width / 60,
    color: colors.lightGrey2,
    textAlign: "center",
    // marginTop: "6%",
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: width / 60,
    color: colors.white,
    textAlign: "center",
    marginTop: "15%",
    width: width / 4,
  },
  circle: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.lightViolet,
  },
  icon: {
    width: 40,
    height: 40,
  },
  item: {
    width: width / 8,
    alignItems: "center",
  },
  arc: {
    width: width / 6,
    height: 50,
  },
});

export default Partner;
