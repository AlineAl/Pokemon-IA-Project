import React from "react";
import { ImageBackground, ScrollView, View, Text, FlatList, Image } from "react-native";
import styles from "./LaunchesPages.styles";
import Navbar from "../Navbar/Navbar";
import { useQuery } from "@apollo/client";
import GET_LAUNCHES from "../../graphql/Launches";
import SwiperFlatList from "react-native-swiper-flatlist";

const LaunchesPages = () => {

    const {data, loading} = useQuery(GET_LAUNCHES, {
        variables: {
            limit: 6,
            offset: 13
        }
    });
    console.log(data)

    return(
        <ImageBackground style={styles.imageBackground} source={(require('../../../assets/technology/background-technology-mobile.jpg'))}>
            <ScrollView>
                <Navbar />
                <View style={styles.displayTitleLaunch}>
                    <Text style={styles.numberTitleLaunch}>03</Text>
                    <Text style={styles.titleLaunch}>space launch 101</Text>
                </View>

                {loading ? <View></View> : 
                    <SwiperFlatList
                        data={data.launches}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        showPagination
                        renderItem={({ item }) =>
                            <View key={item.id} style={styles.contentBody}>
                                <Image style={styles.imageLaunche} source={{uri: `${item.links.flickr_images[2]}`}}/>
                                <Text style={styles.terminoText}>the terminology...</Text>
                                <Text style={styles.titleLaunche}>{item.mission_name}</Text>
                                <Text style={styles.descriptionLaunche}>{item.details}</Text>
                            </View>
                        }
                    />
                }
            </ScrollView>
        </ImageBackground>
    )
}

export default LaunchesPages;