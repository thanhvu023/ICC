import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const userData = {
    name: 'Trần Hoàng Lâm',
    username: 'johndoe123',
    bio: 'Frontend Developer',
    profileImage: require('../../assets/StepImage/Step4.png'), // Đường dẫn đến hình ảnh của người dùng
};

function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.profileBox}>
                <Image source={userData.profileImage} style={styles.profileImage} />
                <Text style={styles.name}>{userData.name}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DetailProfile')} style={styles.buttonDetail}>
                    <Image source={require('../../assets/arrowRight.png')} style={styles.buttonDetail} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    profileBox: {
        width: '80%',
        height: '13%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 75,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonDetail: {
        width: 16,
        height: 16,
    },
});

export default Profile;
