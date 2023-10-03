import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

function RangeSlider({ currentMinValue, currentMaxValue, currentStep, title, unit }) {
    const [sliderValues, setSliderValues] = useState([currentMinValue, currentMaxValue]);

    const handleSliderChange = (values) => {
        setSliderValues(values);
    };
    return (
        <View style={{ flex: 1, width: 200, height: 60 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>{title}</Text>
                <Text>
                    {sliderValues[0]} - {sliderValues[1]} {unit}
                </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 5 }}>
                <MultiSlider
                    values={sliderValues}
                    min={currentMinValue}
                    max={currentMaxValue}
                    step={currentStep}
                    sliderLength={300}
                    onValuesChange={handleSliderChange}
                />
            </View>
        </View>
    );
}

export default RangeSlider;
