import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';

const notiDatas = [
    {
        id: 1,
        time: '22/5',
        title: 'Bánh canh chả cá Nha Trang',
        content: `
        🍽️✨ 𝐁ữa 𝐓ố𝐢 𝐆𝐢ữa 𝐓ưần 𝐕à 𝐓hần𝐡 𝐁ì𝐧𝐡: 𝐇ương 𝐕ị 𝐓rưyền 𝐓hốn𝐠 🌿✨
        Bạn đã bao giờ cảm thấy mệt mỏi với việc phải suy nghĩ xem hôm nay nấu gì chưa? Đừng lo, vì tôi đang ở đây để chia sẻ một gợi ý thực đơn cực kỳ đơn giản nhưng ngon miệng, đủ chất mà lại vô cùng dễ làm, giúp bạn có thêm ý tưởng cho bữa tối gia đình thêm phần ấm cúng và đầy đủ dinh dưỡng. 🏡💖
        
        🌾 𝐂ơ𝐦 𝐓rắn𝐠 – Đơn giản nhưng không bao giờ thiếu vắng trong mỗi bữa ăn của người Việt.
        🥣 𝐂𝐚𝐧h 𝐃u Đủu – Một chút ngọt ngào, giải nhiệt từ canh đu đủ giúp cân bằng khẩu vị và tốt cho tiêu hóa.
        🥩 𝐓hịt 𝐁a 𝐂hỉ 𝐊ho – Thịt mềm, đậm đà, thấm vị, hương thơm nức nở khắp nhà, đây chính là ngôi sao của bữa tối.
        🥬 𝐑au 𝐃ền Lươc – Giản dị và thanh mát, rau dền không những tốt cho sức khỏe mà còn là một liều thuốc bổ tự nhiên.
        🐟 𝐂á 𝐍gừ Đại 𝐃ườn𝐠 𝐂hiên – Món ăn đậm đà omega-3, thịt cá ngừ chiên giòn tan, hấp dẫn vô cùng.
        
        👩‍🍳 𝐂ách 𝐋àm:
        𝐂ơ𝐦: Nấu cơm với tỉ lệ nước vừa phải để cơm dẻo và thơm mềm.
        𝐂𝐚𝐧h Đu Đủ: Hầm xương lấy nước dùng trong vắt, thêm đu đủ xanh cắt miếng, nấu cho mềm, nêm nếm gia vị vừa miệng.
        𝐓hịt 𝐁a 𝐂hỉ 𝐊ho: Ướp thịt với đường, nước mắm, tiêu, tỏi băm, và ít caramel cho màu, sau đó kho nhỏ lửa đến khi thịt mềm và sánh nước sốt.
        𝐑au 𝐃ền Lươc: Luộc rau dền với nước sôi có pha chút muối, sau đó vớt ra ngâm nước lạnh để giữ màu xanh đẹp mắt.
        𝐂á 𝐍gừ Đại 𝐃ườn𝐠 𝐂hiên: Ướp cá với muối, tiêu, và một ít nước cốt chanh, sau đó chiên trong chảo nóng cho đến khi vàng giòn.
        
        Chỉ với vài bước đơn giản, bạn đã có một bữa tối "đủ đầy" từ protein đến vitamin, từ truyền thống đến hiện đại, vừa dễ làm lại vô cùng thơm ngon. 🌟
        Hãy thử xem, và đừng quên chia sẻ với chúng tôi những khoảnh khắc ấm áp bên mâm cơm gia đình bạn nhé! 📸❤️
        `,
    },
    {
        id: 2,
        time: '22/5',
        title: 'Cá kho tộ',
        content: `sdfsdfsdfsd`,
    },
    {
        id: 3,
        time: '22/6',
        title: 'Tôm rim chua ngọt',
        content: `sdfsdfsdfsdsdfsdf`,
    },
    {
        id: 4,
        time: '22/6',
        title: 'Bánh tráng cuốn thịt luộc',
        content: `sdfsdfsdfsdsdfsdf`,
    },
    {
        id: 5,
        time: '22/6',
        title: 'Cơm gà xào rau củ',
        content: `sdfsdfsdfsdsdfsdf`,
    },
];

const Notfication = () => {
    const groupNotiDatas = notiDatas.reduce((groups, item) => {
        const group = groups[item.time] || [];
        group.push(item);
        groups[item.time] = group;
        return groups;
    }, {});

    return (
        <ScrollView>
            <View style={styles.container}>
                {Object.keys(groupNotiDatas).map((time) => (
                    <View key={time} style={styles.NotificationList}>
                        <View style={styles.timeLine}>
                            <Text style={{ fontWeight: 500, fontSize: 18 }}>{time}</Text>
                        </View>
                        {groupNotiDatas[time].map((notiData) => (
                            <View
                                key={notiData.id}
                                style={{
                                    marginTop: 5,
                                }}
                            >
                                <View
                                    style={{
                                        borderRadius: 8,
                                        flexDirection: 'row',
                                        height: 80,
                                        alignItems: 'center',
                                        borderWidth: 0.5,
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 50,
                                            height: 50,
                                            backgroundColor: '#DDE4EC',
                                            marginHorizontal: 15,
                                            borderRadius: 8,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Image source={require('../../assets/Chef.png')} />
                                    </View>
                                    <View>
                                        <Text
                                            style={{
                                                color: '#97A2B0',
                                            }}
                                        >
                                            Gợi ý món ăn
                                        </Text>
                                        <Text>{notiData.title}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    NotificationList: {
        width: '90%',
    },
    timeLine: {
        marginTop: 15,
    },
});
export default Notfication;
