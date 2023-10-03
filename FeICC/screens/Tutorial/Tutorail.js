import React, { useRef, useMemo, useCallback } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const Step_Picture = [
    {
        url: require('../../assets/StepImage/Step1.png'),
        title: 'Cho nấm khô và tảo bẹ kombu vào chén nhỏ hoặc và đổ nước phủ bề mặt.Đặt một miêng khăn giấy lên mặt nước để giữ nấm ngấm đều nước trong 10 phút.',
        id: '1',
    },
    {
        url: require('../../assets/StepImage/Step2.png'),
        title: 'Xay nhuyễn nấm mỡ, xào lửa lớn với dầu thực vật liên tục cho đến khi nấm khô lại và chín vàng đều trong 6 đến 10 phút.Chắt dầu ra chén nhỏ, lấy nấm mỡ đã xào cho một một cái tô cỡ vừa, rồi đổ dầu lại vào chảo.',
        id: '2',
    },
    {
        url: require('../../assets/StepImage/Step3.png'),
        title: 'Quay lại chén nấm khô, chắt nước và chừa lại 3/4 cốc nước ngâm. Cho bột bắp và nước tương vào nước ngâm. Xắt nhỏ nấm khô, sau đó cho vào chung với nấm mỡ vừa chiên.',
        id: '3',
    },
    {
        url: require('../../assets/StepImage/Step4.png'),
        title: 'Cho toàn bộ hạt tiêu Tứ Xuyên và ớt vào chảo dầu và đun ở lửa lớn. Nấu cho đến khi toả mùi thơm. Chứ ý không nấu quá chín, đề phòng cháy.Chắt dầu lưới lọc mịn, bỏ hạt tiêu và ớt đi, rồi cho dầu trở lại chảo.',
        id: '4',
    },
];

const { width } = Dimensions.get('window');
function Tutorial() {
    const navigation = useNavigation();
    const swiperRef = useRef(null);

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

    // render bottomsheet
    const renderItem = useCallback(
        (item, index) => (
            <View key={index} style={styles.itemContainer}>
                <Text style={styles.stepTitleBottomSheet}>BƯỚC {`${index + 1}`}</Text>
                <Text>{`${item.title}`}</Text>
            </View>
        ),
        [],
    );

    const handleContinue = () => {
        if (swiperRef.current.getCurrentIndex() < Step_Picture.length - 1) {
            swiperRef.current.scrollToIndex({ index: swiperRef.current.getCurrentIndex() + 1 });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/arrowLeft.png')} style={styles.headerImage} />
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Đậu Hũ Tứ Xuyên</Text>
                </View>
                <View></View>
            </View>

            <SwiperFlatList
                index={0}
                data={Step_Picture}
                snapToAlignment="center"
                ref={swiperRef}
                style={styles.wrapper}
                renderItem={({ item, index }) => (
                    <View key={item.id} style={styles.slide}>
                        <View key={item.id} style={styles.slide}>
                            <View style={styles.redBox}>
                                <Image source={item.url} style={styles.stepImage} />
                            </View>
                            <View style={styles.blueBox}>
                                <Text style={styles.stepTitle}>{item.title}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.leftContent}>
                                        Bước {index + 1}/{Step_Picture.length}
                                    </Text>
                                    <TouchableOpacity style={styles.rightContent} onPress={handleSnapPress}>
                                        <Text>Xem tất cả</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.progressBarContainer}>
                                    <View
                                        style={{
                                            width: `${((index + 1) / Step_Picture.length) * 100}%`,
                                            ...styles.progressBar,
                                        }}
                                    />
                                </View>
                                {index === Step_Picture.length - 1 ? (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('CompleteTutorial')}
                                        style={styles.continueButton}
                                    >
                                        <Text style={styles.continueButtonText}>Hoàn Thành</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
                                        <Text style={styles.elseButtonText}>Bước tiếp theo &#x2192;</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </View>
                )}
            />
            <BottomSheet
                style={styles.bottomSheetContainer}
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    {Step_Picture.map(renderItem)}
                </BottomSheetScrollView>
                <TouchableOpacity onPress={handleClosePress} style={styles.backBottomSheet}>
                    <Text style={styles.elseButtonText}>Quay lại</Text>
                </TouchableOpacity>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(198, 227, 229, 0.4)',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    headerImage: {
        width: 24,
        height: 24,
    },
    headerContent: {
        flex: 1,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        flexDirection: 'column',
        width,
    },
    redBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueBox: {
        width,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
    },
    stepImage: {
        width: 340,
        height: 250,
        borderRadius: 50,
    },
    stepTitle: {
        width: '86%',
        fontSize: 18,

        color: 'black',
    },
    continueButton: {
        width: '86%',
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
    },
    continueButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    elseButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
    progressBarContainer: {
        width: '86%',
        height: 8,
        backgroundColor: 'rgba(255, 122, 0, 0.05)',
        borderRadius: 6,
        margin: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'rgba(255, 122, 0, 1)',
        borderRadius: 5,
    },
    leftContent: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'rgba(255, 122, 0, 1)',
        flex: 1,
    },
    row: {
        width: '86%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContent: {},
    scrollView: {
        height: '70%',
    },
    backButton: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        backgroundColor: 'white',
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
    },
    backBottomSheet: {
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
    },
    stepTitleBottomSheet: {
        color: 'rgba(255, 122, 0, 1)',
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default Tutorial;
