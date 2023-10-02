import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NextButton = ({ handleNext }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#000',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
      }}
      onPress={() => {
        handleNext(); // Gọi hàm xử lý tiếp theo của Onboarding
        navigation.navigate('ACCOUNT'); // Chuyển đến màn hình tiếp theo sau khi nhấn nút "Tiếp tục"
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
        Tiếp tục
      </Text>
    </TouchableOpacity>
  );
};

export default NextButton;
