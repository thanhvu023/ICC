import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const userData = {
    name: 'Trần Hoàng Lâm',
    username: 'johndoe123',
    profileImage: require('../../assets/StepImage/Step4.png'),
};

function Profile() {
    const navigation = useNavigation();
    const showDevelopmentAlert = () => {
        Alert.alert(
            'Thông báo',
            'Tính năng đang được phát triển',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                },
            ],
            { cancelable: false },
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.profileBox}>
                <Image source={userData.profileImage} style={styles.profileImage} />
                <Text style={styles.name}>{userData.name}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DetailProfile')} style={styles.buttonDetail}>
                    <Image
                        source={require('../../assets/arrowRight.png')}
                        style={styles.buttonDetail}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.premiumBox}>
                <Text style={styles.premiumTitle}>Nâng Cấp Ngay ✨️</Text>
                <Text style={styles.premiumComment}>Và nhận 1000+ món ăn mới</Text>
            </View>
            <View style={styles.myDishesBox}>
                <TouchableOpacity onPress={showDevelopmentAlert} style={styles.myDishesButton}>
                    <Image
                        source={require('../../assets/ProfileIcon/myDishes.png')}
                        style={styles.buttonDishes}
                        resizeMode="contain"
                    />
                    <Text>Bữa ăn của tôi</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showDevelopmentAlert} style={styles.favoriteDishesButton}>
                    <Image
                        source={require('../../assets/ProfileIcon/favoriteDishes.png')}
                        style={styles.buttonDishes}
                        resizeMode="contain"
                    />
                    <Text>Món ăn yêu thích</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.notiBox}>
                <View onPress={showDevelopmentAlert} style={styles.notiContent}>
                    <Image
                        source={require('../../assets/ProfileIcon/noti.png')}
                        style={styles.buttonDetail}
                        resizeMode="contain"
                    />
                    <Text style={styles.notiTextContent}>Thông báo</Text>
                </View>
                <TouchableOpacity onPress={showDevelopmentAlert} style={styles.buttonDetail}>
                    <Image
                        source={require('../../assets/arrowRight.png')}
                        style={styles.buttonDetail}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.notiBox}>
                <View style={styles.notiContent}>
                    <Image
                        source={require('../../assets/ProfileIcon/help.png')}
                        style={styles.buttonDetail}
                        resizeMode="contain"
                    />
                    <Text style={styles.notiTextContent}>Trợ giúp</Text>
                </View>
                <TouchableOpacity onPress={showDevelopmentAlert} style={styles.buttonDetail}>
                    <Image
                        source={require('../../assets/arrowRight.png')}
                        style={styles.buttonDetail}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.rateBox}>
                <View>
                    <Text style={styles.rateText}>Bạn thích dùng ICC?</Text>
                    <Text style={styles.rateText}>Hãy cho chúng tôi 5 sao nhé!</Text>
                </View>
                <TouchableOpacity onPress={showDevelopmentAlert} style={styles.rateButton}>
                    <Text style={styles.rateTextButton}>Đánh giá</Text>
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
    buttonDishes: {
        width: 29,
        height: 28,
    },
    premiumBox: {
        width: '80%',
        height: '13%',
        backgroundColor: 'rgba(255, 122, 0, 1)',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingLeft: 16,
        marginTop: 20,
    },
    premiumTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    premiumComment: {
        fontSize: 16,
        color: 'white',
    },
    myDishesBox: {
        width: '80%',
        height: '13%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    myDishesButton: {
        width: '48%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        alignItems: 'center',
        justifyContent: 'center',
    },
    favoriteDishesButton: {
        width: '48%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        alignItems: 'center',
        justifyContent: 'center',
    },
    notiBox: {
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
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 10,
    },
    notiContent: {
        flexDirection: 'row',
    },
    notiTextContent: {
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 5,
    },
    rateBox: {
        width: '80%',
        height: '15%',
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'rgba(151, 162, 176, 1)',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 10,
    },
    rateText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    rateButton: {
        backgroundColor: 'rgba(255, 122, 0, 1)',
        borderRadius: 8,
        width: 69,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rateTextButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Profile;
