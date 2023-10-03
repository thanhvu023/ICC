import { View, Text,StyleSheet, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

export default  Paginator=({data, scrollX})=> {
    const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection:'row', height:64}}>
      {data.map((_, i )=>{
        const inputRange = [(i-1)*width, i*width, (i+1)*width];
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange:[10,20,10],
            extrapolate:'clamp',
        })
         return <Animated.View style={[styles.dot, {width:10}]} key={i.toString()}/>
      }
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    dot:{
        height:10,
        borderRadius: 5,
        backgroundColor:'#042628',
        marginHorizontal:8
    }
});