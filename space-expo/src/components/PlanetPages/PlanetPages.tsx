import React, { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Bellefair_400Regular } from '@expo-google-fonts/bellefair';
import { Barlow_400Regular } from '@expo-google-fonts/barlow';
import { BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';
import { useFonts } from "@expo-google-fonts/barlow";
import AppLoading from "expo-app-loading";
import { Text, View, ImageBackground, Image, FlatList, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import styles from './PlanetPages.styles';

const carouselItem = require('../../../destinations.json');
const windowWidth = Dimensions.get('window').width;
interface CarouselItems {
    name: string;
    description: string;
    distance: string;
    travel: string;
    images: {
        webp: string;
    }
}

const PlanetPages = () => {
    const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
    let flatListRef = useRef<FlatList<CarouselItems> | null>();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const onViewRef = useRef(({ changed }: { changed: any}) => {
        if(changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });

    const scrollToIndex = (index:number) => {
        flatListRef.current?.scrollToIndex({animated: true, index: index});
    }

    let [fontsLoaded] = useFonts({
        Bellefair_400Regular,
        Barlow_400Regular,
        BarlowCondensed_400Regular
    });

    if(!fontsLoaded) {
        return <AppLoading />
    }

    const renderItems: React.FC<{item: CarouselItems}> = ({ item }) => {
        return <TouchableOpacity>
            <Image style={styles.imagesPlanet} source={require(`../../../assets/destination/${item.images.webp}`)} />

            <View style={styles.contentBody}>
                <Text style={styles.namePlanet}>{item.name}</Text>
                <Text style={styles.textDescription}>{item.description}</Text>
            </View>

            <View style={styles.separateLine} />

            <View style={styles.contentInfos}>
                <Text style={styles.purpleTitle}>avg. distance</Text>
                <Text style={styles.textNum}>{item.distance}</Text>
                <Text style={styles.purpleTitle}>est. travel time</Text>
                <Text style={styles.textNum}>{item.travel}</Text>
            </View>
        </TouchableOpacity>
    }

    return(
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/destination/background-destination-mobile.jpg')}>
            <ScrollView>
                <Navbar />
                <View style={styles.displayTitleDestination}>
                    <Text style={styles.numberTitleDestination}>01</Text>
                    <Text style={styles.titleDestination}>pick your destination</Text>
                </View>

                <View style={styles.listView}>
                    {carouselItem.map((item: any, index: number) => {
                        return(<TouchableOpacity
                            key={index.toString()}
                            onPress={() =>
                                scrollToIndex(index)
                            }  
                        >
                            <Text style={index === currentIndex ? styles.hoverLinks : styles.linksPlanet}>{item.name}</Text>
                        </TouchableOpacity>)
                    })}
                </View>
                
                <FlatList 
                    data={carouselItem}
                    renderItem={renderItems}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    getItemLayout={(data, index) => {
                        return { length: windowWidth, offset: windowWidth * index, index };
                    }}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    ref={(ref) =>{
                        flatListRef.current = ref;
                    }}
                    viewabilityConfig={viewConfigRef}
                    onViewableItemsChanged={onViewRef.current}
                />
            </ScrollView>
        </ImageBackground>
    )
}

export default PlanetPages;
