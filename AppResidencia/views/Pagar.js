import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../utilidades/colors';
import styles from '../utilidades/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Pagar = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  return (
    <ImageBackground
      source={require('../assets/img/bg.jpg')}
      style={[styles.container, styles.centerContainer]}>
      <KeyboardAwareScrollView style={styles.card}>
        <Text style={[styles.cardTitle, {paddingBottom: 10}]}>
          Total a pagar: $ MXN
        </Text>

        <View
          style={[
            styles.authInputContainer,
            {backgroundColor: Colors.grissuave},
          ]}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Número de tarjeta"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('pago')}
            returnKeyType="next"
            onChangeText={() => console.log('enviarAccion')}
            autoCapitalize="none"
            maxLength={16}
            minLength={15}
          />
        </View>

        <View
          style={[
            styles.authInputContainer,
            {backgroundColor: Colors.grissuave},
          ]}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Nombre en la tarjeta"
            keyboardType="default"
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('nombre tarjeta')}
            returnKeyType="next"
            onChangeText={() => console.log('nombre tarjeta')}
          />
        </View>

        <View
          style={[
            styles.authInputContainer,
            {backgroundColor: Colors.grissuave},
          ]}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Mes de expiración (mm)"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('f')}
            returnKeyType="next"
            onChangeText={() => console.log('mes')}
            maxLength={2}
            minLength={2}
          />
        </View>
        <View
          style={[
            styles.authInputContainer,
            {backgroundColor: Colors.grissuave},
          ]}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Año de expiración (aa)"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('f')}
            returnKeyType="next"
            onChangeText={() => console.log('f')}
            maxLength={2}
            minLength={2}
          />
        </View>
        <View
          style={[
            styles.authInputContainer,
            {backgroundColor: Colors.grissuave},
          ]}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Código de seguridad"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            returnKeyType="done"
            onChangeText={() => console.log('f')}
            maxLength={4}
            minLength={3}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('f')}
          style={styles.authButton}>
          <Text style={styles.authButtonText}>Pagar</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Pagar;
