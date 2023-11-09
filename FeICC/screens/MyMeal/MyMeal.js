import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MyMeal = () => {
    const MealData = [
        { id: 1, ImgMeal: require('../../assets/MyMealImage/gaxao.png'), name: 'Gà xào xả ớt', time: '20 phút' },
        { id: 2, ImgMeal: require('../../assets/MyMealImage/comchien.png'), name: 'Cơm chiên', time: '30 phút' },
        { id: 3, ImgMeal: require('../../assets/MyMealImage/banhxeo.png'), name: 'Bánh xèo', time: '25 phút' },
    ];

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
            }}
        >
            <View style={{ width: '90%' }}>
                <View style={{ marginVertical: 15 }}>
                    <Text>Đây là những món ăn bạn đã thử nấu gần đây. Hãy để lại một lời đánh giá nhé!</Text>
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
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {MealData.map((meal) => (
                        <View key={meal.id} style={{ width: '48%', marginVertical: 5 }}>
                            <View
                                style={{
                                    width: '90%',
                                    borderRadius: 16,
                                    backgroundColor: 'red',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    source={meal.ImgMeal}
                                    style={{ width: '100%', height: 200 }}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default MyMeal;
