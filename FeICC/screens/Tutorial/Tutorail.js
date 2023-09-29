import React, { useRef, useMemo, useCallback } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    Animated,
    PanResponder,
    ScrollView,
    Button,
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const Step_Picture = [
    {
        url: require('../../assets/StepImage/Step1.png'),
        title: 'Sơ chế nguyên liệu aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        id: '1',
    },
    {
        url: require('../../assets/StepImage/Step2.png'),
        title: 'Xào thịt qqqqqqqqqqqqqqqqqqqqqqqqqqq',
        id: '2',
    },
    {
        url: require('../../assets/StepImage/Step3.png'),
        title: 'Xào đậu hũ qqqqqqqqqqqqqqqqq',
        id: '3',
    },
    {
        url: require('../../assets/StepImage/Step4.png'),
        title: 'Thành phẩm qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
        id: '4',
    },
];

const { width, height } = Dimensions.get('window');
function Tutorial() {
    const navigation = useNavigation();
    const swiperRef = useRef(null);
    // hooks
    const sheetRef = useRef(null);

    // variables
    const data = useMemo(
        () =>
            Array(50)
                .fill(0)
                .map((_, index) => `index-${index}`),
        [],
    );
    const snapPoints = useMemo(() => ['1%', '80%'], []);

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log('handleSheetChange', index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // render
    const renderItem = useCallback(
        (item, index) => (
            <View key={item} style={styles.itemContainer}>
                <Text style={styles.stepTitle}>{`${index + 1}`}</Text>
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
                                    <TouchableOpacity style={styles.rightContent}>
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
            <BottomSheet ref={sheetRef} index={1} snapPoints={snapPoints} onChange={handleSheetChange}>
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    {Step_Picture.map(renderItem)}
                </BottomSheetScrollView>
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
        backgroundColor: 'green',
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
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: height * 0.8,
        // height: 200,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 16,
        elevation: 4,
    },
    scrollView: {
        paddingVertical: 8,
    },
    draggableArea: {
        height: '10%', // Chiều cao của phần kéo lên kéo xuống
        backgroundColor: 'red',
        // Các thiết lập khác cho phần kéo lên kéo xuống
    },
    scrollView: {
        height: '70%', // Chiều cao của ScrollView
        // Các thiết lập khác cho ScrollView
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
        backgroundColor: '#eee',
    },
});

export default Tutorial;
