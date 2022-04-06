import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from './PlanetPages.styles';

const carouselItem = require('../../../destinations.json');

const CustomPagination = () => {

    return(
        <View style={styles.listView}>
            {carouselItem.map((item: any, index: number) => {
                return(<TouchableOpacity
                    key={index.toString()}
                    style={styles.textDescription}
                >{item.name}</TouchableOpacity>)
            })}
        </View>
    )
}

export default CustomPagination;