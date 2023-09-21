import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react'

const NextButton = ({ isLight, ...props }) => (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    buttonContainer: {
      width: '70%',
      backgroundColor: 'blue', // Màu nền của nút Next
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white', // Màu chữ của nút Next
      fontSize: 16,
    },
  });
  
  export default NextButton;