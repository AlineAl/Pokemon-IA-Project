import React, { useState, useRef } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./LaunchesPages.styles";
import Navbar from "../Navbar/Navbar";
import { useQuery } from "@apollo/client";
import GET_LAUNCHES from "../../graphql/Launches";
import { useMediaQuery } from "native-base";

const windowWidth = Dimensions.get("window").width;

const LaunchesPages = () => {
  const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
  let flatListRef = useRef<FlatList | null>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTabletDevice] = useMediaQuery({
    minWidth: 768,
  });
  const [isDesktopDevice] = useMediaQuery({
    minWidth: 1440,
  });
  const [isMobileDevice] = useMediaQuery({
    minWidth: 320,
  });

  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };

  const { data, loading } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 6,
      offset: 13,
    },
  });

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={
        isTabletDevice
          ? require("../../../assets/technology/background-technology-tablet.jpg")
          : require("../../../assets/technology/background-technology-mobile.jpg")
      }
    >
      <ScrollView>
        <Navbar />
        <View
          style={
            (isDesktopDevice && styles.displayTitleLaunchDesktop) ||
            (isTabletDevice && styles.displayTitleLaunchTablet) ||
            (isMobileDevice && styles.displayTitleLaunch)
          }
        >
          <Text
            style={isDesktopDevice ? styles.numberTitleLaunchDesktop : styles.numberTitleLaunch}
          >
            03
          </Text>
          <Text style={isDesktopDevice ? styles.titleLaunchDesktop : styles.titleLaunch}>
            space launch 101
          </Text>
        </View>

        {loading ? (
          <View></View>
        ) : (
          <FlatList
            data={data.launches}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={(ref) => {
              flatListRef.current = ref;
            }}
            viewabilityConfig={viewConfigRef}
            onViewableItemsChanged={onViewRef.current}
            getItemLayout={(data, index) => {
              return { length: windowWidth, offset: windowWidth * index, index };
            }}
            renderItem={({ item }) => (
              <View
                key={item.id}
                style={isDesktopDevice ? styles.contentBodyDesktop : styles.contentBody}
              >
                <View>
                  <Image
                    style={
                      (isDesktopDevice && styles.imageLauncheDesktop) ||
                      (isTabletDevice && styles.imageLauncheTablet) ||
                      (isMobileDevice && styles.imageLaunche)
                    }
                    source={{ uri: `${item.links.flickr_images[2]}` }}
                  />
                </View>
                <View style={isDesktopDevice && styles.infosLaunchesDesktop}>
                  <Text style={isTabletDevice ? styles.terminoTextTablet : styles.terminoText}>
                    the terminology...
                  </Text>
                  <Text
                    style={
                      (isDesktopDevice && styles.titleLauncheDesktop) ||
                      (isTabletDevice && styles.titleLauncheTablet) ||
                      (isMobileDevice && styles.titleLaunche)
                    }
                  >
                    {item.mission_name}
                  </Text>
                  <Text
                    style={
                      isDesktopDevice ? styles.descriptionLauncheDesktop : styles.descriptionLaunche
                    }
                  >
                    {item.details}
                  </Text>
                </View>
              </View>
            )}
          />
        )}

        <View
          style={
            (isDesktopDevice && styles.flexCarouselDesktop) ||
            (isTabletDevice && styles.flexCarouselTablet) ||
            (isMobileDevice && styles.flexCarousel)
          }
        >
          {loading ? (
            <View></View>
          ) : (
            data.launches.map((_: any, index: number) => {
              return (
                <TouchableOpacity key={index.toString()} onPress={() => scrollToIndex(index)}>
                  <View
                    style={
                      index === currentIndex
                        ? isDesktopDevice
                          ? styles.hoverViewDotNumberDesktop
                          : styles.hoverViewDotNumber
                        : isDesktopDevice
                        ? styles.viewDotNumberDesktop
                        : styles.viewDotNumber
                    }
                  >
                    <Text
                      style={
                        index === currentIndex
                          ? isDesktopDevice
                            ? styles.hoverDotNumberDesktop
                            : styles.hoverDotNumber
                          : isDesktopDevice
                          ? styles.dotNumbersDesktop
                          : styles.dotNumbers
                      }
                    >
                      {index + 1}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LaunchesPages;
