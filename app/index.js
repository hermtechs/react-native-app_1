import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack, useRouter } from "expo-router";

import styles from "../components/common/header/screenheader.style";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            justifyItems: "center",
            alignItems: "center",
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            );
          },
          headerTitle: "",
        }}
      />
      <ScrollView style={{ flex: 1, padding: SIZES.medium }}>
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
