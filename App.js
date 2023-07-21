import * as React from 'react';
import { AppState, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './Screens/InicioScreen.js'
import IndicadorScreen from './Screens/IndicadorScreen.js'
import GrafScreen from './Screens/GrafScreen.js'









const Stack = createNativeStackNavigator()


const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () =>{
  return(
    <AuthStack.Navigator initialRouteName={"Inicio"} screenOptions={{  headerShown: false }} >
     <Stack.Screen name="Inicio" component={InicioScreen} />
     <Stack.Screen name="Indicador" component={IndicadorScreen} />
     <Stack.Screen name="Graf" component={GrafScreen} />
     
     
    </AuthStack.Navigator>
  )
}

export default function App({ navigation }) {
  
  return (
    
      <NavigationContainer >
        <Stack.Navigator>
     
            <Stack.Screen options={{headerShown: false}}  name="AuthStack" component={AuthStackScreens}/>
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}