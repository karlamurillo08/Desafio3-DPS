import React, { useState } from 'react'; 
import { Icon, View, Text, Image, TouchableOpacity, Alert, StyleSheet, Input, Buttom} from 'react-native'; 

const PantallaInicio = ({ navigation }) => { const [usuario, setUsuario] = useState(''); 
const [contrasena, setContrasena] = useState(''); const uri = 'https://66f726ffb5d85f31a34220f7.mockapi.io/api/v1/users'; const entrar = () => { if (!usuario || !contrasena) { Alert.alert('Aviso', 'No introdujo datos'); return; } fetch(`${uri}/usuarios/login`, { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({ username: usuario, // O 'Ricardo' si es un valor fijo 
password: contrasena // O '123456' si es un valor fijo 
}), }) 
.then(response => response.json()) .then(responseJson => { 
const encontrado = responseJson; 
console.log(encontrado); 
if (encontrado && encontrado.message === 'Encontrado') { navigation.navigate('PantallaPrincipal'); } else { Alert.alert('Usuario', 'No encontrado!!'); } })
.catch(error => { console.error(error); Alert.alert('Aviso', 'Error de Internet!!'); }); }; return ( <View style={{ flex: 1, padding: 10 }}> <Text style={styles.title}>Bienvenidos</Text> <Image style={styles.image} source={require('../assets/snack-icon.png')} /> }; <View style={styles.inputContainer}> <Input placeholder='USUARIO' onChangeText={setUsuario} rightIcon={<Icon name='user' size={24} color='black' />} /> <Input placeholder='CONTRASEÑA' onChangeText={setContrasena} secureTextEntry={true} rightIcon={<Icon name='lock' size={24} color='black' />} /> </View> <TouchableOpacity style={styles.button} onPress={entrar}> <Text style={styles.buttonText}>Entrar</Text> </TouchableOpacity> </View> 
); 
};
const styles = StyleSheet.create({ title: { fontSize: 34, marginTop: 25, alignSelf: 'center', }, image: {width: 200, height: 160, alignSelf: 'center', marginTop: 15, }, inputContainer: { marginLeft: 10, marginRight: 10, }, button: { height: 50, backgroundColor: 'red', marginTop: 15, borderRadius: 5, justifyContent: 'center', marginLeft: 20, marginRight: 20, }, buttonText: { color: 'white', fontSize: 22, textAlign: 'center', textAlignVertical: 'center', 
}, }); 
export default PantallaInicio;