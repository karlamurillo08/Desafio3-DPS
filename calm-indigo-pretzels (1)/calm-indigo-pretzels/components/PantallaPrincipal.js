
import React, { useState, useEffect } from 'react'; 
import { View, Text, Image, TouchableOpacity, Alert, FlatList, StyleSheet, Input, Icon } from 'react-native'; 

const PantallaPrincipal = ({ navigation }) => { 
  const [elementos, setElementos] = useState([]); 
const [total, setTotal] = useState(0); 
const uri = 'https://66f726ffb5d85f31a34220f7.mockapi.io/api/v1/books';
useEffect(() => { cargarRegistros();  
const unsubscribe = navigation.addListener('focus', () => { 
}); return unsubscribe; },); const cargarRegistros = () => { fetch(`${uri}/libros`) .then(response => response.json()) .then(responseJson => { 
  const listado = responseJson.libros; 
console.log(listado); 
setElementos(listado); setTotal(listado.length); }) 
.catch(error => console.error(error)); }; 
return ( <View style={styles.container}> 
<Text style={styles.totalText}>{total} productos</Text> 
</View> ); }; 
const styles = StyleSheet.create({ container: { flex: 1, padding: 10, }, totalText: { fontSize: 18, textAlign: 'center', height: 40, marginTop: 10, backgroundColor: 'lightgray', textAlignVertical: 'center', borderRadius: 10, marginLeft: 10, marginRight: 10, }, itemContainer: { flexDirection: 'row', marginTop: 15, marginLeft: 2, }, itemImage: { width: 90, height: 90, }, itemDetails: { height: 80, marginLeft: 5, }, itemName: { fontSize: 18, }, itemPrice: { fontSize: 16,fontWeight: 'bold', }, itemStock: { fontSize: 14, }, addButton: { position: 'absolute', bottom: 10, right: 10, width: 70, height: 70, backgroundColor: 'red', borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', }, }); 
export default PantallaPrincipal;