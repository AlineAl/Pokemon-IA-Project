import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    displayTitleDestination: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "1.5rem"
    },
    titleDestination: {
        color: "#FFFFFF",
        fontFamily: "BarlowCondensed_400Regular",
        textTransform: "uppercase",
        fontSize: 16,
        letterSpacing: 2.7
    },
    numberTitleDestination: {
        color: "#4D5057",
        fontWeight: "bold",
        fontFamily: "BarlowCondensed_400Regular",
        marginRight: "1rem",
        fontSize: 16
    },
    listView: {
        display: "flex",
        flexDirection: "row",
        color: "white",
        justifyContent: "center",
        position: "relative",
        top: 250,
        zIndex: 40
    },
    imagesPlanet: {
        width: 170,
        height: 170,
        marginTop: 28,
        margin: "auto"
    },
    namePlanet: {
        color: "white",
        textTransform: "uppercase",
        fontFamily: "Bellefair_400Regular",
        fontSize: 56,
        marginTop: "2.5rem"
    },
    contentBody: {
        width: windowWidth,
        textAlign: "center",
        marginTop: "2rem"
    },
    separateLine: {
        borderBottomColor: '#383B4B',
        borderBottomWidth: 1,
        width: 327,
        margin: "auto",
        marginTop: "2rem"
    },
    contentInfos: {
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: "3rem"
    },
    textDescription: {
        color: "#D0D6F9",
        fontFamily: "Barlow_400Regular",
        lineHeight: 22,
        fontSize: 15,
        marginHorizontal: "1rem",
        marginTop: "0.5rem"
    },
    purpleTitle: {
        color: "#D0D6F9",
        fontFamily: "BarlowCondensed_400Regular",
        fontSize: 14,
        letterSpacing: 2.36,
        marginBottom: 12,
        marginTop: "2rem"

    },
    textNum: {
        color: "white",
        fontFamily: "Bellefair_400Regular",
        fontSize: 28
    },
    linksPlanet: {
        color: "#D0D6F9",
        fontFamily: "BarlowCondensed_400Regular",
        fontSize: 14,
        letterSpacing: 2.36,
        textTransform: "uppercase",
        marginLeft: "1rem"
    },
    hoverLinks: {
        color: "#FFFFFF",
        fontFamily: "BarlowCondensed_400Regular",
        fontSize: 14,
        letterSpacing: 2.36,
        textTransform: "uppercase",
        marginLeft: "1rem",
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 3,
        paddingBottom: 6
    }
});

export default styles;