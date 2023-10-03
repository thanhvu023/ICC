import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ReadMoreLessButton = ({ text, maxLength }) => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <View>
            <Text>{showFullText ? text : `${text.slice(0, maxLength)}...`}</Text>
            <TouchableOpacity style={{}} onPress={toggleShowFullText}>
                <Text style={{ fontWeight: 'bold' }}>{showFullText ? 'Ẩn' : 'Xem thêm'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReadMoreLessButton;
