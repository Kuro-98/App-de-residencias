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

const Login = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
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
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <View
          style={[
            styles.container,
            styles.centerContainer,
            {backgroundColor: '#fafafa'},
          ]}>
          <Image
            source={require('../assets/img/logo.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 60,
            }}
          />
          <Text style={styles.cardTitle}>Iniciar Sesión</Text>

          <View
            style={[
              styles.authInputContainer,
              {backgroundColor: Colors.grissuave},
            ]}>
            <View style={styles.authInputIconContainer}>
              <Image
                style={styles.authInputIcon}
                source={require('../assets/img/user.png')}
              />
            </View>

            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Teléfono o correo electrónico"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              blurOnSubmit={false}
              onSubmitEditing={() => {
                () => console.log('telefono');
              }}
              returnKeyType="next"
              onChangeText={() => console.log('telefono')}
              autoCapitalize="none"
            />
          </View>

          <View
            style={[
              styles.authInputContainer,
              {backgroundColor: Colors.grissuave},
            ]}>
            <View style={styles.authInputIconContainer}>
              <Image
                style={styles.authInputIcon}
                source={require('../assets/img/lock.png')}
              />
            </View>

            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Contraseña"
              keyboardType="default"
              underlineColorAndroid="transparent"
              secureTextEntry
              returnKeyType="done"
              onChangeText={() => console.log('contra')}
            />
          </View>

          <TouchableOpacity
            onPress={() => buscarT()}
            style={[styles.authButton]}>
            <Text style={[styles.authButtonText, {color: '#000'}]}>
              INICIAR SESIÓN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => irRecuperar()}
            style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', marginBottom: 30, fontSize: 16}}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', marginBottom: 10}}>
              ¿Aún no tienes una cuenta?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => irRegistro()}
            style={[
              styles.authButton,
              {
                backgroundColor: '#fff',
                borderColor: Colors.verde,
                borderColor: Colors.verde,
                borderWidth: 2,
                marginBottom: 20,
              },
            ]}>
            <Text
              style={[
                styles.authButtonText,
                {color: '#000', fontWeight: 'bold'},
              ]}>
              REGISTRATE
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{backgroundColor: '#f1f2f2', padding: 20}}
          onPress={() => irRastreo()}>
          <Text>Eres el responsable de recibir mercancia, da clic aquí</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            RASTREAR MERCANCIA
            <Image source={require('../assets/img/right-arrow.png')} />
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
