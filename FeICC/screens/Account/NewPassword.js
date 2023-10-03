import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TextBox from "react-native-password-eye";
import COLORS from "../../components/colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function NewPassword() {
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>
          <Text style={styles.heading}>Tạo mật khẩu mới</Text>
          <Text style={{ fontSize: 16, color: "#48525F" }}>
            Mật khẩu mới của bạn phải khác với các mật khẩu trước
          </Text>
        </View>
        <View>
          <Text style={styles.subHeading}>Mật khẩu mới</Text>
          <View>
            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="gray" style={styles.icon} />
              <TextBox
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Mật khẩu"
                secureTextEntry={true}
                placeholderTextColor={COLORS.black}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#97A2B0" }}>
              Mật khẩu phải có ít nhất 8 ký tự
            </Text>
            <Icon name="check" size={15} color="#FF7A00"/>
          </View>
        </View>
        <View style={{ marginVertical: 12 }}>
          <Text style={styles.subHeading}>Nhập lại mật khẩu mới</Text>
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
        </View>
        <Pressable
          style={{
            backgroundColor: "#000",
            width: "100%",
            paddingVertical: 10,
            borderRadius: 15,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("ACCOUNT")}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Tạo mật khẩu mới
          </Text>
        </Pressable>
      </View>
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
  inputContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 0.5,
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
  inputPassword: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
  },
  backButtonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
