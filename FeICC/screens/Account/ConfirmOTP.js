import { View, Text, SafeAreaView, TextInput, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../components/colors';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function ConfirmOTP() {
    const navigation = useNavigation();
    const numberOfInputs = 4;
    const [codes, setCodes] = useState(Array(numberOfInputs).fill(''));
    const handleCodeChange = (text, index) => {
        if (/^\d*$/.test(text) && text.length <= 1) {
            const newCodes = [...codes];
            newCodes[index] = text;
            setCodes(newCodes);
        }
    };
    const [isVerified, setIsVerified] = useState(false);
    const handleConfirm = () => {
        if (codes.join('') === '3664') {
            setIsVerified(true);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Text style={styles.backButtonText}>←</Text>
                        </Pressable>
                        <Text style={styles.heading}>Xác nhận OTP</Text>
                        <Text>Chúng tôi đã gửi mã xác nhận về điện thoại bạn, Hãy kiểm tra tin nhắn nhé!</Text>
                    </View>
                    <View style={styles.containerOTP}>
                        {Array.from({ length: numberOfInputs }).map((_, index) => (
                            <TextInput
                                key={index}
                                style={styles.codeOTP}
                                keyboardType="numeric"
                                maxLength={1}
                                value={codes[index]}
                                onChangeText={(text) => handleCodeChange(text, index)}
                            />
                        ))}
                    </View>
                    {isVerified ? (
                        // Hiển thị thông báo đăng ký thành công và nút chuyển đến trang đăng nhập
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ fontSize: 16, color: 'green' }}>Đăng ký thành công!</Text>
                            <Pressable
                                style={{
                                    backgroundColor: '#000',
                                    width: '100%',
                                    paddingVertical: 10,
                                    borderRadius: 15,
                                    marginTop: 20,
                                }}
                                onPress={() => navigation.navigate('ACCOUNT')}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#FFFFFF',
                                        textAlign: 'center',
                                    }}
                                >
                                    Đến trang đăng nhập
                                </Text>
                            </Pressable>
                        </View>
                    ) : (
                        // Hiển thị nút Confirm
                        <Pressable
                            style={{
                                backgroundColor: '#000',
                                width: '100%',
                                paddingVertical: 10,
                                borderRadius: 15,
                                marginTop: 20,
                            }}
                            onPress={handleConfirm}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                }}
                            >
                                Confirm
                            </Text>
                        </Pressable>
                    )}
                    <Pressable>
                        <Text style={styles.resendCode}>Resend Code</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
        color: COLORS.black,
        textAlign: 'center',
    },
    containerOTP: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    codeOTP: {
        width: 64,
        height: 64,
        borderRadius: 10,
        backgroundColor: '#dde4ec',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '600',
    },
    resendCode: {
        textAlign: 'center',
        marginVertical: 12,
        fontSize: 15,
        fontWeight: 'bold',
    },
    backButtonText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.black,
    },
});
