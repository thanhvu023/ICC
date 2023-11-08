import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

const FavoriteFood = () => {
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
                    {foodData.map((food) => (
                        <View key={food.id} style={{ marginVertical: 7 }}>
                            <View
                                style={{
                                    width: '100%',
                                    height: 100,
                                    borderRadius: 8,
                                    borderWidth: 0.4,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#FFFFFF',
                                    paddingLeft: 10,
                                    borderColor: '#48525F',
                                }}
                            >
                                <View>
                                    <Image source={food?.image} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 500 }}>{food.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={require('../../assets/Star.png')} />
                                            <Text> {food.rating}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                            <Image source={require('../../assets/TimeCircle.png')} />
                                            <Text> {food.time}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        {food.categories.map((category, index) => (
                                            <Text
                                                key={index}
                                                style={{
                                                    backgroundColor: '#FF7A00',
                                                    marginRight: 10,
                                                    paddingHorizontal: 5,
                                                    borderRadius: 8,
                                                    color: '#fff',
                                                }}
                                            >
                                                {category}
                                            </Text>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default FavoriteFood;
