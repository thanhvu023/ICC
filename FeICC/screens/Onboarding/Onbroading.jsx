import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import dataSlide from './custome/dataSlide';
export default function Onbroading() {
    const navigation = useNavigation();
    const animationRef = useRef < LottieView > null;
    useEffect(() => {
        animationRef.current?.play();

        animationRef.current?.play(30, 120);
    }, []);
    const handleDone = () => {
        navigation.navigate('WELCOME');
    };
    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarColor="red"
                bottomBarHighlight={false}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    style={{ flex: 1 }}
                                    source={require('../../assets/animations/ani1.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Khám phá thực đơn đáp ứng đầy đủ sức khoẻ!',
                        subtitle: '1500+ bữa ăn tiêu chuẩn giúp bạn đủ chất mà vẫn “khoẻ túi tiền”',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    style={{ flex: 1 }}
                                    source={require('../../assets/animations/test2.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Cần gì ư? Chúng tôi có đủ!',
                        subtitle: 'Kết nối với những đối tác siêu thị ngon-bổ-rẻ ',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    style={{ flex: 1 }}
                                    source={require('../../assets/animations/chef.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Kết nối với nhiều chuyên gia',
                        subtitle: 'Bạn có thắc  ắc? Hãy trò chuyện với những đầu bếp thật nhé',
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottie: {
        width: 400,
        height: 300,
    },
    fluidIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicatorDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginHorizontal: 5,
    },
});
