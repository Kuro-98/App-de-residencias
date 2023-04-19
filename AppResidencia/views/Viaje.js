import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {Text, StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

const Viaje = ({viaje, navigation}) => {
  const cambiarInicio = () => {
    navigation.navigate('Enviar Mensaje');
    console.log('Hey');
  };

  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <View style={styles.firstSection}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.label}>Transportista:</Text>
              <Text style={styles.texto}>{viaje.transportista}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.label}>Origen:</Text>
            <Text style={styles.texto}>{viaje.origen}</Text>
          </View>
          <View>
            <Text style={styles.label}>Destino::</Text>
            <Text style={styles.texto}>{viaje.destino}</Text>
          </View>
          <View>
            <Text style={styles.label}>Producto:</Text>
            <Text style={styles.texto}>{viaje.producto}</Text>
          </View>
          <View>
            <Text style={styles.label}>Condiciones:</Text>
            <Text style={[styles.texto, {marginBottom: 10}]}>
              {viaje.condiciones}
            </Text>
          </View>
        </View>
        <View style={styles.secondSection}>
          <View style={styles.dobleSeparator}>
            <View style={styles.icon}>
              <Image
                style={{marginTop: 20, marginLeft: 10}}
                source={require('../assets/img/calendar.png')}
              />
            </View>
            <View style={styles.itemList}>
              <Text style={styles.label}>Fecha:</Text>
              <Text style={styles.texto}>{viaje.fecha}</Text>
            </View>
            <View style={styles.icon}>
              <Image
                style={{marginTop: 20, marginLeft: 10}}
                source={require('../assets/img/billete-de-banco.png')}
              />
            </View>
            <View style={styles.itemList}>
              <Text style={styles.label}>Precio:</Text>
              <Text style={styles.texto}>{viaje.precio}</Text>
            </View>
          </View>

          <View style={styles.dobleSeparator}>
            <View style={styles.icon}>
              <Image
                style={{marginTop: 20, marginLeft: 10}}
                source={require('../assets/img/circulo-negro.png')}
              />
            </View>
            <View style={styles.itemList}>
              <Text style={styles.label}>Peso:</Text>
              <Text style={styles.texto}>{viaje.peso}</Text>
            </View>

            <View style={styles.icon}>
              <Image
                style={{marginTop: 20, marginLeft: 10}}
                source={require('../assets/img/carretera.png')}
              />
            </View>

            <View style={styles.itemList}>
              <Text style={styles.label}>Distancia:</Text>
              <Text style={styles.texto}>{viaje.distancia}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Ruta:</Text>
        </View>

        <View style={styles.acomodo}>
          <MapView style={styles.map}></MapView>
        </View>

        <View>
          <TouchableHighlight style={styles.btnEliminar}>
            <Text
              onPress={() => console.log('funcion')}
              style={styles.textoElminiar}>
              Enviar Mensaje
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  firstSection: {
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  itemList: {marginRight: 20, width: '40%'},
  icon: {
    width: '10%',
  },
  dobleSeparator: {flexDirection: 'row'},
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  texto: {fontSize: 14},
  acomodo: {
    height: 300,
    marginHorizontal: 5,
    backgroundColor: '#000',
    marginTop: 10,
  },
  btnEliminar: {
    height: 56,
    padding: 15,
    backgroundColor: '#3E3D3F',
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 5,
    alignItems: 'center',
  },

  textoElminiar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {height: '100%', width: '100%'},
});

export default Viaje;
