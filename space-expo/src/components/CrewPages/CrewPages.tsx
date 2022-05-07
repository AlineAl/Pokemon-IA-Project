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
import { useMediaQuery } from "react-responsive";

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
  const isTabletDevice = useMediaQuery({
    minDeviceWidth: 768,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem: React.FC<{ item: CarouselItemsCrew }> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={isTabletDevice && styles.displayTablet}>
          <View style={isTabletDevice ? styles.divImageTablet : styles.divImage}>
            <Image
              style={isTabletDevice ? styles.imagesCrewTablet : styles.imagesCrew}
              source={require(`../../../assets/crew/${item.images.webp}`)}
            />
          </View>

          <View style={isTabletDevice ? styles.bodyTextCrewTablet : styles.bodyTextCrew}>
            <Text style={isTabletDevice ? styles.roleTextTablet : styles.roleText}>
              {item.role}
            </Text>
            <Text style={isTabletDevice ? styles.nameTextTablet : styles.nameText}>
              {item.name}
            </Text>
            <Text style={styles.bioText}>{item.bio}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={
        isTabletDevice
          ? require("../../../assets/crew/background-crew-tablet.jpg")
          : require("../../../assets/crew/background-crew-mobile.jpg")
      }
    >
      <ScrollView>
        <Navbar />
        <View style={isTabletDevice ? styles.displayTitleCrewTablet : styles.displayTitleCrew}>
          <Text style={styles.numberTitleCrew}>02</Text>
          <Text style={styles.titleCrew}>meet your crew</Text>
        </View>

        <SwiperFlatList
          data={carouselItemCrew}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          showPagination
          paginationStyle={{ position: "absolute", top: 396 }}
          paginationStyleItem={{ width: 10, height: 10 }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default CrewPages;
