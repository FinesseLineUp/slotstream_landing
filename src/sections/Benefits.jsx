import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { width, height, colors, fonts } from "../constants";
import { IconWithDescription } from "../components/IconWithDescription";
import { BenefitsSection } from "../components/BenefitsSection";
import { BenefitsBlock } from "../components/BenefitsBlock";

const Benefits = ({ width, height }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      // height: height > width ? height / 2 : height,
      // justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.darkBlue2,
      paddingHorizontal: "10%",
      paddingBottom: "4%",
    },

    title: {
      marginTop: height > width ? "8%" : "4%",
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
    description: {
      fontFamily: fonts.regular,
      fontSize: width / 60,
      color: colors.white,
      // textAlign: "center",
    },
    border: {
      width: 1,
      height: width / 10,
      backgroundColor: colors.lightGrey3,
    },
    content: {
      flexDirection: "row",
      marginVertical: "3%",
    },
    block: {
      backgroundColor: colors.darkViolet,
      borderRadius: 10,
      paddingVertical: "3%",
      paddingHorizontal: "3%",
      marginBottom: width / 50,
      flex: 1,
    },
    iconWithDescription: {
      width: "30%",
      height: width / 10,
      marginVertical: "3%",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Staying at the forefront of innovation is essential
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={[styles.description, { textAlign: "center" }]}>
          Slot stream offer benefits for:
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconWithDescription
          icon="smartphone_icon.png"
          text="Gambling platforms"
          width={width}
          style={styles.iconWithDescription}
        />
        <View style={styles.border}></View>
        <IconWithDescription
          icon="handmoney_icon.png"
          text="Offline casino owners"
          width={width}
          style={styles.iconWithDescription}
        />
        <View style={styles.border}></View>
        <IconWithDescription
          icon="users_icon.png"
          text="Players"
          width={width}
          style={styles.iconWithDescription}
        />
      </View>
      <BenefitsSection title="Gambling platforms" width={width}>
        <View style={styles.content}>
          <View style={[styles.block, { marginRight: 15 }]}>
            <Text style={[styles.description, { marginBottom: 10 }]}>
              By harnessing the power of allowing users to play on real slot
              machines online, gambling platforms can create a more enjoyable
              and unique experience for their users.
            </Text>
            <Text style={styles.description}>
              Ultimately the pioneers can secure their position at the forefront
              of the online gambling industry.
            </Text>
          </View>
          <View
            style={[
              styles.block,
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginLeft: 15,
              },
            ]}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              }}
            >
              <IconWithDescription
                icon="crown_icon.png"
                text="Unique"
                width={width}
                style={{ flex: 1 }}
              />

              <IconWithDescription
                icon="quit_icon.png"
                text="Quick API integration"
                width={width}
                style={{ flex: 1 }}
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              }}
            >
              <IconWithDescription
                icon="magic_icon.png"
                text="Enjoyable"
                width={width}
                style={{ flex: 1 }}
              />

              <IconWithDescription
                icon="light_bulb_icon.png"
                text="Pioneering technology"
                width={width}
                style={{ flex: 1 }}
              />
            </View>
          </View>
        </View>
      </BenefitsSection>
      <BenefitsSection title="Offline casino owners" width={width}>
        <View style={styles.content}>
          <View
            style={{ flexDirection: "row", width: "100%", marginRight: 15 }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <BenefitsBlock
                text="Earn income not only from physical casino visitors but also from online players who access and play your machines remotely."
                icon="banknote_icon.png"
                width={width}
              />
              <BenefitsBlock
                text="Attract a broader and more diverse player base by offering both physical and online gaming options. This diversity can lead to increased player loyalty and a more resilient business model."
                icon="share_circle_icon.png"
                width={width}
              />
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 30,
              }}
            >
              <BenefitsBlock
                text="Increase brand recognition, attracting a global audience of potential players who may visit your casino to enjoy the full, immersive experience."
                icon="starfall_icon.png"
                width={width}
              />

              <BenefitsBlock
                text="Stay ahead of the competition by embracing the latest technology trends in the igaming industry."
                icon="graph_icon.png"
                width={width}
              />
            </View>
          </View>
        </View>
      </BenefitsSection>
      <BenefitsSection title="Players" width={width}>
        <View style={styles.content}>
          <View
            style={{ flexDirection: "row", width: "100%", marginRight: 15 }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <BenefitsBlock
                text="Enjoy your gaming experience and play on real slot machines online."
                icon="quit_icon.png"
                width={width}
              />

              <BenefitsBlock
                text="Play your favorite casino games from anywhere, at any time, without the need to use a physical casino."
                icon="quit_icon.png"
                width={width}
              />
            </View>
            <View
              style={{
                marginLeft: 30,
                flex: 1,
              }}
            >
              <BenefitsBlock
                text="The transparency of live-streaming ensures that the games are not rigged."
                icon="quit_icon.png"
                width={width}
              />
            </View>
          </View>
        </View>
      </BenefitsSection>
    </View>
  );
};

export default Benefits;
