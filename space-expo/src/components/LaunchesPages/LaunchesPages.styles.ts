import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    imageBackground: {
        width: "100%",
        height: "100%"
    },
    displayTitleLaunch: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "1.5rem",
    },
    numberTitleLaunch: {
        color: "#4D5057",
        fontWeight: "bold",
        fontFamily: "BarlowCondensed_400Regular",
        marginRight: "1rem",
        fontSize: 16
    },
    titleLaunch: {
        color: "#FFFFFF",
        fontFamily: "BarlowCondensed_400Regular",
        textTransform: "uppercase",
        fontSize: 16,
        letterSpacing: 2.7
    },
    contentBody: {
        width: windowWidth,
        marginTop: "2rem",
        textAlign: "center"
    },
    imageLaunche: {
        width: '100%',
        height: 170,
        resizeMode: 'cover'
    },
    terminoText: {
        textTransform: "uppercase",
        color: "#D0D6F9",
        fontFamily: "BarlowCondensed_400Regular",
        fontSize: 14,
        marginTop: "2rem",
        letterSpacing: 2.36
    },
    titleLaunche: {
        textTransform: "uppercase",
        color: "#FFFFFF",
        fontFamily: "Bellefair_400Regular",
        fontSize: 24,
        marginTop: "0.5rem"
    },
    descriptionLaunche: {
        marginTop: "1rem",
        fontFamily: "Barlow_400Regular",
        fontSize: 15,
        lineHeight: 22,
        color: "#D0D6F9",
        marginHorizontal: "1rem"
    }
})

export default styles;