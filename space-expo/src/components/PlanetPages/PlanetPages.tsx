import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Bellefair_400Regular } from "@expo-google-fonts/bellefair";
import { Barlow_400Regular } from "@expo-google-fonts/barlow";
import { BarlowCondensed_400Regular } from "@expo-google-fonts/barlow-condensed";
import { useFonts } from "@expo-google-fonts/barlow";
import AppLoading from "expo-app-loading";
import {
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./PlanetPages.styles";
import { useMediaQuery } from "native-base";

const carouselItem = require("../../../destinations.json");
interface CarouselItems {
  name: string;
  description: string;
  distance: string;
  travel: string;
  images: {
    webp: string;
  };
}

const PlanetPages = () => {
  const width = 2000;
  const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
  let flatListRef = useRef<FlatList<CarouselItems> | null>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: Dimensions.get("window").width });

  const [isTabletDevice] = useMediaQuery({
    minWidth: 768,
  });
  const [isDesktopDevice] = useMediaQuery({
    minWidth: 1440,
  });
  const [isMobileDevice] = useMediaQuery({
    minWidth: 320,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({ width: Dimensions.get("window").width });
    });
  }, []);

  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };

  let [fontsLoaded] = useFonts({
    Bellefair_400Regular,
    Barlow_400Regular,
    BarlowCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItems: React.FC<{ item: CarouselItems }> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={isDesktopDevice && styles.displayFlexDesktop}>
          <View>
            <Image
              style={isDesktopDevice ? styles.imagesPlanetDesktop : styles.imagesPlanet}
              source={require(`../../../assets/destination/${item.images.webp}`)}
            />
          </View>

          <View style={isDesktopDevice && styles.viewContent}>
            <View style={isDesktopDevice ? styles.contentBodyDesktop : styles.contentBody}>
              <Text
                style={
                  (isDesktopDevice && styles.namePlanetDesktop) ||
                  (isTabletDevice && styles.namePlanetTablet) ||
                  (isMobileDevice && styles.namePlanet)
                }
              >
                {item.name}
              </Text>
              <Text
                style={isDesktopDevice ? styles.textDescriptionDesktop : styles.textDescription}
              >
                {item.description}
              </Text>
            </View>

            <View
              style={
                (isDesktopDevice && styles.separateLineDesktop) ||
                (isTabletDevice && styles.separateLineTablet) ||
                (isMobileDevice && styles.separateLine)
              }
            />

            <View
              style={
                (isDesktopDevice && styles.contentInfosDesktop) ||
                (isTabletDevice && styles.contentInfosTablet) ||
                (isMobileDevice && styles.contentInfos)
              }
            >
              <View style={isTabletDevice && styles.marginContentTablet}>
                <Text style={styles.purpleTitle}>avg. distance</Text>
                <Text style={styles.textNum}>{item.distance}</Text>
              </View>
              <View>
                <Text style={styles.purpleTitle}>est. travel time</Text>
                <Text style={styles.textNum}>{item.travel}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={
        (isDesktopDevice &&
          require("../../../assets/destination/background-destination-desktop.jpg")) ||
        (isTabletDevice &&
          require("../../../assets/destination/background-destination-tablet.jpg")) ||
        (isMobileDevice && require("../../../assets/destination/background-destination-mobile.jpg"))
      }
    >
      <ScrollView>
        <Navbar />
        <View
          style={
            (isDesktopDevice && styles.displayTitleDestinationDesktop) ||
            (isTabletDevice && styles.displayTitleDestinationTablet) ||
            (isMobileDevice && styles.displayTitleDestination)
          }
        >
          <Text
            style={
              isDesktopDevice ? styles.numberTitleDestinationDesktop : styles.numberTitleDestination
            }
          >
            01
          </Text>
          <Text style={isDesktopDevice ? styles.titleDestinationDesktop : styles.titleDestination}>
            pick your destination
          </Text>
        </View>

        <View style={isDesktopDevice ? styles.listViewDesktop : styles.listView}>
          {carouselItem.map((item: any, index: number) => {
            return (
              <TouchableOpacity key={index.toString()} onPress={() => scrollToIndex(index)}>
                <Text style={index === currentIndex ? styles.hoverLinks : styles.linksPlanet}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <FlatList
          refreshing={true}
          data={carouselItem}
          renderItem={renderItems}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          getItemLayout={(_, index) => {
            return {
              length: isDesktopDevice ? width : dimensions.width,
              offset: isDesktopDevice ? width * index : dimensions.width * index,
              index,
            };
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewRef.current}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default PlanetPages;
