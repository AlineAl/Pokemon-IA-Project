import React, { useRef, useState } from "react";
import { ScrollView, ImageBackground, View, Text, Image, TouchableOpacity } from "react-native";
import Navbar from "../Navbar/Navbar";
import styles from "../CrewPages/CrewPages.styles";
import { Bellefair_400Regular } from "@expo-google-fonts/bellefair";
import { Barlow_400Regular } from "@expo-google-fonts/barlow";
import { BarlowCondensed_400Regular } from "@expo-google-fonts/barlow-condensed";
import { useFonts } from "@expo-google-fonts/barlow";
import AppLoading from "expo-app-loading";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { useMediaQuery } from "native-base";

const carouselItemCrew = require("../../../crew.json");

interface CarouselItemsCrew {
  name: string;
  images: {
    webp: string;
  };
  role: string;
  bio: string;
}

const CrewPages = () => {
  let [fontsLoaded] = useFonts({
    Bellefair_400Regular,
    Barlow_400Regular,
    BarlowCondensed_400Regular,
  });
  const [isMobileDevice] = useMediaQuery({
    minWidth: 320,
  });
  const [isTabletDevice] = useMediaQuery({
    minWidth: 768,
  });
  const [isDesktopDevice] = useMediaQuery({
    minWidth: 1440,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem: React.FC<{ item: CarouselItemsCrew }> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View
          style={
            (isDesktopDevice && styles.displayDesktop) || (isTabletDevice && styles.displayTablet)
          }
        >
          <View style={isTabletDevice ? styles.divImageTablet : styles.divImage}>
            <Image
              resizeMode="stretch"
              style={
                (isDesktopDevice && styles.imagesCrewDesktop) ||
                (isTabletDevice && styles.imagesCrewTablet) ||
                (isMobileDevice && styles.imagesCrew)
              }
              source={require(`../../../assets/crew/${item.images.webp}`)}
            />
          </View>

          <View
            style={
              (isDesktopDevice && styles.bodyTextCrewDesktop) ||
              (isTabletDevice && styles.bodyTextCrewTablet) ||
              (isMobileDevice && styles.bodyTextCrew)
            }
          >
            <Text
              style={
                (isDesktopDevice && styles.roleTextDesktop) ||
                (isTabletDevice && styles.roleTextTablet) ||
                (isMobileDevice && styles.roleText)
              }
            >
              {item.role}
            </Text>
            <Text
              style={
                (isDesktopDevice && styles.nameTextDesktop) ||
                (isTabletDevice && styles.nameTextTablet) ||
                (isMobileDevice && styles.nameText)
              }
            >
              {item.name}
            </Text>
            <Text style={isDesktopDevice ? styles.bioTextDesktop : styles.bioText}>{item.bio}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={
        (isDesktopDevice && require("../../../assets/crew/background-crew-desktop.jpg")) ||
        (isTabletDevice && require("../../../assets/crew/background-crew-tablet.jpg")) ||
        (isMobileDevice && require("../../../assets/crew/background-crew-mobile.jpg"))
      }
    >
      <ScrollView>
        <Navbar />
        <View style={{ position: "relative", zIndex: -5 }}>
          <Text
            style={
              (isDesktopDevice && styles.titleCrewDesktop) ||
              (isTabletDevice && styles.titleCrewTablet) ||
              (isMobileDevice && styles.titleCrew)
            }
          >
            <span style={{ color: "#4D5057", fontWeight: "bold" }}>02</span> meet your crew
          </Text>
        </View>

        <SwiperFlatList
          data={carouselItemCrew}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          showPagination
          paginationStyle={
            isDesktopDevice
              ? { position: "absolute", bottom: 40, left: "11rem" }
              : { position: "absolute", top: 396 }
          }
          paginationStyleItem={
            isDesktopDevice ? { width: 15, height: 15 } : { width: 10, height: 10 }
          }
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default CrewPages;
