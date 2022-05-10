import React from "react";
import { Text, ImageBackground, Pressable, View } from "react-native";
import Navbar from "../Navbar/Navbar";
import { Bellefair_400Regular } from "@expo-google-fonts/bellefair";
import { Barlow_400Regular } from "@expo-google-fonts/barlow";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import styles from "./Home.styles";
import { useMediaQuery } from "react-responsive";

const Home = ({ navigation: { navigate } }: any) => {
  let [fontsLoaded] = useFonts({
    Bellefair_400Regular,
    Barlow_400Regular,
  });

  const isTabletDevice = useMediaQuery({
    minDeviceWidth: 768,
  });
  const isDesktopDevice = useMediaQuery({
    minDeviceWidth: 1440,
  });
  const isMobileDevice = useMediaQuery({
    minDeviceWidth: 320,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      style={isDesktopDevice ? styles.imageHeightBackground : styles.imageBackground}
      source={
        (isDesktopDevice && require("../../../assets/home/background-home-desktop.jpg")) ||
        (isTabletDevice && require("../../../assets/home/background-home-tablet.jpg")) ||
        (isMobileDevice && require("../../../assets/home/background-home-mobile.jpg"))
      }
    >
      <Navbar />
      <View style={isDesktopDevice && styles.displayFlexDesktop}>
        <View
          style={
            (isDesktopDevice && styles.bodyHomeDesktop) || (isTabletDevice && styles.bodyHomeTablet)
          }
        >
          <Text
            style={
              (isDesktopDevice && styles.textHomeDesktop) ||
              (isTabletDevice && styles.textHomeTablet) ||
              (isMobileDevice && styles.textHome)
            }
          >
            so, you want to travel to
          </Text>
          <Text
            style={
              (isDesktopDevice && styles.textSpaceDesktop) ||
              (isTabletDevice && styles.textSpaceTablet) ||
              (isMobileDevice && styles.textSpace)
            }
          >
            space
          </Text>
          <Text style={isDesktopDevice ? styles.textDescriptionDesktop : styles.textDescription}>
            Let's face it; if you want go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience !
          </Text>
        </View>
        <Pressable
          style={{ zIndex: -1 }}
          onPress={() => {
            navigate("PlanetPages");
          }}
        >
          <View
            style={
              (isDesktopDevice && styles.contentPressableDesktop) ||
              (isTabletDevice && styles.contentPressableTablet) ||
              (isMobileDevice && styles.contentPressable)
            }
          >
            <Text
              style={
                (isDesktopDevice && styles.textPressableDesktop) ||
                (isTabletDevice && styles.textPressableTablet) ||
                (isMobileDevice && styles.textPressable)
              }
            >
              Explore
            </Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Home;
