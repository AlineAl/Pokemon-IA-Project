import React, { useState } from "react";
import { SafeAreaView, View, Image, Pressable, Text } from "react-native";
import { Link } from "@react-navigation/native";
import Modal from "react-native-modal";
import styles from "./Navbar.styles";
import { BlurView } from "expo-blur";
import { useRoute } from "@react-navigation/native";
import { useMediaQuery } from "native-base";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const route = useRoute();

  const navbarTablet = () => {
    const [isTabletDevice] = useMediaQuery({
      minWidth: 768,
    });
    const [isDesktopDevice] = useMediaQuery({
      minWidth: 1440,
    });

    if (isTabletDevice) {
      return (
        <View style={isDesktopDevice ? styles.NavMargin : styles.Nav}>
          <Link to={{ screen: "Home" }}>
            <Image
              style={styles.imageLogoTablet}
              source={require("../../../assets/shared/logo.svg")}
            />
          </Link>
          {isDesktopDevice && <View style={styles.separateLine}></View>}
          <BlurView
            intensity={50}
            tint={"dark"}
            style={isDesktopDevice ? styles.navDesktop : styles.navTablet}
          >
            <Link
              to={{ screen: "Home" }}
              style={
                route.name === "Home" ? styles.borderBottomTabletActive : styles.borderBottomTablet
              }
            >
              {isDesktopDevice ? (
                <Text style={styles.titleModalTablet}>
                  <span style={{ fontWeight: "bold" }}>00</span> home
                </Text>
              ) : (
                <Text style={styles.titleModalTablet}>home</Text>
              )}
            </Link>
            <Link
              to={{ screen: "PlanetPages" }}
              style={
                route.name === "PlanetPages"
                  ? styles.borderBottomTabletActive
                  : styles.borderBottomTablet
              }
            >
              {isDesktopDevice ? (
                <Text style={styles.titleModalTablet}>
                  <span style={{ fontWeight: "bold" }}>01</span> destination
                </Text>
              ) : (
                <Text style={styles.titleModalTablet}>destination</Text>
              )}
            </Link>
            <Link
              to={{ screen: "CrewPages" }}
              style={
                route.name === "CrewPages"
                  ? styles.borderBottomTabletActive
                  : styles.borderBottomTablet
              }
            >
              {isDesktopDevice ? (
                <Text style={styles.titleModalTablet}>
                  <span style={{ fontWeight: "bold" }}>02</span> crew
                </Text>
              ) : (
                <Text style={styles.titleModalTablet}>crew</Text>
              )}
            </Link>
            <Link
              to={{ screen: "LaunchesPages" }}
              style={
                route.name === "LaunchesPages"
                  ? styles.borderBottomTabletActive
                  : styles.borderBottomTablet
              }
            >
              {isDesktopDevice ? (
                <Text style={styles.titleModalTablet}>
                  <span style={{ fontWeight: "bold" }}>03</span> technology
                </Text>
              ) : (
                <Text style={styles.titleModalTablet}>technology</Text>
              )}
            </Link>
          </BlurView>
        </View>
      );
    } else {
      return (
        <View style={styles.Nav}>
          <Link to={{ screen: "Home" }}>
            <Image style={styles.imageLogo} source={require("../../../assets/shared/logo.svg")} />
          </Link>
          <Pressable
            onPress={() => {
              setOpenModal(!openModal);
            }}
          >
            <Image
              style={styles.imageHamburger}
              source={require("../../../assets/shared/icon-hamburger.svg")}
            />
          </Pressable>
        </View>
      );
    }
  };

  return (
    <SafeAreaView>
      {navbarTablet()}
      <Modal
        isVisible={openModal}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        style={styles.withoutMargin}
        backdropOpacity={0.04}
      >
        <BlurView tint={"dark"} intensity={40} style={styles.modalBarContainer}>
          <Pressable
            onPress={() => {
              setOpenModal(!openModal);
            }}
          >
            <Image
              style={styles.iconClose}
              source={require("../../../assets/shared/icon-close.svg")}
            />
          </Pressable>
          <View style={styles.contentModal}>
            <View style={styles.flexTitleModal}>
              <Link to={{ screen: "Home" }}>
                <Text style={styles.numberModal}>00</Text>
                <Text style={styles.titleModal}>home</Text>
              </Link>
            </View>
            <View style={styles.flexTitleModal}>
              <Link
                to={{ screen: "PlanetPages" }}
                onPress={() => {
                  setOpenModal(!openModal);
                }}
              >
                <Text style={styles.numberModal}>01</Text>
                <Text style={styles.titleModal}>destination</Text>
              </Link>
            </View>
            <View style={styles.flexTitleModal}>
              <Link
                to={{ screen: "CrewPages" }}
                onPress={() => {
                  setOpenModal(!openModal);
                }}
              >
                <Text style={styles.numberModal}>02</Text>
                <Text style={styles.titleModal}>crew</Text>
              </Link>
            </View>
            <View style={styles.flexTitleModal}>
              <Link
                to={{ screen: "LaunchesPages" }}
                onPress={() => {
                  setOpenModal(!openModal);
                }}
              >
                <Text style={styles.numberModal}>03</Text>
                <Text style={styles.titleModal}>technology</Text>
              </Link>
            </View>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
};

export default Navbar;
