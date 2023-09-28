import { View, Text, Image, Button,TouchableOpacity  } from 'react-native'
import React from 'react'
import COLORS from '../../components/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation(); 

  return (
    <LinearGradient
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}

      colors={[COLORS.secondary, COLORS.secondary]}
    >
      <View style={{ flex: 1 }}>
        <View >
          <Image
            source={require('../../assets/welcome.png')}
            style={{
              height: 300,
              width: 300,
              marginTop: 100
            
            }}
          />
        </View>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            fontSize: 32,
            fontWeight: '700',
            color: COLORS.white,
          }}>Làm bếp thật dễ dàng</Text>
          <Text style={{
            fontSize: 32,
            fontWeight: '700',
            color: COLORS.white,
          }}>cùng I.T Can Cook!</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              width: '100%', 
              paddingVertical: 10, 
              borderRadius: 5, 
              marginTop: 20, 
            }}
            onPress={() => navigation.navigate('ACCOUNT')}

          >
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#FFFFFF', 
              textAlign: 'center', 
            }}>Đăng ký</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
            <Text style={{ color: COLORS.white,fontSize:18 }}>Đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ACCOUNT')}>
              <Text style={{ color: COLORS.white, textDecorationLine: 'underline',fontSize:18, fontWeight:'bold' }}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Welcome
