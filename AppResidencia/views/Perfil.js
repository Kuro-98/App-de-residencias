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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from '../utilidades/styles';
import Colors from '../utilidades/colors';

const Perfil = () => {
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <View style={{backgroundColor: Colors.verde, marginBottom: 30}}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: '700',
              paddingHorizontal: 20,
              textAlign: 'center',
              marginVertical: 15,
            }}>
            Datos de sesión
          </Text>
        </View>
        <View style={[styles.container, styles.centerContainer]}>
          <View style={styles.authInputContainer}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Nombre completo"
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              onChangeText={() => console.log('Nombre')}
            />
          </View>

          <View style={styles.authInputContainer}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Correo electrónico"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              onChangeText={() => console.log('correo')}
            />
          </View>
        </View>

        <Text
          style={{
            backgroundColor: '#ccc',
            alignItems: 'center',
            justifycontent: 'center',
            textAlign: 'center',
            paddingVertical: 10,
            marginBottom: 20,
          }}>
          Cambiar contraseña
        </Text>

        <View style={[styles.container, styles.centerContainer]}>
          <View style={styles.authInputContainer}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Contraseña"
              keyboardType="default"
              underlineColorAndroid="transparent"
              blurOnSubmit={false}
              onSubmitEditing={() => console.log('contra')}
              returnKeyType="next"
              onChangeText={() => console.log('contra')}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => console.log('contra')}
              style={{padding: 10}}>
              <Image source={require('../assets/img/eye.png')} />
              {/*<Icon name={'eye'} size={17} />*/}
            </TouchableOpacity>
          </View>

          <View style={styles.authInputContainer}>
            <TextInput
              style={styles.inputs}
              placeholderTextColor="#000"
              placeholder="Confirmar contraseña"
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="done"
              onChangeText={() => console.log('contra')}
            />
            <TouchableOpacity
              onPress={() => console.log('contra')}
              style={{padding: 10}}>
              <Image source={require('../assets/img/eye.png')} />
              {/*<Icon name={'eye'} size={17} />*/}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => console.log('contra')}
            style={[
              styles.authButton,
              {backgroundColor: Colors.verde, marginBottom: 20},
            ]}>
            <Text style={[styles.authButtonText, {color: '#000'}]}>
              Guardar
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Perfil;
