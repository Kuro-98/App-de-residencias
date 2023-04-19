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

import Colors from '../utilidades/colors';

const Chat = ({navigation}) => {
  const cambiarInicio = () => {
    navigation.navigate('Lateral');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  return (
    <View style={styles.principal}>
      <View style={styles.header}>
        <TouchableHighlight
          style={styles.banner}
          onPress={() => cambiarInicio()}>
          <Image source={require('../assets/img/menu.png')} />
        </TouchableHighlight>
        <View style={styles.logo}>
          <Image
            style={{
              width: 90,
              height: 60,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={require('../assets/img/logo.png')}
          />
        </View>
      </View>

      <View style={styles.divMensajes}>
        <ScrollView style={{height: '100%'}}></ScrollView>
      </View>

      <View style={styles.control}>
        <TextInput
          style={styles.entradas}
          placeholderTextColor="#000"
          placeholder="Escribe tu mensaje..."
          keyboardType="default"
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          onSubmitEditing={() => console.log('Nombre')}
          returnKeyType="next"
          onChangeText={() => console.log('Nombre')}
        />
        <TouchableHighlight
          onPress={() => console.log('nada')}
          style={styles.btnEliminar}>
          <Text style={styles.textoElminiar}>Enviar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
  entradas: {
    marginTop: 20,
    height: 45,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    borderBottomColor: '#A11117',
    color: '#000',
    backgroundColor: '#fff',
  },
  divMensajes: {
    backgroundColor: '#FAFAFA',
    height: '100%',
    marginTop: 75,
  },
  header: {
    backgroundColor: '#2AFD98',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },

  logo: {
    height: 90,
    width: 60,
    height: 60,
    position: 'absolute',
    left: '80%',
    right: 0,
    top: 10,
  },
  banner: {
    margin: 20,
  },
  entradas: {
    marginTop: 30,
    width: '60%',
    height: 45,
    marginLeft: 25,
    marginRight: 5,
    padding: 10,
    borderRadius: 10,
    borderBottomColor: '#A11117',
    color: '#000',
    backgroundColor: '#F1F2F2',
  },

  control: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 120,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },

  btnEliminar: {
    alignContent: 'center',
    marginTop: 30,
    width: '30%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#2AFD98',
    color: '#fff',
    marginRight: 20,
  },

  textoElminiar: {
    padding: 15,
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Chat;
