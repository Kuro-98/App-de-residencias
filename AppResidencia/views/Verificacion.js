import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../utilidades/colors';

import styles from '../utilidades/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Verificacion = () => {
  return (
    <View
      style={[
        styles.container,
        styles.centerContainer,
        {backgroundColor: '#fafafa'},
      ]}>
      <KeyboardAwareScrollView>
        <Text style={styles.cardTitle}>Verificación</Text>

        <Text style={{textAlign: 'center', marginBottom: 10}}>
          Ingresa el código de 4 dígitos que enviamos a tu teléfono a
          continuación:{' '}
        </Text>
        <View style={styles.authInputContainer}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            ref={comp => (this.code = comp)}
            placeholder="Ingresa tu código de verificación"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            returnKeyType="done"
            onChangeText={() => console.log('f')}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          onPress={() => console.log('f')}
          style={styles.authButton}>
          <Text style={styles.authButtonText}>Verificar</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Verificacion;
