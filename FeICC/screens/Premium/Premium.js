import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const items = [
    { text: 'Khám phá hơn 1000 món ăn mới', image: require('../../assets/v.png') },
    { text: 'Trải nghiệm ẩm thực toàn thế giới', image: require('../../assets/v.png') },
    { text: 'Hiểu rõ thông tin dinh dưỡng chi tiết', image: require('../../assets/v.png') },
    { text: 'Trải nghiệm không quảng cáo', image: require('../../assets/v.png') },
];

function Premium() {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Thành công</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
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
    backButton: {
        position: 'absolute',
        left: 20,
        top: 20,
    },
    backButtonText: {
        fontSize: 24,
    },
});
export default Premium;
