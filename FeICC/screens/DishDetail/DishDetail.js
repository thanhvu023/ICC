import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import ReadMoreLessButton from '../../navigation/ReadMoreLessButton';
import { useNavigation } from '@react-navigation/native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

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

const Material = [
    {
        title: 'Đậu hũ',
        description: '6 lạng, cắt thành khối vuông',
        id: '1',
    },
    {
        title: 'Nấm mộc nhĩ khô',
        description: '4 miếng',
        id: '2',
    },
    {
        title: 'Nấm mỡ',
        description: '170g, cắt làm tư, bỏ cuống',
        id: '3',
    },
    {
        title: 'Dầu thực vật',
        description: '1/3 chén',
        id: '4',
    },
];
const comment = [
    {
        title: 'Huong',
        description: 'ngon, hợp khẩu vị',
        id: '1',
    },
    {
        title: 'Gia Bảo',
        description: 'Nhìn nhiều vậy thôi chứ dễ nấu!',
        id: '2',
    },
    {
        title: 'Hưng',
        description: 'bị mặn',
        id: '3',
    },
];

const { width, height } = Dimensions.get('window');

const renderItems = (data) => {
    return data.map((item, index) => (
        <View key={item.id} style={styles.itemContainer}>
            <Text style={{ fontSize: 12, color: 'rgba(255, 122, 0, 1)', fontWeight: 'bold' }}>
                BƯỚC {`${index + 1}`}
            </Text>
            <Text style={{ fontSize: 14, color: 'rgba(10, 37, 51, 1)' }}>{item.title}</Text>
        </View>
    ));
};

const renderMaterial = (data) => {
    return data.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
            <Text style={{ fontSize: 16, color: 'rgba(10, 37, 51, 1)' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: 'rgba(10, 37, 51, 1)' }}>{item.description}</Text>
        </View>
    ));
};

const renderComment = (data) => {
    return data.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
            <Text style={{ fontSize: 16, color: 'rgba(10, 37, 51, 1)' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: 'rgba(10, 37, 51, 1)' }}>{item.description}</Text>
        </View>
    ));
};
function DishDetail() {
    const [selectedTab, setSelectedTab] = useState('nguyenlieu');
    const swiperRef = useRef(null);
    const navigation = useNavigation();

    const renderContent = () => {
        if (selectedTab === 'nguyenlieu') {
            return (
                <View style={{ padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                            Nguyên liệu
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>Đặt mua tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 16, color: 'rgba(116, 129, 137, 1)' }}>
                        18 nguyên liệu - bạn chỉ thiếu 2 món!
                    </Text>

                    {renderMaterial(Material)}
                </View>
            );
        } else if (selectedTab === 'chebien') {
            return (
                <View style={{ padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>Chế biến</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgba(255, 122, 0, 1)',
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 80,
                                height: 30,
                            }}
                            onPress={() => navigation.navigate('Tutorial')}
                        >
                            <Text style={{ color: 'white' }}>Bắt đầu</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 16, color: 'rgba(116, 129, 137, 1)' }}>4 bước</Text>
                    {renderItems(Step_Picture)}
                </View>
            );
        }
    };
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
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(221, 228, 236, 1)',
                            width: '80%',
                            borderRadius: 8,
                            marginLeft: 30,
                            padding: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setSelectedTab('nguyenlieu')}
                            style={{
                                padding: 10,
                                backgroundColor: selectedTab === 'nguyenlieu' ? 'rgba(10, 37, 51, 1)' : 'transparent',
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ color: selectedTab === 'nguyenlieu' ? 'white' : 'black' }}>Nguyên liệu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelectedTab('chebien')}
                            style={{
                                padding: 10,
                                backgroundColor: selectedTab === 'chebien' ? 'rgba(10, 37, 51, 1)' : 'transparent',
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ color: selectedTab === 'chebien' ? 'white' : 'black' }}>Chế biến</Text>
                        </TouchableOpacity>
                    </View>
                    {renderContent()}
                    <View style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                                    Đánh giá
                                </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                                    - 23 lượt đánh giá
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>Xem tất cả</Text>
                            </TouchableOpacity>
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

                        {renderComment(comment)}
                    </View>
                    <View style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgba(10, 37, 51, 1)' }}>
                                Những món ngon khác
                            </Text>

                            <TouchableOpacity>
                                <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SwiperFlatList
                        index={0}
                        data={Step_Picture}
                        horizontal
                        snapToAlignment="start"
                        ref={swiperRef}
                        style={{ padding: 5 }}
                        renderItem={({ item }) => (
                            <View
                                key={item.id}
                                style={{ width: 149, height: 189, justifyContent: 'center', margin: 5 }}
                            >
                                <View
                                    style={{
                                        width: 149,
                                        height: 189,
                                        justifyContent: 'center',

                                        borderRadius: 16,
                                        backgroundColor: 'red',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        source={item.url}
                                        style={{ width: '100%', height: '100%' }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        borderBottomLeftRadius: 16,
                                        borderBottomRightRadius: 16,
                                        backgroundColor: 'rgba(10, 37, 51, 0.5)',
                                        width: '100%',
                                        padding: 10,
                                    }}
                                >
                                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>Súp gà</Text>
                                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                        <Image
                                            style={{ marginRight: 2 }}
                                            source={require('../../assets/Heart.png')}
                                        ></Image>
                                        <Text style={{ color: 'white' }}>20 phút</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
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
    itemContainer: {
        borderColor: 'rgba(151, 162, 176, 1)',
        borderBottomWidth: 1,
        padding: 2,
    },
    swiperContainer: {
        flex: 1,
    },
    pagination: {
        bottom: 10,
    },
    activeDot: {
        backgroundColor: 'blue', // Customize the active dot style
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width,
    },
    image: {
        width: '100%',
        height: '70%', // Adjust the height as needed
    },
    slideTitle: {
        marginTop: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
});

export default DishDetail;
