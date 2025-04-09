import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CoinPicker({ selected, onChange }) {
    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={selected}
                onValueChange={onChange}
                style={styles.picker}
                dropdownIconColor="#333"
            >
                <Picker.Item label="Cara" value="cara" />
                <Picker.Item label="Coroa" value="coroa" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 2,
        borderColor: '#444',
        borderRadius: 12,
        backgroundColor: '#eee',
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        color: '#222',
    },
});
