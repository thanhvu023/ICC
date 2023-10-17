import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import BottomSheet from '@gorhom/bottom-sheet';
import { Alert } from 'react-native';
const items = [
    { text: 'Khám phá hơn 1000 món ăn mới', image: require('../../assets/v.png') },
    { text: 'Trải nghiệm ẩm thực toàn thế giới', image: require('../../assets/v.png') },
    { text: 'Hiểu rõ thông tin dinh dưỡng chi tiết', image: require('../../assets/v.png') },
    { text: 'Trải nghiệm không quảng cáo', image: require('../../assets/v.png') },
];
const numberMaterial = [
    { id: 1, text: 'Trứng gà' },
    { id: 2, text: 'Trứng vịt' },
    { id: 3, text: 'Tỏi' },
    { id: 4, text: 'Gạo' },
    { id: 5, text: 'Nước tương' },
    { id: 6, text: 'Nước mắn' },
    { id: 7, text: 'Dầu ăn' },
];

function KitchenCabinets() {
    const [show, setShow] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedMaterial, setSelectedMaterial] = useState([]);
    const [showMaterials, setShowMaterials] = useState(false);
    const [selectedVegetable, setSelectedVegetable] = useState([]);
    const [showVegetables, setShowVegetables] = useState(false);
    const [selectedKitchenEquipment, setSelectedKitchenEquipment] = useState([]);
    const [showKitchenEquipments, setShowKitchenEquipments] = useState(false);
    const [showAllMaterials, setShowAllMaterials] = useState(false);
    const [showAllVegetables, setShowAllVegetables] = useState(false);
    const [showAllKitchenEquipments, setShowAllKitchenEquipments] = useState(false);
    const [listMeat, setListMeat] = useState([]);
    const [listVegetable, setListVegetable] = useState([]);
    const [listSpice, setListSpice] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const navigation = useNavigation();

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

    const toggleMaterial = (itemId) => {
        const isSelected = selectedMaterial.includes(itemId);

        if (isSelected) {
            const updatedMaterials = selectedMaterial.filter((id) => id !== itemId);
            setSelectedMaterial(updatedMaterials);
        } else {
            setSelectedMaterial([...selectedMaterial, itemId]);
        }
    };

    const toggleVegetable = (itemId) => {
        const isSelected = selectedVegetable.includes(itemId);

        if (isSelected) {
            const updatedVegetables = selectedVegetable.filter((id) => id !== itemId);
            setSelectedVegetable(updatedVegetables);
        } else {
            setSelectedVegetable([...selectedVegetable, itemId]);
        }
    };

    const toggleKitchenEquipment = (itemId) => {
        const isSelected = selectedKitchenEquipment.includes(itemId);

        if (isSelected) {
            const updatedKitchenEquipments = selectedKitchenEquipment.filter((id) => id !== itemId);
            setSelectedKitchenEquipment(updatedKitchenEquipments);
        } else {
            setSelectedKitchenEquipment([...selectedKitchenEquipment, itemId]);
        }
    };

    const renderMaterial = ({ item }) => (
        <TouchableOpacity
            onPress={() => toggleMaterial(item.id)}
            style={[
                styles.selectItems,
                {
                    backgroundColor: selectedMaterial.includes(item.id)
                        ? 'rgba(255, 122, 0, 1)'
                        : 'rgba(221, 228, 236, 1)',
                },
            ]}
        >
            <Text
                style={[
                    {
                        color: selectedMaterial.includes(item.id) ? 'white' : 'black',
                        flex: 1,
                    },
                ]}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    const renderVegetable = ({ item }) => (
        <TouchableOpacity
            onPress={() => toggleVegetable(item.id)}
            style={[
                styles.selectItems,
                {
                    backgroundColor: selectedVegetable.includes(item.id)
                        ? 'rgba(255, 122, 0, 1)'
                        : 'rgba(221, 228, 236, 1)',
                },
            ]}
        >
            <Text
                style={[
                    {
                        color: selectedVegetable.includes(item.id) ? 'white' : 'black',
                        flex: 1,
                    },
                ]}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    const renderKitchenEquipment = ({ item }) => (
        <TouchableOpacity
            onPress={() => toggleKitchenEquipment(item.id)}
            style={[
                styles.selectItems,
                {
                    backgroundColor: selectedKitchenEquipment.includes(item.id)
                        ? 'rgba(255, 122, 0, 1)'
                        : 'rgba(221, 228, 236, 1)',
                },
            ]}
        >
            <Text
                style={[
                    {
                        color: selectedKitchenEquipment.includes(item.id) ? 'white' : 'black',
                        flex: 1,
                    },
                ]}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    const toggleMaterials = () => {
        setShowMaterials(!showMaterials);
        setShowAllMaterials(false);
    };

    const toggleVegetables = () => {
        setShowVegetables(!showVegetables);
        setShowAllVegetables(false);
    };

    const toggleKitchenEquipments = () => {
        setShowKitchenEquipments(!showKitchenEquipments);
        setShowAllKitchenEquipments(false);
    };

    const toggleAllMaterials = () => {
        setShowAllMaterials(!showAllMaterials);
        setShowMaterials(false);
    };

    const toggleAllVegetables = () => {
        setShowAllVegetables(!showAllVegetables);
        setShowVegetables(false);
    };

    const toggleAllKitchenEquipments = () => {
        setShowAllKitchenEquipments(!showAllKitchenEquipments);
        setShowKitchenEquipments(false);
    };

    // const renderFirstMaterial = () => {
    //     if (listMeat.length > 0) {
    //         const firstFiveMeats = listMeat.slice(0, 5);
    //         return (
    //             <FlatList
    //                 data={firstFiveMeats}
    //                 renderItem={renderMaterial}
    //                 horizontal
    //                 keyExtractor={(item) => item.id.toString()}
    //             />
    //         );
    //     }
    //     return null;
    // };

    const renderFirstVegetable = () => {
        if (listVegetable.length > 0) {
            const firstFiveVegetables = listVegetable.slice(0, 5);
            return (
                <FlatList
                    data={firstFiveVegetables}
                    renderItem={renderVegetable}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                />
            );
        }
        return null;
    };

    const renderFirstKitchenEquipment = () => {
        if (listSpice.length > 0) {
            const firstFiveKitchenEquipments = listSpice.slice(0, 5);
            return (
                <FlatList
                    data={firstFiveKitchenEquipments}
                    renderItem={renderKitchenEquipment}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                />
            );
        }
        return null;
    };

    const handleFilterRecipe = async () => {
        AsyncStorage.getItem('token')
            .then(async (token) => {
                if (token) {
                    const decodedToken = jwtDecode(token);
                    if (
                        Array.isArray(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']) &&
                        decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'].includes('Premium')
                    ) {
                        var recipeFilter = [...selectedMaterial, ...selectedVegetable, ...selectedKitchenEquipment];
                        await listRecipeByFilter(recipeFilter);
                    } else {
                        setShow(true);
                    }
                } else {
                    console.error('Token is null or undefined');
                }
            })
            .catch((error) => {
                console.error('Error while retrieving token:', error);
            });
    };

    //API
    const getListMeat = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch('https://exe201-icc.azurewebsites.net/api/Ingredient/4/details', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 401) {
                navigation.navigate('ACCOUNT');
                return;
            }
            if (response.ok) {
                const responseData = await response.json();
                setListMeat(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getListVegetable = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch('https://exe201-icc.azurewebsites.net/api/Ingredient/1/details', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const responseData = await response.json();
                setListVegetable(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getListSpice = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch('https://exe201-icc.azurewebsites.net/api/Ingredient/7/details', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const responseData = await response.json();
                setListSpice(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const listRecipeByFilter = async (recipeFilter) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch('https://exe201-icc.azurewebsites.net/api/Recipe/ingredients/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(recipeFilter),
            });
            const newRecipe = await response.json();
            if (newRecipe) {
                setRecipe(newRecipe);
                handleSnapPress();
            } else {
                Alert.alert(
                    'Thông báo',
                    'Không có món ăn phù hợp, hãy tìm món khác nhé!',
                    [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                        },
                    ],
                    { cancelable: false },
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    //useAPI
    useEffect(() => {
        getListMeat();
        getListVegetable();
        getListSpice();
    }, []);

    console.log(recipe);

    return (
        <>
            <ScrollView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>
                    Bạn đang có 34 nguyên liệu, ICC sẽ nhắc bạn kiểm tra tủ bếp trước khi chọn món ăn!
                </Text>
                <TextInput
                    style={{
                        height: 54,
                        width: '100%',
                        borderColor: 'rgba(221, 228, 236, 1)',
                        borderWidth: 2,
                        borderRadius: 5,
                        marginBottom: 16,
                        paddingLeft: 10,
                    }}
                    placeholderTextColor="rgba(151, 162, 176, 1)"
                    placeholder="Thêm hoặc xóa nguyên liệu.."
                    onChangeText={(text) => {
                        setSearchText(text);
                        setShowHotDishes(text === '');
                    }}
                    value={searchText}
                />
                <View
                    style={{
                        width: '96%',
                        backgroundColor: 'white',
                        borderRadius: 8,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 8,
                        elevation: 6,
                        margin: 2,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: 'rgba(191, 204, 222, 1)',
                            borderBottomWidth: 1,
                            marginBottom: 3,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                        }}
                        onPress={toggleAllMaterials}
                    >
                        <Image source={require('../../assets/Kitchen/needMaterial.png')}></Image>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                marginBottom: 5,
                                marginLeft: 2,
                            }}
                        >
                            Thịt các loại
                        </Text>
                    </TouchableOpacity>
                    {/* {showMaterials && renderFirstMaterial()} */}
                    {/* {showMaterials && (
                        <TouchableOpacity
                            style={{
                                marginBottom: 5,
                                marginLeft: 2,
                                backgroundColor: 'rgba(191, 204, 222, 1)',
                                width: 120,
                                padding: 2,
                                borderRadius: 8,
                            }}
                            onPress={toggleAllMaterials}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgba(72, 82, 95, 1)' }}>
                                +{listMeat.length - 5} nguyên liệu
                            </Text>
                        </TouchableOpacity>
                    )} */}
                    {showAllMaterials && (
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                            }}
                        >
                            {listMeat.map((item) => (
                                <FlatList key={item.id} data={[item]} renderItem={renderMaterial} horizontal />
                            ))}
                        </View>
                    )}
                    {showAllMaterials && (
                        <View
                            style={{
                                backgroundColor: 'rgba(221, 228, 236, 1)',
                                width: 30,
                                height: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                                margin: 2,
                                marginLeft: 4,
                            }}
                        >
                            <TouchableOpacity onPress={toggleMaterials}>
                                <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Ẩn</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                <View
                    style={{
                        width: '96%',
                        backgroundColor: 'white',
                        borderRadius: 8,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 8,
                        elevation: 6,
                        margin: 2,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: 'rgba(191, 204, 222, 1)',
                            borderBottomWidth: 1,
                            marginBottom: 3,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                        }}
                        onPress={toggleVegetables}
                    >
                        <Image source={require('../../assets/Kitchen/needVegetable.png')}></Image>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                marginBottom: 5,
                                marginLeft: 2,
                            }}
                        >
                            Rau củ
                        </Text>
                    </TouchableOpacity>
                    {showVegetables && renderFirstVegetable()}
                    {showVegetables && (
                        <TouchableOpacity
                            style={{
                                marginBottom: 5,
                                marginLeft: 2,
                                backgroundColor: 'rgba(191, 204, 222, 1)',
                                width: 120,
                                padding: 2,
                                borderRadius: 8,
                            }}
                            onPress={toggleAllVegetables}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgba(72, 82, 95, 1)' }}>
                                +{listVegetable.length - 5} nguyên liệu
                            </Text>
                        </TouchableOpacity>
                    )}
                    {showAllVegetables && (
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                            }}
                        >
                            {listVegetable.map((item) => (
                                <FlatList key={item.id} data={[item]} renderItem={renderVegetable} horizontal />
                            ))}
                        </View>
                    )}
                    {showAllVegetables && (
                        <View
                            style={{
                                backgroundColor: 'rgba(221, 228, 236, 1)',
                                width: 30,
                                height: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                                margin: 2,
                                marginLeft: 4,
                            }}
                        >
                            <TouchableOpacity onPress={toggleVegetables}>
                                <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Ẩn</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                <View
                    style={{
                        width: '96%',
                        backgroundColor: 'white',
                        borderRadius: 8,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 8,
                        elevation: 6,
                        margin: 2,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: 'rgba(191, 204, 222, 1)',
                            borderBottomWidth: 1,
                            marginBottom: 3,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                        }}
                        onPress={toggleKitchenEquipments}
                    >
                        <Image source={require('../../assets/Kitchen/needKitchenEquipment.png')}></Image>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                marginBottom: 5,
                                marginLeft: 2,
                            }}
                        >
                            Gia vị
                        </Text>
                    </TouchableOpacity>
                    {showKitchenEquipments && renderFirstKitchenEquipment()}
                    {showKitchenEquipments && (
                        <TouchableOpacity
                            style={{
                                marginBottom: 5,
                                marginLeft: 2,
                                backgroundColor: 'rgba(191, 204, 222, 1)',
                                width: 120,
                                padding: 2,
                                borderRadius: 8,
                            }}
                            onPress={toggleAllKitchenEquipments}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgba(72, 82, 95, 1)' }}>
                                +{listSpice.length - 5} nguyên liệu
                            </Text>
                        </TouchableOpacity>
                    )}
                    {showAllKitchenEquipments && (
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                            }}
                        >
                            {listSpice.map((item) => (
                                <FlatList key={item.id} data={[item]} renderItem={renderKitchenEquipment} horizontal />
                            ))}
                        </View>
                    )}
                    {showAllKitchenEquipments && (
                        <View
                            style={{
                                backgroundColor: 'rgba(221, 228, 236, 1)',
                                width: 30,
                                height: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                                margin: 2,
                                marginLeft: 4,
                            }}
                        >
                            <TouchableOpacity onPress={toggleKitchenEquipments}>
                                <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Ẩn</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={{
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
                    backgroundColor: 'rgba(4, 38, 40, 1)',
                }}
                // onPress={() => setShow(true)}
                onPress={handleFilterRecipe}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Hoàn thành</Text>
            </TouchableOpacity>

            <BottomSheet
                style={styles.bottomSheetContainer}
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <ScrollView
                    style={{
                        width: 327,
                        margin: 5,
                    }}
                >
                    {recipe.map((item) => (
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
                                style={{ height: 52, width: 52, resizeMode: 'cover', marginLeft: 8, borderRadius: 8 }}
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
                </ScrollView>
            </BottomSheet>

            <Modal transparent={true} visible={show}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>Khám Phá Ẩm Thực Đỉnh Cao!</Text>
                        <Text style={styles.subtitle}>Hãy nâng cấp để:</Text>

                        <View style={styles.itemsContainer}>
                            {items.map((item, index) => (
                                <View key={index} style={styles.item}>
                                    <Image source={item.image} style={styles.itemImage} />
                                    <Text style={styles.itemText}>{item.text}</Text>
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('QRSCAN')}>
                            <Text style={styles.startButtonText}>BẮT ĐẦU NGAY</Text>
                            <Text style={styles.startButtonSubtext}>59.000 VND/tháng • Huỷ bất kì lúc nào</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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

    selectItems: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 6,
        margin: 2,
    },
    selectRating: {
        width: 80,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        paddingRight: 50,
        paddingLeft: 50,
        height: 350,
        borderRadius: 10,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    itemsContainer: {
        margin: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemImage: {
        marginRight: 10,
    },
    itemText: {
        fontSize: 16,
        fontWeight: '500',
    },
    startButton: {
        backgroundColor: '#000',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    startButtonSubtext: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
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
});

export default KitchenCabinets;
