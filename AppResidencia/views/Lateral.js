import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Linking,
  Platform,
  BackHandler,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DrawerActions} from '@react-navigation/native';

import styles from '../utilidades/styles';
import Colors from '../utilidades/colors';
import Login from './login';

const Lateral = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irPrivacidad = () => {
    navigation.navigate('Aviso de Privacidad');
    console.log('Hey');
  };

  const iraViajes = () => {
    navigation.navigate('Viajes');
    console.log('Hey');
  };

  const irPerfil = () => {
    navigation.navigate('Perfil');
    console.log('Hey');
  };

  const irTerminos = () => {
    navigation.navigate('Terminos y Condiciones');
    console.log('Hey');
  };

  const irAcercaDe = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const soporte = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irEnvioMensaje = () => {
    navigation.navigate('Enviar Mensaje');
    console.log('Hey');
  };

  return (
    <View style={{backgroundColor: Colors.verde, flex: 1, width: '70%'}}>
      <KeyboardAwareScrollView>
        <View>
          <View
            style={{
              paddingVertical: 30,
              paddingHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 22}}>Hola,</Text>
              <Text style={{fontWeight: 'bold'}}>Emanuel Morales</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.menuItem, {paddingLeft: 20, flexDirection: 'row'}]}
            onPress={() => buscarT()}>
            <Image
              source={require('../assets/img/buscar.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={[styles.menuText]}>Buscar transportista</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              {paddingTop: 20, paddingLeft: 20, flexDirection: 'row'},
            ]}
            onPress={() => iraViajes()}>
            <Image
              source={require('../assets/img/notificaciones.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={styles.menuText}>Mis viajes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              {paddingTop: 20, paddingLeft: 20, flexDirection: 'row'},
            ]}
            onPress={() => irEnvioMensaje()}>
            <Image
              source={require('../assets/img/mensajeria.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={styles.menuText}>Mensajería</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              {paddingTop: 20, paddingLeft: 20, flexDirection: 'row'},
            ]}
            onPress={() => irPerfil()}>
            <Image
              source={require('../assets/img/perfil.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              {paddingTop: 20, paddingLeft: 20, flexDirection: 'row'},
            ]}
            onPress={() => {
              Alert.alert(
                '¿Necesitas ayuda?',
                'Nos encontramos en: Amado Nervo 137, Loma Bonita, Cuautitlan, C.P. 54870, ESTADO DE MEXICO \n Y en los teléfonos: \n +52 195 133 4538 \n ‎+52 297 133 4541',
                [
                  {
                    text: 'Ver en mapa',
                    onPress: () => {
                      Linking.openURL(
                        "https://www.google.com/maps/place/Calle+Juan+O'Gorman+10,+Bellavista,+56228+Texcoco,+Méx./@19.4878593,-98.8676265,18.75z/data=!4m5!3m4!1s0x85d1e70f32a70431:0xd97c6ae5ff4270e0!8m2!3d19.4878481!4d-98.867237",
                      );
                    },
                  },
                  {
                    text: 'Llamar',
                    onPress: () => {
                      Linking.openURL('tel:#31#595 133 4538');
                    },
                  },
                  {text: 'Cancelar', onPress: () => {}},
                ],
                {cancelable: true},
              );
            }}>
            <Image
              source={require('../assets/img/soporte.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={styles.menuText}>Soporte</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              {paddingTop: 20, paddingLeft: 20, flexDirection: 'row'},
            ]}
            onPress={() => {
              Alert.alert(
                'Cerrar Sesión',
                '¿Esta seguro que desea salir de la aplicación?',
                [
                  {text: 'Cancel', onPress: () => {}},
                  {
                    text: 'Confirmar',
                    onPress: () => {
                      if (Platform.OS === 'android') {
                        () => console.log('storage');
                      }
                      if (Platform.OS === 'ios') {
                        AsyncStorage.getAllKeys().then(
                          AsyncStorage.multiRemove,
                        );
                        AsyncStorage.clear();
                        RNExitApp.exitApp();
                      }
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Image
              source={require('../assets/img/salir.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={styles.menuText}>Salir</Text>
          </TouchableOpacity>

          <View style={[styles.menuItem, {paddingTop: 20, paddingLeft: 20}]}>
            <Text
              style={[styles.menuText, {color: '#fff'}]}
              onPress={() => irTerminos()}>
              Términos y condiciones
            </Text>
          </View>

          <View style={[styles.menuItem, {paddingTop: 20, paddingLeft: 20}]}>
            <Text
              style={[styles.menuText, {color: '#fff'}]}
              onPress={() => irPrivacidad()}>
              Aviso de privacidad
            </Text>
          </View>
        </View>
        <Image
          source={require('../assets/img/logo.png')}
          style={{
            width: 80,
            height: 80,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 40,
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Lateral;
