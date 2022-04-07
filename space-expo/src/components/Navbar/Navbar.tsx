import React, { useState }from "react";
import { SafeAreaView, View, Image, Pressable, Text } from "react-native";
import { Link } from '@react-navigation/native';
import Modal from 'react-native-modal';
import styles from './Navbar.styles';
import { BlurView } from 'expo-blur';

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
     
    return(
        <SafeAreaView>
            <View style={styles.Nav}>
                <Link to={{screen:'Home'}}>
                    <Image style={styles.imageLogo} source={require('../../../assets/shared/logo.svg')} />
                </Link>
                <Pressable
                    onPress={() => {
                        setOpenModal(!openModal);
                    }}
                >
                    <Image style={styles.imageHamburger} source={require('../../../assets/shared/icon-hamburger.svg')}/>
                </Pressable>
            </View>
            <Modal 
                isVisible={openModal}
                animationIn="slideInRight"
                animationOut="slideOutRight"
                style={styles.withoutMargin}
                backdropOpacity={0.04}
            >
                <BlurView intensity={100} style={styles.modalBarContainer}>
                    <Pressable
                        onPress={() => {
                            setOpenModal(!openModal);
                        }}
                    >
                        <Image style={styles.iconClose} source={require('../../../assets/shared/icon-close.svg')} />
                    </Pressable>
                    <View style={styles.contentModal}>
                        <View style={styles.flexTitleModal}>
                            <Link to={{screen:'Home'}}>
                                <Text style={styles.numberModal}>00</Text>
                                <Text style={styles.titleModal}>home</Text>
                            </Link>
                        </View>
                        <View style={styles.flexTitleModal}>
                            <Link to={{screen:'PlanetPages'}} onPress={() => {setOpenModal(!openModal)}}>
                                <Text style={styles.numberModal}>01</Text>
                                <Text style={styles.titleModal}>destination</Text>
                            </Link>
                        </View>
                        <View style={styles.flexTitleModal}>
                            <Link to={{screen:'CrewPages'}} onPress={() => {setOpenModal(!openModal)}}>
                                <Text style={styles.numberModal}>02</Text>
                                <Text style={styles.titleModal}>crew</Text>
                            </Link>
                        </View>
                        <View style={styles.flexTitleModal}>
                            <Link to={{screen:'LaunchesPages'}} onPress={() => {setOpenModal(!openModal)}}>
                                <Text style={styles.numberModal}>03</Text>
                                <Text style={styles.titleModal}>technology</Text>
                            </Link>

                        </View>
                    </View>
                </BlurView>

            </Modal>
        </SafeAreaView>
    )
}

export default Navbar;