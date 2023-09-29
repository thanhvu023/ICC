import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Step_Picture = [
    {
        url: require('../../assets/StepImage/Step1.png'),
        title: 'Sơ chế nguyên liệu',
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
    const handleContinue = () => {
        // Xử lý khi người dùng nhấn nút Tiếp tục
        // Ví dụ: Chuyển sang slide tiếp theo
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
                index={2}
                showPagination
                data={Step_Picture}
                snapToAlignment="center"
                style={styles.wrapper}
                renderItem={({ item, index }) => (
                    <View key={item.id} style={styles.slide}>
                        <View key={item.id} style={styles.slide}>
                            <View style={styles.redBox}>
                                <Image source={item.url} style={styles.stepImage} />
                            </View>
                            <View style={styles.blueBox}>
                                <Text style={styles.stepTitle}>{item.title}</Text>
                                {index === Step_Picture.length - 1 ? (
                                    <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
                                        <Text style={styles.continueButtonText}>Hoàn Thành</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={handleElse} style={styles.continueButton}>
                                        <Text style={styles.elseButtonText}>Tiếp tục</Text>
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
    },
    redBox: {
        flex: 1,
        backgroundColor: 'rgba(198, 227, 229, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueBox: {
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
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    continueButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    continueButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default Tutorial;
