import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    displayTitleCrew: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "1.5rem",
        marginBottom: "1.5rem"
    },
    numberTitleCrew: {
        color: "#4D5057",
        fontWeight: "bold",
        fontFamily: "BarlowCondensed_400Regular",
        marginRight: "1rem",
        fontSize: 16
    },
    titleCrew: {
        color: "#FFFFFF",
        fontFamily: "BarlowCondensed_400Regular",
        textTransform: "uppercase",
        fontSize: 16,
        letterSpacing: 2.7
    },
    divImage: {
        borderBottomColor: "#383B4B",
        borderBottomWidth: 1,
        width: 327,
        margin: "auto"
    },
    imagesCrew: {
        width: 177.12,
        height: 250,
        margin: 'auto'
    },
    contentBody: {
        width: windowWidth
    },
    bodyTextCrew: {
        textAlign: "center",
        marginTop: "3.5rem"
    },
    roleText: {
        color: "#FFFFFF",
        fontFamily: "Bellefair_400Regular",
        fontSize: 16,
        textTransform: "uppercase",
        opacity: 0.5
    },
    nameText: {
        color: "#FFFFFF",
        fontFamily: "Bellefair_400Regular",
        fontSize: 24,
        textTransform: "uppercase",
        marginTop: "0.5rem"
    },
    bioText: {
        color: "#D0D6F9",
        fontFamily: "Barlow_400Regular",
        fontSize: 15,
        marginTop: "1rem",
        lineHeight: 22,
        marginHorizontal: "1rem"
    }
})

export default styles;