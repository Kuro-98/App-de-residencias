import react from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from '../utilidades/styles';
import Colors from '../utilidades/colors';

const Mensajes = ({navigation}) => {
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
      <KeyboardAwareScrollView
        style={[styles.container, {width: '100%', paddingHorizontal: 0}]}>
        <TouchableOpacity
          style={[styles.card, {marginHorizontal: 20}]}
          onPress={() => console.log('mensajes')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{marginLeft: 15, flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    flex: 1,
                    flexWrap: 'wrap',
                    marginTop: 10,
                  }}>
                  Mensaje Variable
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.grissuave,
              marginVertical: 10,
            }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {/*<Icon
                  style={{padding: 15}}
                  name="clock-o"
                  size={15}
                  color={'#000'}
            />*/}
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 12}}>Fecha y Hora</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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

const estilo = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    width: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    padding: 15,
    height: 200,
    width: 250,
    marginBottom: 15,
  },
});

export default Mensajes;
