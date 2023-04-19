import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../utilidades/colors';
import styles from '../utilidades/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SelectMultiple from 'react-native-select-multiple';
import RadioButtonRN from 'radio-buttons-react-native';
import DatePicker from 'react-native-datepicker';

const NuevoPedido = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <View style={[styles.container, styles.centerContainer]}>
          <Text style={styles.cardTitle}>¿Qué deseas transportar?</Text>

          <Text style={{fontWeight: 'bold', marginBottom: 10}}>
            Datos de pedido
          </Text>

          <View style={[styles.authInputContainer, {}]}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Origen"
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              editable={false}
            />
          </View>

          <View style={[styles.authInputContainer, {}]}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              ref={() => console.log('change')}
              placeholder="Destino"
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              editable={false}
            />
          </View>

          <View style={[styles.authInputContainer, {}]}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Embarcador"
              keyboardType="default"
              underlineColorAndroid="transparent"
              blurOnSubmit={false}
              onSubmitEditing={() => {
                () => console.log('change');
              }}
              returnKeyType="next"
              onChangeText={() => console.log('change')}
            />
          </View>

          <View style={[styles.authInputContainer, {}]}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Producto"
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              onChangeText={() => console.log('change')}
            />
          </View>

          <View style={[styles.authInputContainer, {}]}>
            <DatePicker
              style={[{width: '100%'}]}
              mode="date"
              placeholder="Fecha de recolección"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              color="#000"
              minDate={new Date()}
              customStyles={{
                justifyContent: 'space-between',
                width: '100%',
                dateInput: {
                  borderWidth: 0,
                },
                placeholderText: {
                  textAlign: 'center',
                  alignSelf: 'flex-start',
                  paddingLeft: 20,
                  color: '#000',
                },
                dateText: {
                  textAlign: 'center',
                  alignSelf: 'flex-start',
                  paddingLeft: 20,
                  color: '#000',
                },
              }}
            />
          </View>

          <View style={[styles.authInputContainer, {marginTop: 20}]}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Peso (Toneladas)"
              keyboardType="number-pad"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              onChangeText={() => console.log('change')}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              console.log('validando');
            }}
            style={[styles.authButton, {marginVertical: 20}]}>
            <Text style={[styles.authButtonText, {color: '#000'}]}>
              BUSCAR TRANSPORTISTAS
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    padding: 15,
    height: 400,
    width: 400,
    marginBottom: 15,
  },
});

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

export default NuevoPedido;
