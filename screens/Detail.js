import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

import Swiper from 'react-native-swiper'

const Detail = ({ route, navigation }) => {

    const { item } = route?.params

    const renderItem = (item, idx) => {
        return (
            <View style={{ width: width, flexDirection: 'row'}}>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '400',  paddingLeft: 10 }}>{idx + 1}</Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', paddingLeft: 30 }}>{item?.move?.name}</Text>
            </View>
        )
    }

    return (
        <View style={{
            backgroundColor: '#f2f2f2', //#E6F8DB
            height: height,
            width: width
        }}>
            <View style={{ height: '10%', width: '100%', justifyContent: 'flex-end', alignItems: 'flex-start', paddingLeft: 20 }}>
                <Image source={{ uri: 'https://loodibee.com/wp-content/uploads/International-Pokemon-logo.png' }} style={{ height: 60, width: 170 }} resizeMode={'cover'} />
            </View>
            <View style={{ height: '15%', width: '100%', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: '10%', flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.id}</Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
            </View>
            <View style={{ height: '25%', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Image source={{ uri: item.sprites.back_default }} resizeMode={'contain'} style={{ height: 200, width: 200 }} />
                    </View>
                    <View style={styles.slide2}>
                        <Image source={{ uri: item.sprites.front_default }} resizeMode={'contain'} style={{ height: 200, width: 200 }} />
                    </View>
                    <View style={styles.slide3}>
                        <Image source={{ uri: item.sprites.back_shiny }} resizeMode={'contain'} style={{ height: 200, width: 200 }} />
                    </View>
                    <View style={styles.slide3}>
                        <Image source={{ uri: item.sprites.front_shiny }} resizeMode={'contain'} style={{ height: 200, width: 200 }} />
                    </View>
                </Swiper>
            </View>
            <View style={{ height: '15%', width: '100%', justifyContent: 'space-around', alignItems: 'flex-start', paddingLeft: 30 }}>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>PESO:</Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.weight}</Text>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>ALTURA:</Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.height}</Text>
            </View>
            <View style={{ height: '35%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View elevation={5} style={[styles.textInput, { height: '90%', width: '90%', justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Movimientos</Text>
                    <FlatList
                        // numColumns={3}
                        keyExtractor={(item, index) => `item-${index}`}
                        data={item.moves}
                        // ItemSeparatorComponent={() => (
                        //     <View style={{ height: 10 }} />
                        // )}
                        renderItem={({ item, index }) => renderItem(item, index)}
                    />
                </View>

            </View>
        </View>
    );
};

export default Detail;

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
})
