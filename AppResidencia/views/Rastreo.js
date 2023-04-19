import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
  Image,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../utilidades/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../utilidades/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Rastreo = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  return (
    <View>
      <KeyboardAwareScrollView>
        <View
          style={[
            styles.container,
            styles.centerContainer,
            {backgroundColor: '#fafafa'},
          ]}>
          <Image
            source={require('../assets/img/logo.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Text style={styles.cardTitle}>Rastrear mercancia</Text>
          <Text style={{marginBottom: 20}}>
            Escribe el número de rastreo para monitorear la mercancia que
            llegará a tus instalaciones.
          </Text>

          <View
            style={[
              styles.authInputContainer,
              {backgroundColor: Colors.grissuave},
            ]}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              ref={comp => (this.viaje = comp)}
              placeholder="Número de rastreo"
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              onChangeText={viaje => this.setState({viaje})}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity onPress={() => {}} style={[styles.authButton]}>
            <Text style={[styles.authButtonText, {color: '#000'}]}>
              RASTREAR
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Rastreo;
