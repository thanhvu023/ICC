import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from "../../components/colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function SignUpNew() {
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ marginVertical: 22 }}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>
            <Text style={styles.heading}>Tạo tài khoản</Text>
            <View style={styles.bodyForm}>
              <Text style={styles.subHeading}>Họ và tên</Text>
              <View style={{ marginBottom: 12 }}>
                <View style={styles.inputContainer}>
                  <Icon
                    name="user"
                    size={20}
                    color="gray"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập họ và tên..."
                    placeholderTextColor={COLORS.black}
                    keyboardType="email-address"
                  />
                </View>
              </View>
            </View>
            <View style={styles.bodyForm}>
              <Text style={styles.subHeading}>Số điện thoại</Text>
              <View style={{ marginBottom: 12 }}>
                <View style={styles.inputContainer}>
                  <Icon
                    name="phone"
                    size={20}
                    color="gray"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập số điện thoại"
                    placeholderTextColor={COLORS.black}
                    keyboardType="email-address"
                  />
                </View>
              </View>
            </View>
            <View style={styles.bodyForm}>
              <Text style={styles.subHeading}>Email</Text>
              <View style={{ marginBottom: 12 }}>
                <View style={styles.inputContainer}>
                  <Icon
                    name="envelope"
                    size={20}
                    color="gray"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập email tại đây..."
                    placeholderTextColor={COLORS.black}
                    keyboardType="email-address"
                  />
                </View>
              </View>
            </View>
            <View style={styles.bodyForm}>
              <Text style={styles.subHeading}>Mật khẩu</Text>
              <View style={{ marginBottom: 12 }}>
                <View style={styles.inputContainer}>
                  <Icon
                    name="lock"
                    size={20}
                    color="gray"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập mật khẩu ..."
                    placeholderTextColor={COLORS.black}
                    keyboardType="email-address"
                  />
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={{
              backgroundColor: "#000",
              width: "100%",
              paddingVertical: 10,
              borderRadius: 15,
            }}
            onPress={() => navigation.navigate("CONFIRMOTP")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Tiếp tục
            </Text>
          </Pressable>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.rules}>Bằng việc đăng ký, bạn đồng ý với</Text>
            <View style={styles.rulesAndScurity}>
              <Pressable>
                <Text style={styles.underline}>Điều khoản dịch vụ</Text>
              </Pressable>
              <Text> & </Text>
              <Pressable>
                <Text style={styles.underline}>Chính sách bảo mật</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.black,
  },
  bodyForm: {},
  inputContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 22,
    opacity: 0.5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  rules: {
    textAlign: "center",
  },
  rulesAndScurity: {
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: COLORS.black,
  },
  underline: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  backButtonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
