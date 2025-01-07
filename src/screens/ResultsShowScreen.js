import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import Mapa from "../components/Mapa";
import Feather from "react-native-vector-icons/Feather";
 
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
 
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
 
  if (!result) {
    return null;
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>

      <View style={styles.subtitle}>
        <Feather name='star' size={20}/>   
        <Text style={{fontSize: 14}}> Avaliação: {result.rating} Estrelas</Text>
      </View>

      <View style={styles.subtitle}>
        <Feather name="phone" size={20}/>
        <Text style={{fontSize: 14}}> Contato: {result.display_phone}</Text>
      </View>

      <FlatList 
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
        />
             

      <View style={styles.location}> 
        {!result.review_count ? <Text>Esse estabelecimento não possui reviews</Text> : <Text>Este estabelecimento possui {result.review_count} review(s)</Text>}
        <Text>Como chegar lá?</Text>
        <Text>{result.location.address1}</Text>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 15,}}>
        <Mapa latitude={result.coordinates.latitude} longitude={result.coordinates.longitude} />
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B0C4DE'
  },
  title: {
    alignSelf:'center', 
    fontSize:18, 
    backgroundColor: 'white', 
    borderRadius: 5, 
    padding: 10,
    marginVertical: 10,
    marginBottom: 12,
    height: 50,
    textAlignVertical: 'center'
  },
  subtitle: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
    paddingBottom: 5,
  },
  image: {
    height: 200,
    width: 300,
    marginRight: 10,
    borderRadius: 8,
  },
  list: {
    paddingLeft: 15,
    marginTop: 15,
    paddingRight: 15,
    paddingBottom: 15
  },
  location: {
    marginLeft: 15,
    alignContent: 'center',
  }
});
 
export default ResultsShowScreen;
