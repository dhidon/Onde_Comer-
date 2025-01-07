import React from "react"
import { View, StyleSheet } from "react-native"
import MapView, {Marker} from "react-native-maps"

const Mapa = ({latitude, longitude}) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }}>
                <Marker 
                    coordinate={{latitude: latitude, longitude: longitude}}
                    title="Localização"
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {  
        height: 300, 
        width: 300, 
        marginTop: 15,
        marginBottom: 15,
    }, 
    map: { 
        ...StyleSheet.absoluteFillObject,
        
    }, 
});

export default Mapa