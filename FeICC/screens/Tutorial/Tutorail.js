import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Step_Picture = [
    {
        url: require('../../assets/StepImage/Step1.png'),
        title: 'Sơ chế nguyên liệu aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        id: '1',
    },
    {
        url: require('../../assets/StepImage/Step2.png'),
        title: 'Xào thịt',
        id: '2',
    },
    {
        url: require('../../assets/StepImage/Step3.png'),
        title: 'Xào đậu hũ',
        id: '3',
    },
    {
        url: require('../../assets/StepImage/Step4.png'),
        title: 'Thành phẩm',
        id: '4',
    },
];

const { width } = Dimensions.get('window');
function Tutorial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleContinue = () => {
        if (swiperRef.current.getCurrentIndex() < Step_Picture.length - 1) {
            swiperRef.current.scrollToIndex({ index: swiperRef.current.getCurrentIndex() + 1 });
        } else {
            // Xử lý khi người dùng nhấn nút "Hoàn Thành"
        }
    };
    const handleElse = () => {
        // Xử lý khi người dùng nhấn nút Tiếp tục
        // Ví dụ: Chuyển sang slide tiếp theo
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
                                    <Text style={styles.rightContent}>Xem tất cả</Text>
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
                                    <TouchableOpacity onPress={handleElse} style={styles.continueButton}>
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
        backgroundColor: 'rgba(255, 122, 0, 1)', // Màu sắc của tiến trình
        borderRadius: 5,
    },
    leftContent: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'rgba(255, 122, 0, 1)',
        flex: 1,
        // alignItems: 'flex-end',
    },
    row: {
        width: '86%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContent: {},
});

export default Tutorial;
