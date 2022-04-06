import React from 'react';
import { Text, ImageBackground, Pressable, View } from 'react-native';
import Navbar from '../Navbar/Navbar';
import { Bellefair_400Regular } from '@expo-google-fonts/bellefair';
import { Barlow_400Regular } from '@expo-google-fonts/barlow'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import styles from './Home.styles';
import PlanetPages from '../PlanetPages/PlanetPages';

const Home = ({ navigation: { navigate }}:any) => {
    let [fontsLoaded] = useFonts({
        Bellefair_400Regular,
        Barlow_400Regular
    });

    if(!fontsLoaded) {
        return <AppLoading />
    }
    
    return(
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/home/background-home-mobile.jpg')}>
            <Navbar />
            <Text style={styles.textHome}>
                so, you want to travel to 
            </Text>
            <Text style={styles.textSpace}>
                space
            </Text>
            <Text style={styles.textDescription}>
                Let's face it; if you want go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience !
            </Text>
            <Pressable style={{zIndex: -1}} onPress={() => {
                navigate("PlanetPages")
            }}>
                <View style={styles.contentPressable}>
                    <Text style={styles.textPressable}>Explore</Text>
                </View>
            </Pressable>
        </ImageBackground>
    )
}

export default Home;

