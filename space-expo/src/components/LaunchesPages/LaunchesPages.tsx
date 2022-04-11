import React, { useState, useRef } from "react";
import { ImageBackground, ScrollView, View, Text, FlatList, Image, Dimensions, TouchableOpacity } from "react-native";
import styles from "./LaunchesPages.styles";
import Navbar from "../Navbar/Navbar";
import { useQuery } from "@apollo/client";
import GET_LAUNCHES from "../../graphql/Launches";

const windowWidth = Dimensions.get('window').width;

const LaunchesPages = () => {
    const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
    let flatListRef = useRef<FlatList | null>();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const onViewRef = useRef(({ changed }: { changed: any}) => {
        if(changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });

    const scrollToIndex = (index:number) => {
        flatListRef.current?.scrollToIndex({animated: true, index: index});
    }

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
                    <FlatList
                        data={data.launches}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ref={(ref) =>{
                            flatListRef.current = ref;
                        }}
                        viewabilityConfig={viewConfigRef}
                        onViewableItemsChanged={onViewRef.current}
                        getItemLayout={(data, index) => {
                            return { length: windowWidth, offset: windowWidth * index, index };
                        }}
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
                    
                    <View style={styles.flexCarousel} >
                        { loading ? <View></View> :
                            data.launches.map((_:any, index:number) => {
                                return <TouchableOpacity
                                    key={index.toString()}
                                    onPress={() =>
                                        scrollToIndex(index)
                                    }
                                >
                                    <View style={index === currentIndex ? styles.hoverViewDotNumber : styles.viewDotNumber}>
                                        <Text style={index === currentIndex ? styles.hoverDotNumber : styles.dotNumbers}>{index + 1}</Text>    
                                    </View>
                                    
                                </TouchableOpacity>
                            })
                        }
                    </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default LaunchesPages;