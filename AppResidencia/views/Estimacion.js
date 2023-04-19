import React, {Component} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  PermissionsAndroid,
  Image,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../utilidades/colors';
import styles from '../utilidades/styles';
import ImagePicker from 'react-native-image-picker';
//import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import DatePicker from 'react-native-datepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Estimacion = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  return (
    <View styles={{flex: 1, paddingHorizontal: 20}}>
      <KeyboardAwareScrollView>
        <TouchableOpacity
          style={[
            styles.card,
            {
              marginHorizontal: 20,
              paddingVertical: 10,
              marginBottom: 0,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={() => console.log('volver a obra')}>
          {/*<Icon name="check" size={25} color={Colors.verde}></Icon>*/}
          <Text> Volver a la obra</Text>
        </TouchableOpacity>
        <View
          style={[styles.card, {marginHorizontal: 20, paddingVertical: 20}]}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold'}}>Estimación del usuiario</Text>
              <Text>No. de estimacion</Text>
              <Text>Fecha: </Text>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text>Elaborado por: </Text>
            <Text>Supervisado por: </Text>
            <Text>Autorizado por:</Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <View style={{flex: 1, marginRight: 5}}>
            <TouchableOpacity
              onPress={() => console.log('editar')}
              style={[styles.authButton, {backgroundColor: 'blue'}]}>
              <Text style={styles.authButtonText}>Editar estimación</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <View style={{flex: 1, marginRight: 5}}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Eliminar estimación',
                  '¿Esta seguro que desea eliminar esta estimación?',
                  [
                    {text: 'Cancel', onPress: () => {}},
                    {
                      text: 'Confirmar',
                      onPress: () => {},
                    },
                  ],
                  {cancelable: false},
                );
              }}
              style={[styles.authButton, {backgroundColor: 'red'}]}>
              <Text style={styles.authButtonText}>Eliminar estimación</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            borderWidth: 2,
            borderColor: Colors.gris,
            padding: 15,
            borderRadius: 5,
          }}
          onPress={() => console.log('agregar')}>
          <Text>Agregar Concepto</Text>
          {/*<Icon name="plus" size={20} color="#000"></Icon>*/}
        </TouchableOpacity>

        {/*<FlatList
          contentContainerStyle={styles.listContainer}
          data={this.state.estimacion.actividades}
          horizontal={false}
          numColumns={1}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 320,
                  marginTop: 20,
                  marginHorizontal: 20,
                  borderWidth: 2,
                  borderColor: Colors.gris,
                  padding: 15,
                  borderRadius: 5,
                }}
                onPress={() => {
                  navigate('Actividad', {
                    actividad: item.id,
                    obra: this.state.obra,
                  });
                }}>
                <Text>
                  {item.partidas} {item.clave}{' '}
                </Text>
              </TouchableOpacity>
            );
          }}
        />*/}

        <Text style={{marginBottom: 20}}> </Text>

        <View>
          <View
            style={{
              marginHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <View style={{flex: 1, marginRight: 5}}>
              <TouchableOpacity
                onPress={() => console.log('generador')}
                style={[styles.authButton, {backgroundColor: Colors.verde}]}>
                <Text style={styles.authButtonText}>Generador de obra</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <View style={{flex: 1, marginRight: 5}}>
              <TouchableOpacity
                onPress={() => console.log('cuerpo de la estimacion')}
                style={[styles.authButton, {backgroundColor: Colors.verde}]}>
                <Text style={styles.authButtonText}>Cuerpo de estimación</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <View style={{flex: 1, marginRight: 5}}>
              <TouchableOpacity
                onPress={() => console.log('Resumen')}
                style={[styles.authButton, {backgroundColor: Colors.verde}]}>
                <Text style={styles.authButtonText}>Resumen de estimación</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={{marginBottom: 20}}> </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Estimacion;
