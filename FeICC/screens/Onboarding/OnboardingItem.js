import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React from 'react';

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.image}>
        <Image
          style={{ flex: 1, width: '100%', resizeMode: 'contain' }}
          source={require('../../assets/animations/ani1.json')}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title} >
            {item.title}
          </Text>
          <Text style={styles.subtitle} >
            {item.subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  textContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    color: '#030319',
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '300',
    color: '#030319',
    textAlign: 'center',
  },
});
