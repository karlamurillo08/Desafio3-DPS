import React from 'react'; 
import { createStackNavigator } from '@react-navigation'; 
import { NavigationContainer } from '@react-navigation/native';
import InicioSesion from './components/InicioSesion'; 
import PantallaPrincipal from './components/PantallaPrincipal'; 


 const Stack = createStackNavigator(); 
 function MyStack() { 
   return ( 
     
     <Stack.Navigator>
    <Stack.Screen name="InicioSesion" component={InicioSesion} options={{ headerShown: false }} /> 
 <Stack.Screen name="PantallaPrincipal" component={PantallaPrincipal} options={{ headerShown: false }} /> 
 
  </Stack.Navigator> 
  );
  } 
  export default function App() 
  { return ( <NavigationContainer> <MyStack/> </NavigationContainer> ) }