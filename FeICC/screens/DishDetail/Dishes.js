import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import RangeSlider from '../../navigation/RangeSlider';
import { useNavigation } from '@react-navigation/native';

const foodData = [
    { id: 1, name: 'Bánh Mì', isNew: true },
    { id: 2, name: 'Phở', isNew: false },
    { id: 3, name: 'Hủ tiếu bò kho', isNew: false },
    { id: 4, name: 'Gỏi cuốn tôm thịt', isNew: true },
];

const items = [
    { id: 1, text: 'Sáng' },
    { id: 2, text: 'Trưa' },
    { id: 3, text: 'Tối' },
    { id: 4, text: 'Ăn vặt' },
];

const numberMaterial = [
    { id: 1, text: 'Dưới 5' },
    { id: 2, text: 'Dưới 10' },
    { id: 3, text: 'Dưới 15' },
];

const rating = [
    { id: 1, text: 'Trên 3 sao' },
    { id: 2, text: 'Trên 4 sao' },
];
function Dishes() {
    const [searchText, setSearchText] = useState('');
    const [showHotDishes, setShowHotDishes] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);
    const navigation = useNavigation();

    const filteredFoodData = foodData.filter((food) => food.name.toLowerCase().includes(searchText.toLowerCase()));

    // hooks
    const sheetRef = useRef(null);

    const snapPoints = useMemo(() => ['1%', '80%'], []);

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log('handleSheetChange', index);
    }, []);
    const handleSnapPress = useCallback(() => {
        sheetRef.current?.snapToIndex(1);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    const toggleItem = (itemId) => {
        if (selectedItems === itemId) {
            setSelectedItems(null);
        } else {
            setSelectedItems(itemId);
        }
    };
    const toggleMaterial = (itemId) => {
        if (selectedItems === itemId) {
            setSelectedMaterial(null);
        } else {
            setSelectedMaterial(itemId);
        }
    };
    const toggleRating = (itemId) => {
        if (selectedItems === itemId) {
            setSelectedRating(null);
        } else {
            setSelectedRating(itemId);
        }
    };
    // render bottomsheet
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => toggleItem(item.id)}
            style={[
                styles.selectItems,
                {
                    backgroundColor: selectedItems === item.id ? 'rgba(255, 122, 0, 1)' : 'rgba(221, 228, 236, 1)',
                },
            ]}
        >
            <Text
                style={[
                    // styles.tagView,
                    {
                        color: selectedItems === item.id ? 'white' : 'black',
                    },
                ]}
            >
                {item.text}
            </Text>
        </TouchableOpacity>
    );

    const renderMaterial = ({ item }) => (
        <TouchableOpacity
            onPress={() => toggleMaterial(item.id)}
            style={[
                styles.selectItems,
                {
                    backgroundColor: selectedMaterial === item.id ? 'rgba(255, 122, 0, 1)' : 'rgba(221, 228, 236, 1)',
                },
            ]}
        >
            <Text
                style={[
                    // styles.tagView,
                    {
                        color: selectedMaterial === item.id ? 'white' : 'black',
                    },
                ]}
            >
                {item.text}
            </Text>
        </TouchableOpacity>
    );

    const renderRating = ({ item }) => (
        <TouchableOpacity
            onPress={() => toggleRating(item.id)}
            style={[
                styles.selectRating,
                {
                    backgroundColor: selectedRating === item.id ? 'rgba(255, 122, 0, 1)' : 'rgba(221, 228, 236, 1)',
                },
            ]}
        >
            <Text
                style={[
                    {
                        color: selectedRating === item.id ? 'white' : 'black',
                    },
                ]}
            >
                {item.text}
            </Text>
        </TouchableOpacity>
    );

    return (
        <>
            <ScrollView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <TextInput
                        style={{
                            height: 54,
                            width: 261,
                            borderColor: 'rgba(221, 228, 236, 1)',
                            borderWidth: 2,
                            borderRadius: 5,
                            marginBottom: 16,
                            paddingLeft: 10,
                        }}
                        placeholderTextColor="rgba(151, 162, 176, 1)"
                        placeholder="Tìm kiếm"
                        onChangeText={(text) => {
                            setSearchText(text);
                            setShowHotDishes(text === '');
                        }}
                        value={searchText}
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
                        onPress={handleSnapPress}
                    >
                        <Image source={require('../../assets/Dishes/Filter.png')}></Image>
                    </TouchableOpacity>
                </View>

                {showHotDishes && (
                    <React.Fragment>
                        <View
                            style={{
                                backgroundColor: 'white',
                                width: '96%',
                                height: 176,
                                borderRadius: 16,
                                shadowColor: 'black',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 4,
                                elevation: 4,
                                padding: 20,
                                margin: 2,
                            }}
                        >
                            <Text>Bạn có thể nấu</Text>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>{foodData.length} món</Text>
                            <Text>từ 34 nguyên liệu của bạn</Text>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: 30,
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    borderRadius: 8,
                                    margin: 2,
                                }}
                                onPress={() => navigation.navigate('KitchenCabinets')}
                            >
                                <Text>Cật nhập tủ bếp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: 30,
                                    backgroundColor: 'rgba(255, 122, 0, 1)',
                                    borderRadius: 8,
                                    margin: 2,
                                }}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Mở khóa thêm 433 món</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>
                            Món hot bạn đã thử chưa?
                        </Text>
                        {foodData.map((item) => (
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
                                onPress={() => navigation.navigate('DishesDetail')}
                            >
                                <Image
                                    style={{
                                        height: 52,
                                        width: 52,
                                        resizeMode: 'cover',
                                        marginLeft: 8,
                                        borderRadius: 8,
                                    }}
                                    source={require('../../assets/StepImage/Step4.png')}
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
                                        <Text>20 phút</Text>
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
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </React.Fragment>
                )}

                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>
                    {showHotDishes ? 'Danh sách món ăn' : `Có ${filteredFoodData.length} kết quả phù hợp với bạn`}
                </Text>
                {filteredFoodData.map((item) => (
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
                        onPress={() => navigation.navigate('DishesDetail')}
                    >
                        <Image
                            style={{ height: 52, width: 52, resizeMode: 'cover', marginLeft: 8, borderRadius: 8 }}
                            source={require('../../assets/StepImage/Step4.png')}
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
                                <Text>20 phút</Text>
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
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <BottomSheet
                style={styles.bottomSheetContainer}
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 327,
                        margin: 5,
                    }}
                >
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bộ lọc</Text>
                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Bữa ăn</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {items.map((item) => (
                                <FlatList key={item.id} data={[item]} renderItem={renderItem} horizontal />
                            ))}
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Số lượng nguyên liệu</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {numberMaterial.map((item) => (
                                <FlatList key={item.id} data={[item]} renderItem={renderMaterial} horizontal />
                            ))}
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Đánh giá</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {rating.map((item) => (
                                <FlatList key={item.id} data={[item]} renderItem={renderRating} horizontal />
                            ))}
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}>
                            <RangeSlider
                                currentMinValue={20}
                                currentMaxValue={80}
                                currentStep={5}
                                title={'Thời gian nấu'}
                                unit={'phút'}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}>
                            <RangeSlider
                                currentMinValue={50}
                                currentMaxValue={1000}
                                currentStep={10}
                                title={'Calories'}
                                unit={'Kcal'}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleClosePress} style={styles.backBottomSheet}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Áp dụng bộ lọc</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClosePress} style={styles.backBottomClear}>
                        <Text style={{ color: 'rgba(10, 37, 51, 1)', fontSize: 16, fontWeight: 'bold' }}>
                            Xóa tất cả
                        </Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </>
    );
}

const styles = StyleSheet.create({
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
});

export default Dishes;
