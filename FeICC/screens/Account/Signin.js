import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextBox from 'react-native-password-eye';
import COLORS from '../../components/colors';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const sendLoginRequest = async (email, password) => {
        const apiUrl = 'https://exe201-icc.azurewebsites.net/api/v1/auth/SignIn';

        const requestData = {
            email: email,
            password: password,
        };

        try {
            const response = await Axios.post(apiUrl, requestData);

            await AsyncStorage.setItem('token', response.data.message);

            console.log('Đăng nhập thành công');
            // console.log(response.data.message);
            navigation.navigate('BottomTabNavigator');
        } catch (error) {
            console.error('Đăng nhập thất bại', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <View>
                        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Text style={styles.backButtonText}>←</Text>
                        </Pressable>
                        <Text style={styles.heading}>Đăng nhập</Text>
                    </View>

                    <Text style={styles.subHeading}>Email hoặc số điện thoại</Text>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <View style={styles.inputContainer}>
                        <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập tại đây..."
                            placeholderTextColor={COLORS.black}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
                <View style={{ marginVertical: 12 }}>
                    <Text style={styles.subHeading}>Mật khẩu</Text>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={20} color="gray" style={styles.icon2} />
                        <TextBox
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="Mật khẩu"
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.black}
                        />
                    </View>
                </View>
                <Pressable
                    style={{
                        backgroundColor: '#000',
                        width: '100%',
                        paddingVertical: 10,
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                    onPress={() => {
                        sendLoginRequest(email, password);
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#FFFFFF',
                            textAlign: 'center',
                        }}
                    >
                        Đăng nhập
                    </Text>
                </Pressable>

                <Pressable
                    style={{
                        marginTop: 20,
                        flex: 1,
                        opacity: 0.6,
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('FORGOTPASSWORD')}
                >
                    <Text>Bạn quên mật khẩu?</Text>
                </Pressable>

                <Text
                    style={{
                        marginTop: 20,
                        flex: 1,
                        opacity: 0.6,
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    Hoặc tiếp tục với
                </Text>

                <Pressable
                    style={{
                        backgroundColor: '#F06155',
                        width: '100%',
                        paddingVertical: 10,
                        borderRadius: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate('ACCOUNT')}
                >
                    <Icon name="google" size={18} color="#FFFFFF" style={{ marginRight: 10 }} />
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#FFFFFF',
                            textAlign: 'center',
                        }}
                    >
                        Đăng nhập với Google
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: '#1E75D3',
                        width: '100%',
                        paddingVertical: 10,
                        borderRadius: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                        marginBottom: 10,
                    }}
                    onPress={() => navigation.navigate('PREMIUM')}
                >
                    <Icon name="facebook" size={18} color="#FFFFFF" style={{ marginRight: 10 }} />
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#FFFFFF',
                            textAlign: 'center',
                        }}
                    >
                        Đăng nhập với Facebook
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
        marginLeft: 130,
        color: COLORS.black,
    },
    subHeading: {
        fontSize: 16,
        color: COLORS.black,
    },
    inputContainer: {
        width: '100%',
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 0.5,
        justifyContent: 'center',
        paddingLeft: 22,
        opacity: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    icon: {
        paddingRight: 10,
    },
    icon2: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: COLORS.black,
    },
    inputPassword: {
        flex: 1,
        fontSize: 16,
        color: COLORS.black,
    },
    backButton: {},
    backButtonText: {
        fontSize: 24,
    },
    backButtonText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.black,
    },
});
