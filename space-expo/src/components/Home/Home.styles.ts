import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    textHome: {
        textTransform: "uppercase",
        color: "#D0D6F9",
        textAlign: "center",
        marginTop: "3rem",
        fontFamily: "Barlow_400Regular"
    },
    textSpace: {
        textTransform: "uppercase",
        color: "#FEFEFE",
        textAlign: "center",
        marginTop: "1rem",
        fontSize: 72,
        fontFamily: "Bellefair_400Regular"
    },
    textDescription: {
        color: "#D0D6F9",
        textAlign: "center",
        fontSize: 15,
        lineHeight: 24,
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        marginTop: "1rem",
        fontFamily: "Barlow_400Regular"
    },
    contentPressable: {
        width: 150,
        height: 150,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        display: "flex",
        marginTop: "4rem",
        margin: "auto",
        textAlign: "center"
    },
    textPressable: {
        color: "#0B0D17",
        fontSize: 20,
        textTransform: "uppercase",
        fontFamily: "Bellefair_400Regular",
        textAlign: "center",
        marginTop: "4rem"
    }
})