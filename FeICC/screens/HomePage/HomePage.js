import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const categories = [
    { name: 'Truyền thống', icon: 'coffee' },
    { name: 'Món chiên', icon: 'cutlery' },
    { name: 'Hải sản', icon: 'anchor' },
    { name: 'Ăn vặt', icon: 'heart' },
    { name: 'Mỳ và phở', icon: 'spoon' },
    { name: 'Ăn kiêng', icon: 'leaf' },
    { name: 'Làm bánh', icon: 'birthday-cake' },
    { name: 'Quốc tế', icon: 'globe' },
];

function HomePage() {
    const [listFoodData, setListFoodData] = useState([]);
    const [listFoodByMeals, setListFoodByMeals] = useState([]);
    const [token, setToken] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        getAuthTokenFromStorage();
    }, []);

    const getAuthTokenFromStorage = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            setToken(token);
            if (token) {
                getListFoodData(token);
                getListFoodByMeals(token);
            }
        } catch (error) {
            console.error('Lỗi khi lấy token từ AsyncStorage:', error);
        }
    };

    const getListFoodByMeals = async (token) => {
        try {
            const response = await fetch('https://exe201-icc.azurewebsites.net/api/Recipe/meals?meal=S%C3%A1ng', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('token là:', token);
            // console.log('response:', response);
            if (response.ok) {
                const responseData = await response.json();

                setListFoodByMeals(responseData);
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };
    const getListFoodData = async (token) => {
        try {
            const response = await fetch('https://exe201-icc.azurewebsites.net/api/Recipe/get-all', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log('token là:', token);
            // console.log('response:', response);
            if (response.ok) {
                const responseData = await response.json();

                setListFoodData(responseData);
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={{ padding: 5, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                            Món ngon nổi bật
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Dishes')}>
                            <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <SwiperFlatList
                    index={0}
                    data={listFoodData.slice(0, 4)}
                    horizontal
                    snapToAlignment="start"
                    style={{ padding: 5 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item.id}
                            style={{ width: 149, height: 189, justifyContent: 'center', margin: 5 }}
                            onPress={() => navigation.navigate('DishesDetail', { itemData: item })}
                        >
                            <View
                                key={item.id}
                                style={{ width: 149, height: 189, justifyContent: 'center', margin: 5 }}
                            >
                                <View
                                    style={{
                                        width: 149,
                                        height: 189,
                                        justifyContent: 'center',
                                        borderRadius: 16,
                                        backgroundColor: 'red',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri: item.imgLink,
                                        }}
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        borderBottomLeftRadius: 16,
                                        borderBottomRightRadius: 16,
                                        backgroundColor: 'rgba(10, 37, 51, 0.5)',
                                        width: '100%',
                                        padding: 10,
                                    }}
                                >
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                        <Image
                                            style={{ marginRight: 2 }}
                                            source={require('../../assets/Dishes/TimeCircleWhite.png')}
                                        />
                                        <Text style={{ color: 'white' }}>{item.cookingTime} phút</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.containerCategory}>
                    <Text style={styles.title}>Danh mục</Text>
                    <View style={styles.categoryContainer}>
                        <View style={styles.row}>
                            {categories.slice(0, 4).map((category, index) => (
                                <TouchableOpacity key={index} style={styles.categoryItem}>
                                    <Icon name={category.icon} size={24} color="black" />
                                    <Text style={styles.categoryText}>{category.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.row}>
                            {categories.slice(4, 8).map((category, index) => (
                                <TouchableOpacity key={index} style={styles.categoryItem}>
                                    <Icon name={category.icon} size={24} color="black" />
                                    <Text style={styles.categoryText}>{category.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                        Bữa ăn của bạn như thế nào?
                    </Text>
                    <Text style={{ fontSize: 14, color: 'rgba(10, 37, 51, 1)' }}>
                        Hãy review món ăn bạn đã nấu nhé:
                    </Text>
                    <SwiperFlatList
                        index={0}
                        data={listFoodByMeals.slice(0, 4)}
                        horizontal
                        snapToAlignment="start"
                        style={{ padding: 5 }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                key={item.id}
                                style={{ width: 149, height: 189, justifyContent: 'center', margin: 5 }}
                                onPress={() => navigation.navigate('DishesDetail', { itemData: item })}
                            >
                                <View
                                    key={item.id}
                                    style={{ width: 149, height: 189, justifyContent: 'center', margin: 5 }}
                                >
                                    <View
                                        style={{
                                            width: 149,
                                            height: 189,
                                            justifyContent: 'center',
                                            borderRadius: 16,
                                            backgroundColor: 'red',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: item.imgLink,
                                            }}
                                            style={{ width: '100%', height: '100%' }}
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            borderBottomLeftRadius: 16,
                                            borderBottomRightRadius: 16,
                                            backgroundColor: 'rgba(10, 37, 51, 0.5)',
                                            width: '100%',
                                            padding: 10,
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>
                                            {item.name}
                                        </Text>
                                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                            <Image
                                                style={{ marginRight: 2 }}
                                                source={require('../../assets/Dishes/TimeCircleWhite.png')}
                                            />
                                            <Text style={{ color: 'white' }}>{item.meals} </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>Có thể bạn muốn thử?</Text>
                    {listFoodData.slice(0, 4).map((item) => (
                        <TouchableOpacity
                            style={{
                                margin: 2,
                                height: 82,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                borderRadius: 8,
                                backgroundColor: 'white',
                                shadowColor: 'black',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 4,
                                elevation: 2,
                            }}
                            key={item.id}
                            onPress={() => navigation.navigate('DishesDetail', { itemData: item })}
                        >
                            <Image
                                style={{
                                    height: 52,
                                    width: 52,
                                    resizeMode: 'cover',
                                    marginLeft: 8,
                                    borderRadius: 8,
                                }}
                                source={{
                                    uri: item.imgLink,
                                }}
                            ></Image>
                            <View style={{ paddingLeft: 12 }}>
                                <Text>{item.name}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        style={{ marginRight: 2 }}
                                        source={require('../../assets/Star.png')}
                                        resizeMode="contain"
                                    ></Image>
                                    <Text style={{ marginRight: 4 }}>4.5</Text>
                                    <Image
                                        style={{ marginRight: 2 }}
                                        source={require('../../assets/Dishes/TimeCircleDishes.png')}
                                        resizeMode="contain"
                                    ></Image>
                                    <Text>{item.cookingTime}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.tagView}>
                                        <Text
                                            style={{
                                                marginTop: 1,
                                                marginBottom: 1,
                                                marginLeft: 4,
                                                marginRight: 4,
                                                color: 'white',
                                            }}
                                        >
                                            {item.energy} cal
                                        </Text>
                                    </View>
                                    <View style={styles.tagView}>
                                        <Text
                                            style={{
                                                marginTop: 1,
                                                marginBottom: 1,
                                                marginLeft: 4,
                                                marginRight: 4,
                                                color: 'white',
                                            }}
                                        >
                                            {item.servingSize} người
                                        </Text>
                                    </View>
                                    <View style={styles.tagView}>
                                        <Text
                                            style={{
                                                marginTop: 1,
                                                marginBottom: 1,
                                                marginLeft: 4,
                                                marginRight: 4,
                                                color: 'white',
                                            }}
                                        >
                                            {item.meals}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    tagView: {
        backgroundColor: 'rgba(255, 122, 0, 1)',
        borderRadius: 8,
        margin: 2,
    },
    tagText: {
        color: 'white',
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: 'white',
        borderColor: 'rgba(151, 162, 176, 1)',
        borderBottomWidth: 1,
    },
    bottomSheetContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 6,
    },
    backBottomSheet: {
        width: '100%',
        height: 54,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 122, 0, 1)',
    },
    backBottomClear: {
        width: '100%',
        height: 54,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectItems: {
        width: 51,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    selectRating: {
        width: 80,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    containerCategory: {
        backgroundColor: 'white',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(10, 37, 51, 1)',
    },
    containerCategory: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(10, 37, 51, 1)',
    },
    categoryContainer: {
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    categoryItem: {
        width: '23%',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(221, 228, 236, 1)',
    },
    categoryText: {
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
    },
});
export default HomePage;
