import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from "../../components/colors";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function ForgotPassword() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ marginVertical: 22 }}>
            <Text style={styles.heading}>Quên mật khẩu</Text>
            <Text>
              Xác nhận email cá nhân của bạn. Chúng tôi sẽ gửi mã xác nhận đến
              địa chỉ email bạn cung cấp.
            </Text>
            <Text style={styles.subHeading}>Email</Text>
          </View>
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
            <Pressable
              style={{
                backgroundColor: "#000",
                width: "100%",
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 50,
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
                Gửi yêu cầu xác nhận
              </Text>
            </Pressable >
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
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.black,
  },
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
});
