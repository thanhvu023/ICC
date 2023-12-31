import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userInfo = {
    name: 'Huỳnh Thanh Vũ',
    phone: '0909336376',
    email: 'huynhthanhvu115@gmail.com',
    password: 'Vu@336376',
    gender: '',
    birthYear: '',
};

function DetailProfile() {
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            navigation.navigate('ACCOUNT');
            console.error('Đăng xuất thành công!');
        } catch (error) {
            console.error('Lỗi khi đăng xuất', error);
        }
    };
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/ProfileIcon/avatar.jpg')} style={styles.profileImage} />
            <ScrollView style={styles.wrapper}>
                <Text style={styles.detailTitle}>Họ và tên</Text>
                <TextInput style={styles.input} value={userInfo.name} />
                <Text style={styles.detailTitle}>Số điện thoại</Text>
                <TextInput style={styles.input} value={userInfo.phone} keyboardType="phone-pad" />
                <Text style={styles.detailTitle}>Email</Text>
                <TextInput style={styles.input} value={userInfo.email} keyboardType="email-address" />
                <Text style={styles.detailTitle}>Mật khẩu</Text>
                <TextInput style={styles.input} value={userInfo.password} secureTextEntry={true} />
                {/* <Text style={styles.detailTitle}>Giới tính</Text>
                <TextInput style={styles.input} value={userInfo.gender} />
                <Text style={styles.detailTitle}>Năm sinh</Text>
                <TextInput style={styles.input} value={userInfo.birthYear.toString()} /> */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.completeButtonText}>Đăng Xuất</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    wrapper: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
    },
    profileImage: {
        width: 112,
        height: 112,
        borderRadius: 75,
        borderColor: 'rgba(255, 122, 0, 1)',
        borderWidth: 3,
        marginTop: 10,
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(221, 228, 236, 1)',
        borderRadius: 8,
        marginBottom: 10,
        padding: 5,
        width: '100%',
    },
    completeButton: {
        width: '100%',
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
        backgroundColor: 'rgba(255, 122, 0, 1)',
    },
    completeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    logoutButton: {
        width: '100%',
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
        backgroundColor: 'rgba(255, 122, 0, 1)',
    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});

export default DetailProfile;
