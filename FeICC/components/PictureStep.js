import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

function PictureStep({ list }) {
    return (
        <FlatList
            data={list}
            horizontal
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={{ marginLeft: 10 }}>
                        <View style={styles.card}>
                            <View style={styles.imageBox}>
                                <Image source={item.url} style={styles.image} />
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
        ></FlatList>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 340,
        height: 250,
    },
    imageBox: {
        width: 340,
        height: 250,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: '#C6E3E5',
    },
    image: {
        flex: 1,
    },
});

export default PictureStep;
