import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange}) => {
    return (
        <View style={styles.bar}>
            <Ionicons name='pizza' style={styles.icon}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="O que você quer comer?" 
                style={styles.input}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        marginTop: 10,
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

export default SearchBar