import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReadMoreLessButton from '../../navigation/ReadMoreLessButton';
import { useNavigation } from '@react-navigation/native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const comment = [
    {
        title: 'Huong',
        description: 'ngon, hợp khẩu vị',
        id: '1',
    },
    {
        title: 'Gia Bảo',
        description: 'Nhìn nhiều vậy thôi chứ dễ nấu!',
        id: '2',
    },
    {
        title: 'Hưng',
        description: 'bị mặn',
        id: '3',
    },
];

const { width, height } = Dimensions.get('window');

const renderItems = (data) => {
    return data.map((item) => (
        <View key={item.index} style={styles.itemContainer}>
            <Text style={{ fontSize: 12, color: 'rgba(255, 122, 0, 1)', fontWeight: 'bold' }}>BƯỚC {item.index}</Text>
            <Text style={{ fontSize: 14, color: 'rgba(10, 37, 51, 1)' }}>{item.description}</Text>
        </View>
    ));
};

const renderMaterial = (data) => {
    return data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
            <Text style={{ fontSize: 16, color: 'rgba(10, 37, 51, 1)' }}>{item.ingredientName}</Text>
            <Text style={{ fontSize: 14, color: 'rgba(10, 37, 51, 1)' }}>{item.amount}</Text>
        </View>
    ));
};

const renderComment = (data) => {
    return data.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
            <Text style={{ fontSize: 16, color: 'rgba(10, 37, 51, 1)' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: 'rgba(10, 37, 51, 1)' }}>{item.description}</Text>
        </View>
    ));
};

function DishDetail({ route }) {
    const [selectedTab, setSelectedTab] = useState('nguyenlieu');
    const swiperRef = useRef(null);
    const navigation = useNavigation();
    const [listFoodData, setListFoodData] = useState([]);
    const [listFoodStep, setListFoodStep] = useState([]);
    const [listFoodMaterial, setListFoodMaterial] = useState([]);
    const { itemData } = route.params;

    const renderContent = () => {
        if (selectedTab === 'nguyenlieu') {
            return (
                <View style={{ padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                            Nguyên liệu
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>Đặt mua tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 16, color: 'rgba(116, 129, 137, 1)' }}>
                        18 nguyên liệu - bạn chỉ thiếu 2 món!
                    </Text>

                    {renderMaterial(listFoodMaterial)}
                </View>
            );
        } else if (selectedTab === 'chebien') {
            return (
                <View style={{ padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>Chế biến</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgba(255, 122, 0, 1)',
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 80,
                                height: 30,
                            }}
                            onPress={() =>
                                navigation.navigate('Tutorial', { itemName: itemData.name, itemStep: listFoodStep })
                            }
                        >
                            <Text style={{ color: 'white' }}>Bắt đầu</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 16, color: 'rgba(116, 129, 137, 1)' }}>{listFoodStep.length} bước</Text>
                    {renderItems(listFoodStep)}
                </View>
            );
        }
    };
    //API
    const getListFoodData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch('https://exe201-icc.azurewebsites.net/api/Recipe/get-all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const responseData = await response.json();
                setListFoodData(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getFoodStep = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(
                `https://exe201-icc.azurewebsites.net/api/RecipeStep/get-by-recipe-id/${itemData.id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            if (response.ok) {
                const responseData = await response.json();
                setListFoodStep(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getFoodMaterial = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(
                `https://exe201-icc.azurewebsites.net/api/Recipe/${itemData.id}/recipeamount`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            if (response.ok) {
                const responseData = await response.json();
                setListFoodMaterial(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    //useAPI
    useEffect(() => {
        getListFoodData();
        getFoodStep();
        getFoodMaterial();
    }, []);

    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    <ImageBackground
                        style={styles.imageBackground}
                        source={{
                            uri: itemData.imgLink,
                        }}
                    >
                        <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.navigate('Dishes')}>
                            <Image source={require('../../assets/CloseSquare.png')} resizeMode="contain"></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeIcon}>
                            <Image source={require('../../assets/Heart.png')} resizeMode="contain"></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.contentWrapper}>
                        <View>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{itemData.name}</Text>
                        </View>
                        <View style={styles.content}>
                            <View>
                                <Text style={{ marginRight: 10 }}>4.5</Text>
                            </View>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/StarOutline.png')}
                                resizeMode="contain"
                            ></Image>
                        </View>
                        {/* <View style={styles.tagWrapper}>
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
                                    Món cay
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
                                    Món xào
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
                                    Ẩm thực Trung
                                </Text>
                            </View>
                        </View> */}
                    </View>
                    <View style={styles.contentTag}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/DishDetail/Calos.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>{itemData.energy} cal</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/DishDetail/TimeCircle.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>{itemData.cookingTime} phút</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentTag}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/BottomBarIcons/Group.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>{itemData.servingSize} người</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/DishDetail/GroupMenu.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>{itemData.meals}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <ReadMoreLessButton text={itemData.description} maxLength={50} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(221, 228, 236, 1)',
                            width: '80%',
                            borderRadius: 8,
                            marginLeft: 30,
                            padding: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setSelectedTab('nguyenlieu')}
                            style={{
                                padding: 10,
                                backgroundColor: selectedTab === 'nguyenlieu' ? 'rgba(10, 37, 51, 1)' : 'transparent',
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ color: selectedTab === 'nguyenlieu' ? 'white' : 'black' }}>Nguyên liệu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelectedTab('chebien')}
                            style={{
                                padding: 10,
                                backgroundColor: selectedTab === 'chebien' ? 'rgba(10, 37, 51, 1)' : 'transparent',
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ color: selectedTab === 'chebien' ? 'white' : 'black' }}>Chế biến</Text>
                        </TouchableOpacity>
                    </View>
                    {renderContent()}
                    <View style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                                    Đánh giá
                                </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                                    - 23 lượt đánh giá
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <View>
                                <Text style={{ marginRight: 10 }}>4.5</Text>
                            </View>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/StarOutline.png')}
                                resizeMode="contain"
                            ></Image>
                        </View>

                        {renderComment(comment)}
                    </View>
                    <View style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                                Những món ngon khác
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
                        ref={swiperRef}
                        style={{ padding: 5 }}
                        renderItem={({ item }) => (
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
                                        ></Image>
                                        <Text style={{ color: 'white' }}>{item.cookingTime} phút</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        height: height / 2.5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeIcon: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    contentWrapper: {
        padding: 10,
        paddingTop: 20,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
    },
    content: {
        flexDirection: 'row',
    },
    tagWrapper: {
        flexDirection: 'row',
    },
    tagView: {
        backgroundColor: 'rgba(0, 147, 157, 1)',
        borderRadius: 8,
        margin: 2,
    },
    contentTag: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    stepTitleBottomSheet: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    itemContainer: {
        borderColor: 'rgba(151, 162, 176, 1)',
        borderBottomWidth: 1,
        padding: 2,
    },
    swiperContainer: {
        flex: 1,
    },
    pagination: {
        bottom: 10,
    },
    activeDot: {
        backgroundColor: 'blue', // Customize the active dot style
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width,
    },
    image: {
        width: '100%',
        height: '70%', // Adjust the height as needed
    },
    slideTitle: {
        marginTop: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
});

export default DishDetail;
