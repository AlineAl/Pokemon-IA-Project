import React, { useRef, useState } from "react";
import { ScrollView, ImageBackground, View, Text, FlatList, Image } from "react-native";
import Navbar from "../Navbar/Navbar";
import styles from "../CrewPages/CrewPages.styles";
import { Bellefair_400Regular } from '@expo-google-fonts/bellefair';
import { Barlow_400Regular } from '@expo-google-fonts/barlow';
import { BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import { useFonts } from "@expo-google-fonts/barlow";
import AppLoading from "expo-app-loading";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const carouselItemCrew = require('../../../crew.json');

interface CarouselItemsCrew {
    name: string;
    images: {
        webp: string;
    },
    role: string;
    bio: string;

}

const CrewPages = () => {
    let [fontsLoaded] = useFonts({
        Bellefair_400Regular,
        Barlow_400Regular,
        BarlowCondensed_400Regular
    });

    if(!fontsLoaded) {
        return <AppLoading />
    }

    const renderItem: React.FC<{item: CarouselItemsCrew}> = ({item}) => {
        return <View style={styles.contentBody}>

            <View style={styles.divImage}>
                <Image style={styles.imagesCrew} source={require(`../../../assets/crew/${item.images.webp}`)} />
            </View>

            <View style={styles.bodyTextCrew}>
                <Text style={styles.roleText}>{item.role}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.bioText}>{item.bio}</Text>
            </View>
        </View>
    }

    return(
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/crew/background-crew-mobile.jpg')}>
            <ScrollView>
                <Navbar />
                <View style={styles.displayTitleCrew}>
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
                    onPaginationSelectedIndex={() => {}}
                    paginationStyle={{position: "absolute", top: 408}}
                />
            </ScrollView>
        </ImageBackground>
    )
}

export default CrewPages;