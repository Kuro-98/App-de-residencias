import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../utilidades/colors';
import styles from '../utilidades/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Transportista = () => {
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView style={[styles.container, {width: '100%'}]}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
          }}
          onPress={() => {
            Alert.alert(
              'Cancelar busqueda',
              '¿Deseas cancelar esta busqueda?',
              [
                {text: 'Cancel', onPress: () => {}},
                {
                  text: 'Confirmar',
                  onPress: () => {},
                },
              ],
              {cancelable: false},
            );
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            CANCELAR BUSQUEDA
          </Text>
        </TouchableOpacity>

        <Text style={{marginTop: 20}}>Esperando propuestas de transporte</Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    marginLeft: 16,
  },
  inputAndroid: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    marginLeft: 16,
  },
});

export default Transportista;
