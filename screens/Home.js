import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';


import { listHome, listHomePokemon } from '../services';
import { Avatar } from 'react-native-paper';

const Home = ({ navigation }) => {

    const [pokemons, setPokemons] = React.useState([])

    React.useEffect(() => {
        getPokemon()
        //getBusineLineCatalogs()
    }, []);

    const getPokemon = async () => {
        const { results } = await listHome()
        let array = []
        await results.map((item) => {
            listHomePokemon(item.url)
                .then((response) => {
                    array.push(response)
                    // console.log('arra', array)
                })
                .catch((err) => {
                    console.log('error')
                })
        })
        setPokemons(array)
    }

    const renderItem = (item, idx) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { item })}>
                <View elevation={5} style={{ height: 180, width: '100%', backgroundColor: 'yellow', flexDirection: 'row', backgroundColor: 'white', borderRadius: 10 }}>
                    <View style={{ height: '100%', width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar.Image
                            source={{
                                uri: item?.sprites?.back_default
                            }}
                            size={90}
                            style={{ backgroundColor: 'lightgrey' }}
                        />
                    </View>
                    <View style={{ height: '100%', width: '40%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>ID:</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.id}</Text>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>NAME:</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>PESO:</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.weight}</Text>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}>ALTURA:</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.height}</Text>
                    </View>
                    <View style={{ height: '100%', width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image source={require('../assets/arrowRigth.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} /> */}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const submitText = (val) => {
        if(val === '') return getPokemon()
        let result = pokemons.filter((word) => word.name === val);
        // console.log('kdjcipowd', result)
        setPokemons(result)
    }

    return (
        <>
            <View style={{
                backgroundColor: '#f2f2f2', //#E6F8DB
                height: height,
                width: width,
                alignItems: 'center'
            }}>
                <View style={{ height: '10%', width: '100%', justifyContent: 'flex-end', alignItems: 'flex-start', paddingLeft: 20 }}>
                    <Image source={{ uri: 'https://loodibee.com/wp-content/uploads/International-Pokemon-logo.png' }} style={{ height: 50, width: 100 }} resizeMode={'cover'} />
                </View>
                <View style={{ height: '10%', width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: '10%' }}>
                    <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#D4D4D4' }}>
                        <Image source={require('../assets/lupa.png')} style={{ height: 15, width: 15 }} resizeMode={'contain'} />
                        <TextInput
                            placeholder="Buscar pokemones"
                            style={styles.textInput}
                            autoCapitalize="none"
                            // onChangeText={(val) => {
                            //     submitText(val)
                            // }}
                            onEndEditing={(val) => {
                                submitText(val.nativeEvent.text)
                            }}
                        />
                        <Image source={require('../assets/micro.png')} style={{ height: 15, width: 15 }} resizeMode={'contain'} />
                    </View>
                </View>
                <View style={{ height: '80%', width: '90%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                    <FlatList
                        // numColumns={3}
                        keyExtractor={(item, index) => `item-${index}`}
                        data={pokemons}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 10 }} />
                        )}
                        renderItem={({ item, index }) => renderItem(item, index)}
                    />
                </View>
            </View>
        </>
    );
};

export default Home;

const { height, width } = Dimensions.get("window");
const height_logo = '100%';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
});