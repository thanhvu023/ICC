import React, { useState, useRef } from 'react';
import { View, Pressable, Text, StyleSheet, FlatList, Animated, Dimensions } from 'react-native';
import dataSlide from './dataSlide';
import OnboardingItem from '../OnboardingItem';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default Onboarding2 = () => {
  const navigation = useNavigation();
  const lottieSources = [
    require('../../../assets/animations/ani1.json'),
    require('../../../assets/animations/cook1.json'),
    require('../../../assets/animations/chef.json'),
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');
  const flatListRef = useRef(null); 

  const renderItem = ({ item, index }) => (
    <View style={styles.slideContainer}>
      <LottieView
        style={{ flex: 1 }}
        source={lottieSources[index]}
        autoPlay
        loop
      />
      <OnboardingItem item={item} />
    </View>
  );

  const handleNext = () => {
    const nextIndex = Math.ceil(scrollX.__getValue() / width) + 1;

    if (nextIndex < dataSlide.length ) {
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      navigation.navigate('WELCOME');
    }
  };

  const handleSkip = () => {
    navigation.navigate('WELCOME'); 
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={dataSlide}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
      <View style={styles.fluidIndicatorContainer}>
        {dataSlide.map((_, i) => {
          const scale = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.8, 1.2, 0.8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i.toString()}
              style={[styles.fluidIndicatorDot, { transform: [{ scale }] }]}
            />
          );
        })}
      </View>
      
      <Pressable 
        onPress={handleNext}
        style={styles.nextButton}
      >
        <Text style={styles.nextButtonText}>Tiếp tục</Text>
      </Pressable>

      <Pressable 
        onPress={handleSkip}
        style={styles.skipButton}
      >
        <Text style={styles.skipButtonText}>Bỏ qua</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 500,
  },
  fluidIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  fluidIndicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#042628', 
    marginHorizontal: 8,
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#042628',
    borderRadius: 10,
    width:'70%', 
    margin: 30, 
    alignItems: 'center'
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
  skipButton: {
    position: 'absolute',
    top: 90,
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skipButtonText: {
    color: '#0A2533',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
