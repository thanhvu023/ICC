import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteFood = () => {
    const [listFoodData, setListFoodData] = useState([]);
    const [token, setToken] = useState(null);
    const navigation = useNavigation();

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
    const getAuthTokenFromStorage = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            setToken(token);
            if (token) {
                getListFoodData(token);
            }
        } catch (error) {
            console.error('Lỗi khi lấy token từ AsyncStorage:', error);
        }
    };
    useEffect(() => {
        getAuthTokenFromStorage();
    }, []);
    const foodData = [
        {
            id: 1,
            name: 'Bánh mì sandwich gà nướng',
            rating: 4.5,
            time: '20 phút',
            categories: ['Món nướng', 'Ăn vặt', 'Ẩm thực Việt'],
            image: require('../../assets/foodDatas/sandwich.png'),
        },
        {
            id: 2,
            name: 'Hủ tíu bò kho',
            rating: 4.2,
            time: '40 phút',
            categories: ['Ẩm thực Việt', 'Mì & phở'],
            image: require('../../assets/foodDatas/bokho.png'),
        },
        {
            id: 3,
            name: 'Gỏi cuốn tôm thịt',
            rating: 4.3,
            time: '25 phút',
            categories: ['Ẩm thực Việt', 'Ăn vặt', 'Ẩm thực Việt'],
            image: require('../../assets/foodDatas/goicuon.png'),
        },
        {
            id: 4,
            name: 'Cơm rang dưa bò',
            rating: 4.1,
            time: '35 phút',
            categories: ['Ẩm thực Việt'],
            image: require('../../assets/foodDatas/comrang.png'),
        },
        {
            id: 5,
            name: 'Canh chua cá',
            rating: 4.1,
            time: '35 phút',
            categories: ['Ẩm thực Việt'],
            image: require('../../assets/foodDatas/canhchua.png'),
        },
    ];

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <View style={{ width: '90%' }}>
                    <View style={{ marginVertical: 15 }}>
                        <Text>
                            Thích một món nhưng chưa có dịp nấu thử? Muốn thử lại một món ăn khác? Theo dõi những món ăn
                            yêu thích của bạn ở đây,
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                width: '80%',
                                height: 50,
                                borderRadius: 8,
                                paddingLeft: 10,
                                borderColor: '#DDE4EC',
                            }}
                            placeholder="Tìm kiếm"
                        />
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgba(255, 122, 0, 1)',
                                height: 54,
                                width: 54,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                            }}
                        >
                            <Image source={require('../../assets/Dishes/Filter.png')} />
                        </TouchableOpacity>
                    </View>
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
};

export default FavoriteFood;
