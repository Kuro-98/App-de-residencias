import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PagoPaynet = ({navigation}) => {
  const irViaje = () => {
    navigation.navigate('Viajes');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  const irRastreo = () => {
    navigation.navigate('Rastreo');
    console.log('Hey');
  };

  const irRecuperar = () => {
    navigation.navigate('Recuperar Contraseña');
    console.log('Hey');
  };

  return (
    <View>
      <KeyboardAwareScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={styles.opps}>
          <View styles={styles.oppsHeader}>
            <View style={styles.oppsReminder}>
              <Text style={{color: '#ffffff', textAlign: 'center'}}>
                Ficha digital. No es necesario imprimir.
              </Text>
            </View>
            <View style={styles.oppsInfo}>
              <View style={styles.oppsBrand}>
                <Image
                  source={require('../assets/img/oxxopay_brand.png')}
                  style={{width: '100%', height: 150, resizeMode: 'contain'}}
                />
              </View>
              <View style={styles.oppsAmount}>
                <View style={styles.h3}>
                  <Text>Monto a pagar</Text>
                </View>
                <View>
                  <Text style={styles.h2}>$ CANTIDAD MXN</Text>
                </View>
                <View>
                  <Text style={{fontStyle: 'italic', fontSize: 11}}>
                    Posible comisión adicional al momento de realizar el pago.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.oppsReference}>
              <View>
                <Text style={styles.h3}>REFERENCIA</Text>
              </View>
              <View>
                <Text style={styles.h1}>Numero de orden 12345</Text>
              </View>
            </View>
          </View>
          <View style={styles.oppsInstructions}>
            <View>
              <Text style={styles.h3}>Instrucciones</Text>
            </View>
            <FlatList
              data={[
                {text: '1. Anota o captura tu número de referencia.'},
                {text: '2. Acude a cualquier tienda afiliada.'},
                {
                  text: '3. Indica en caja que quieres realizar un pago de OXXO Pay.',
                },
                {
                  text: '4. Dicta al cajero el número de referencia en esta ficha para que tecleé directamete en la pantalla de venta.',
                },
                {
                  text: '5. Realiza el pago correspondiente con dinero en efectivo.',
                },
                {
                  text: '6. Al confirmar tu pago, el cajero te entregará un comprobante impreso. En el podrás verificar que se haya realizado correctamente. Conserva este comprobante de pago.',
                },
              ]}
              renderItem={({item}) => (
                <Text style={{marginBottom: 10}}>{item.text}</Text>
              )}
            />
            <View>
              <Text style={styles.oppsFootNote}>
                Al completar estos pasos recibirás un correo de la app
                confirmando tu pago (Hasta 24 Hrs hábiles).
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              styles.loginButton,
              {backgroundColor: '#000'},
            ]}
            onPress={() => irViaje()}>
            <Text style={styles.loginText}>Ir a mis viajes</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  h3: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  opps: {
    flex: 1,
    width: '90%',
    marginHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 45,
    color: '#4f5365',
    backgroundColor: '#ffffff',
  },
  oppsReminder: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 11,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  oppsInfo: {},
  oppsBrand: {
    width: '100%',
  },
  oppsImage: {
    maxWidth: 120,
    maxHeight: 40,
    marginTop: 5,
    resizeMode: 'stretch',
  },
  oppsAmount: {
    width: '100%',
  },
  oppsReference: {
    marginTop: 14,
  },
  h1: {
    fontSize: 27,
    color: '#000000',
    textAlign: 'center',
    padding: 7,
    borderRadius: 5,
    backgroundColor: '#f8f9fa',
    borderColor: '#000000',
    borderWidth: 0.5,
  },
  h2: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  oppsInstructions: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  oppsFootNote: {
    marginTop: 20,
    padding: 20,
    color: '#108f30',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#108f30',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 350,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#005498',
  },
  loginText: {
    color: 'white',
  },
});

export default PagoPaynet;
