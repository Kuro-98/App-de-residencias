import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
  Dimensions,
  StyleSheet,
  Image,
  Platform,
  Linking,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from '../utilidades/styles';
import Colors from '../utilidades/colors';

const Registro = ({navigation}) => {
  const irTerminos = () => {
    navigation.navigate('Terminos y Condiciones');
    console.log('Hey');
  };
  return (
    <View
      style={[
        styles.container,
        styles.centerContainer,
        {backgroundColor: '#fafafa'},
      ]}>
      <KeyboardAwareScrollView>
        <Text style={styles.cardTitle}>Regístrate</Text>
        <View style={{alignItems: 'center', marginTop: 50, marginBottom: 20}}>
          <React.Fragment>
            <TouchableOpacity onPress={() => console.log('foto')}>
              <Image
                source={require('../assets/img/add.png')}
                style={styles.roundedImage}
              />
              <Image
                source={require('../assets/img/camera.png')}
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
          </React.Fragment>
        </View>

        <View style={styles.authInputContainer}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Nombre completo"
            keyboardType="default"
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('Nombre')}
            returnKeyType="next"
            onChangeText={() => console.log('Nombre')}
          />
        </View>

        <Text style={{marginBottom: 10}}>Identificación oficial INE</Text>

        <TouchableOpacity
          onPress={() => console.log('Nombre')}
          style={styles.authInputContainer}>
          <Text
            style={[
              styles.authButtonText,
              {
                color: '#4d4d4d',
                textAlign: 'left',
                paddingLeft: 20,
                fontSize: 14,
              },
            ]}>
            Agrega imágen frente
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Nombre')}
          style={styles.authInputContainer}>
          <Text
            style={[
              styles.authButtonText,
              {
                color: '#4d4d4d',
                textAlign: 'left',
                paddingLeft: 20,
                fontSize: 14,
              },
            ]}>
            Agrega imágen de Reverso
          </Text>
        </TouchableOpacity>

        {/* <Text style={{marginBottom: 10}}>Constancia de productor emitida por el ayuntamiento (Opcional)</Text>

            <TouchableOpacity
                onPress={()=>{
                    this.seleccionarConstancia()
                }}
                style={styles.authInputContainer}>
                  {this.state.constancia != ''?
                  <Text style={[styles.authButtonText, {color: "#4d4d4d", textAlign: 'left', paddingLeft: 20, fontSize: 14}]}>Cambia la imágen de constancia</Text>
                  :
                  <Text style={[styles.authButtonText, {color: "#4d4d4d", textAlign: 'left', paddingLeft: 20, fontSize: 14}]}>Agrega imágen constancia</Text>
                  }
                </TouchableOpacity> 

            <Text style={{marginBottom: 10}}>Comprobante de domicilio (Opcional)</Text>

            <TouchableOpacity
                onPress={()=>{
                    this.seleccionarComprobante()
                }}
                style={styles.authInputContainer}>
                  {this.state.comprobante != ''?
                  <Text style={[styles.authButtonText, {color: "#4d4d4d", textAlign: 'left', paddingLeft: 20, fontSize: 14}]}>Cambia la imágen de comprobante</Text>
                  :
                  <Text style={[styles.authButtonText, {color: "#4d4d4d", textAlign: 'left', paddingLeft: 20, fontSize: 14}]}>Agrega imágen comprobante</Text>
                  }
            </TouchableOpacity>  */}

        <View style={styles.authInputContainer}>
          <Image
            source={require('../assets/img/bandera.png')}
            style={{
              marginLeft: 20,
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Código de país"
            keyboardType="default"
            underlineColorAndroid="transparent"
            editable={true}
            onChangeText={() => console.log('Nombre')}
          />

          <Image
            source={require('../assets/img/telephone-handle-silhouette.png')}
            style={{
              marginLeft: 20,
            }}
          />

          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Teléfono"
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('Nombre')}
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
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('Nombre')}
            returnKeyType="next"
            onChangeText={email => this.setState({email})}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.authInputContainer}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
            onSubmitEditing={() => console.log('Nombre')}
            returnKeyType="next"
            onChangeText={() => console.log('Nombre')}
          />
        </View>

        <View style={styles.authInputContainer}>
          <TextInput
            style={styles.inputs}
            placeholderTextColor="#000"
            placeholder="Confirmar contraseña"
            keyboardType="default"
            secureTextEntry
            underlineColorAndroid="transparent"
            returnKeyType="done"
            onChangeText={() => console.log('Nombre')}
          />
        </View>

        <TouchableOpacity
          onPress={() => {}}
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

        <TouchableOpacity onPress={() => irTerminos()} style={{marginTop: 20}}>
          <Text>
            Al regístrarte aceptas nuestros{' '}
            <Text style={{fontWeight: 'bold'}}>Términos y condiciones</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={{marginTop: 20}}>
          <Text style={{textAlign: 'center', marginBottom: 10}}></Text>
        </TouchableOpacity>

        {/*<TouchableOpacity
                onPress={()=>{}}
                style={{marginTop: 20}}>
                <Text style={{textAlign: 'center', marginBottom: 10}}>¿Ya tienes una cuenta?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{ navigate('Login')}}
                style={[styles.authButton,{ marginBottom: 20}]}>
                <Text style={[styles.authButtonText, {color: "#000", }]}>Iniciar sesión</Text>
            </TouchableOpacity> */}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Registro;
