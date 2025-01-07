import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons'

const LocationSearchBar = ({location, onLocationChange}) => {
    return (
        <View style={styles.bar}>
            <Feather name="map" style={styles.icon}/>
            <TextInput 
                placeholder="Onde você quer comer?"
                style={styles.input}
                value={location}
                onChangeText={newLocation => onLocationChange(newLocation)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 1,

    },
    input: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        marginHorizontal: 10
    }
})

 export default LocationSearchBar