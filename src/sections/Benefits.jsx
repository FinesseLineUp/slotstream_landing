import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { width, height, colors, fonts } from "../constants";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { IconWithDescription } from "../components/IconWithDescription";
import { BenefitsSection } from "../components/BenefitsSection";
import { BenefitsBlock } from "../components/BenefitsBlock";

const Benefits = () => {
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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconWithDescription
          icon="choose_icon.png"
          text="Сhoice of slot machine"
        />
        <View style={styles.border}></View>
        <IconWithDescription
          icon="card_transfer_icon.png"
          text="Replenishment / withdrawal of funds from the slot machine"
        />
        <View style={styles.border}></View>
        <IconWithDescription
          icon="broadcasting_icon.png"
          text="Broadcasting the image of a real machine in real time"
        />
      </View>
      <BenefitsSection title="Gambling platforms">
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
              <IconWithDescription icon="crown_icon.png" text="Unique" />

              <IconWithDescription
                icon="quit_icon.png"
                text="Quick API integration"
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              }}
            >
              <IconWithDescription icon="magic_icon.png" text="Enjoyable" />

              <IconWithDescription
                icon="light_bulb_icon.png"
                text="Pioneering technology"
              />
            </View>
          </View>
        </View>
      </BenefitsSection>
      <BenefitsSection title="Offline casino owners">
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
              />
              <BenefitsBlock
                text="Attract a broader and more diverse player base by offering both physical and online gaming options. This diversity can lead to increased player loyalty and a more resilient business model."
                icon="share_circle_icon.png"
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
              />

              <BenefitsBlock
                text="Stay ahead of the competition by embracing the latest technology trends in the igaming industry."
                icon="graph_icon.png"
              />
            </View>
          </View>
        </View>
      </BenefitsSection>
      <BenefitsSection title="Players">
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
              />

              <BenefitsBlock
                text="Play your favorite casino games from anywhere, at any time, without the need to use a physical casino."
                icon="quit_icon.png"
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
              />
            </View>
          </View>
        </View>
      </BenefitsSection>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: height > width ? height / 2 : height,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkBlue1,
    paddingHorizontal: "10%",
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
    height: 120,
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
    marginBottom: 30,
    flex: 1,
  },
});

export default Benefits;
