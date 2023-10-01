import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import ReadMoreLessButton from '../../navigation/ReadMoreLessButton';

const Step_Picture = [
    {
        url: require('../../assets/StepImage/Step1.png'),
        title: 'Cho nấm khô và tảo bẹ kombu vào chén nhỏ hoặc và đổ nước phủ bề mặt. Đặt một miếng khăn giấy lên mặt nước để giữ nấm ngấm đều nước trong 10 phút.',
        id: '1',
    },
    {
        url: require('../../assets/StepImage/Step2.png'),
        title: 'Xay nhuyễn nấm mỡ, xào lửa lớn với dầu thực vật liên tục cho đến khi nấm khô lại và chín vàng đều trong 6 đến 10 phút. Chắt dầu ra chén nhỏ, lấy nấm mỡ đã xào cho một cái tô cỡ vừa, rồi đổ dầu lại vào chảo.',
        id: '2',
    },
    {
        url: require('../../assets/StepImage/Step3.png'),
        title: 'Quay lại chén nấm khô, chắt nước và chừa lại 3/4 cốc nước ngâm. Cho bột bắp và nước tương vào nước ngâm. Xắt nhỏ nấm khô, sau đó cho vào chung với nấm mỡ vừa chiên.',
        id: '3',
    },
    {
        url: require('../../assets/StepImage/Step4.png'),
        title: 'Cho toàn bộ hạt tiêu Tứ Xuyên và ớt vào chảo dầu và đun ở lửa lớn. Nấu cho đến khi toả mùi thơm. Chú ý không nấu quá chín, đề phòng cháy. Chắt dầu lưới lọc mịn, bỏ hạt tiêu và ớt đi, rồi cho dầu trở lại chảo.',
        id: '4',
    },
];

const { height } = Dimensions.get('window');

const renderItems = (data) => {
    return data.map((item, index) => (
        <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.stepTitleBottomSheet}>BƯỚC {`${index + 1}`}</Text>
            <Text>{item.title}</Text>
        </View>
    ));
};
function DishDetail() {
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    <ImageBackground
                        style={styles.imageBackground}
                        source={require('../../assets/StepImage/Step4.png')}
                    >
                        <TouchableOpacity style={styles.closeIcon}>
                            <Image source={require('../../assets/CloseSquare.png')} resizeMode="contain"></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeIcon}>
                            <Image source={require('../../assets/Heart.png')} resizeMode="contain"></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.contentWrapper}>
                        <View>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Đậu hũ Tứ Xuyên</Text>
                        </View>
                        <View style={styles.content}>
                            <View>
                                <Text style={{ marginRight: 10 }}>4.5</Text>
                            </View>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/Star.png')}
                                resizeMode="contain"
                            ></Image>
                            <Image
                                style={{ marginRight: 2 }}
                                source={require('../../assets/StarOutline.png')}
                                resizeMode="contain"
                            ></Image>
                        </View>
                        <View style={styles.tagWrapper}>
                            <View style={styles.tagView}>
                                <Text
                                    style={{
                                        marginTop: 1,
                                        marginBottom: 1,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        color: 'white',
                                    }}
                                >
                                    Món cay
                                </Text>
                            </View>
                            <View style={styles.tagView}>
                                <Text
                                    style={{
                                        marginTop: 1,
                                        marginBottom: 1,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        color: 'white',
                                    }}
                                >
                                    Món xào
                                </Text>
                            </View>
                            <View style={styles.tagView}>
                                <Text
                                    style={{
                                        marginTop: 1,
                                        marginBottom: 1,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        color: 'white',
                                    }}
                                >
                                    Ẩm thực Trung
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentTag}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/DishDetail/Calos.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>120 Kcal</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/DishDetail/TimeCircle.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>30 phút</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentTag}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/BottomBarIcons/Group.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>4 người</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(221, 228, 236, 1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    marginRight: 2,
                                }}
                            >
                                <Image
                                    style={{ marginRight: 2 }}
                                    source={require('../../assets/DishDetail/GroupMenu.png')}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                            <View>
                                <Text style={{ marginRight: 10 }}>Trung bình</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <ReadMoreLessButton
                            text="Đậu phụ ma bà (tiếng Trung: 麻婆豆腐; bính âm: mápó dòufu) còn có tên gọi khác là Đậu phụ Tứ Xuyên, là một trong những món ăn nổi tiếng của tỉnh Tứ Xuyên. Đậu phụ ma bà do một người phụ nữ tên Trần Ma Bà đã sáng tạo nên món ăn ngon miệng, từ đấy dân gian đã lấy tên người phụ nữ đó đặt cho món ăn này."
                            maxLength={50}
                        />
                    </View>
                    {renderItems(Step_Picture)}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        height: height / 2.5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeIcon: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    contentWrapper: {
        padding: 10,
        paddingTop: 20,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
    },
    content: {
        flexDirection: 'row',
    },
    tagWrapper: {
        flexDirection: 'row',
    },
    tagView: {
        backgroundColor: 'rgba(0, 147, 157, 1)',
        borderRadius: 8,
        margin: 2,
    },
    contentTag: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    stepTitleBottomSheet: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
});

export default DishDetail;
