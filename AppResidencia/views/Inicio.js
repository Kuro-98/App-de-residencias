import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';

const Inicio = ({navigation}) => {
  const cambiarAtras = () => {
    navigation.goBack('Onboarding');
    console.log('Hey');
  };

  const cambiarInicio = () => {
    navigation.navigate('Lateral');
    console.log('Hey');
  };

  const irNuevoPedido = () => {
    navigation.navigate('Nuevo Pedido');
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

      <MapView style={styles.map}>
        <TextInput
          style={styles.entradas}
          onChangeText={() => console.log('nada')}
          placeholder="Punto de partida"
        />

        <TextInput
          style={styles.entradas}
          onChangeText={() => console.log('nada')}
          placeholder="Destino"
        />
      </MapView>

      <View style={styles.control}>
        <TouchableHighlight
          onPress={() => irNuevoPedido()}
          style={styles.btnEliminar}>
          <Text style={styles.textoElminiar}>BUSCAR TRANSPORTISTA</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '90%',
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
    marginTop: 20,
    height: 45,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    borderBottomColor: '#A11117',
    color: '#000',
    backgroundColor: '#fff',
  },

  control: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 70,
  },

  btnEliminar: {
    borderRadius: 5,
    backgroundColor: '#2AFD98',
    color: '#fff',
    paddingVertical: 10,
  },

  textoElminiar: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
});
export default Inicio;
