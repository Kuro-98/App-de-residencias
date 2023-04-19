import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import MapView from 'react-native-maps';

import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './views/Onboarding';
import Inicio from './views/Inicio';
import Login from './views/login';
import inicio from './views/MisViajes';
import MisViajes from './views/MisViajes';
import Registro from './views/Registro';
import Perfil from './views/Perfil';
import Lateral from './views/Lateral';
import Mensajes from './views/Mensajes';
import Chat from './views/Chat';
import AcercaDe from './views/AcercaDe';
import Pagar from './views/Pagar';
import Estimacion from './views/Estimacion';
import NuevoPedido from './views/NuevoPedido';
import Rastreo from './views/Rastreo';
import Recuperacion from './views/Recuperacion';
import Auxiliar from './views/Auxiliar';
import PagoPaynet from './views/PagoPaynet';
import Terminos from './views/Terminos';
import AvisoP from './views/AvisoP';
import Transportista from './views/Transportista';
import Verificacion from './views/Verificacion';
import Launch from './views/Launch';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CARGANDO">
          <Stack.Screen name="Oboarding" component={Onboarding} />
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Viajes" component={MisViajes} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="Lateral" component={Lateral} />
          <Stack.Screen name="Mensajeria" component={Mensajes} />
          {/* Componente para mensaje */}
          <Stack.Screen name="Enviar Mensaje" component={Chat} />
          {/* Envio de mensaje*/}
          <Stack.Screen name="Acerca De" component={AcercaDe} />
          <Stack.Screen name="Pago" component={Pagar} />
          <Stack.Screen name="Estimacion" component={Estimacion} />
          <Stack.Screen name="Nuevo Pedido" component={NuevoPedido} />
          <Stack.Screen name="Rastreo" component={Rastreo} />
          <Stack.Screen name="Recuperar Contraseña" component={Recuperacion} />
          <Stack.Screen name="Pagado" component={Auxiliar} />
          <Stack.Screen name="Paynet" component={PagoPaynet} />
          <Stack.Screen name="Terminos y Condiciones" component={Terminos} />
          <Stack.Screen name="Aviso de Privacidad" component={AvisoP} />
          <Stack.Screen name="Transportista" component={Transportista} />
          <Stack.Screen name="CARGANDO" component={Launch} />
          <Stack.Screen name="Verificar Codigo" component={Verificacion} />

          <Stack.Screen
            name="Codigo de Verificacion"
            component={Verificacion}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#2AFD98',
    flex: 1,
  },
  separador: {marginVertical: 10},
  logo: {
    marginTop: 40,
    height: 90,
    marginHorizontal: 150,

    backgroundColor: '#3E3D3F',
  },
  banner: {
    height: 219,
  },

  banner2: {
    alignContent: 'center',
    marginRight: 5,
  },

  viewSeparador: {
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 30,
  },

  viewSeparador2: {
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  viewSeparador3: {
    marginTop: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3E3D3F',
  },
  text1: {
    fontSize: 16,
    color: '#3E3D3F',
  },
  dobleView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 30,
  },

  btnEliminar: {
    height: 56,
    padding: 15,
    backgroundColor: '#3E3D3F',
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
    alignItems: 'center',
  },

  textoElminiar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
