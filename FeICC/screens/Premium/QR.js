import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-elements';
export default function QR() {
  const qrData = 'https://www.facebook.com/thanhvu.huynh.39904/';
  const navigation = useNavigation();
const qrImage = require('../../assets/qr.png');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Nâng cấp</Text>
        <Text style={styles.qr}> 
          Dễ thôi! Chạm vào hoặc scan mã QR dưới đây để thanh toán qua ví điện tử MoMo.
        </Text>
      </View>

      <QRCode
      value={qrData}
      style={{width:500,
      height:500
      }}
    />

      <View style={styles.additionalInfo}>
        <InfoItem label="Chủ tài khoản:" value="Nguyễn Văn A" />
        <InfoItem label="Số điện thoại:" value="0123456789" />
        <InfoItem label="Đơn hàng:" value="#24144" />
        <InfoItem label="Số tiền:" value="59.000 VND" />
        <Text style={styles.boldText}>
          Bạn sẽ thanh toán 59.000 VND ngay và gia hạn tự động vào tháng sau (18/10/2023)
        </Text>
      </View>
    </View>
  );
}

const InfoItem = ({ label, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.boldText}>{label}</Text>
    <Text> {value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  infoContainer: {
    margin: 20,
  },
  qrContainer: {
  borderRadius: 0.5,
   flex:1,
   width:200

  },
  additionalInfo: {
    marginTop: 20,
    alignItems: 'center',
    margin: 40,
  },
  boldText: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginLeft: 50,
    fontWeight: '700',
  },
  qr: {
    marginBottom: 40,
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
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
