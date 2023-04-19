import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AvisoP = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20, marginVertical: 20}}>
      <KeyboardAwareScrollView>
        <View>
          <Text style={styles.Titulo}>AVISO DE PRIVACIDAD</Text>
          <Text style={styles.text1}>
            La app S.A. de C.V (en adelante “La app” o “Nosotros”) con domicilio
            en Amado Nervo 137 Loma Bonita Cuautitlan , Estado de México, C.P.
            54879, con teléfonos de contacto 595-133-4398 y 595-133-35-41; hace
            del conocimiento de todo “Usuario” interesado en usar su plataforma
            y/o canales de distribución de servicio, que aquellos datos
            personales confidenciales y no confidenciales que obran en su poder
            son tratados con un estricto deber de resguardo y responsabilidad,
            respetando en todo momento las disposiciones aplicables de la Ley
            Federal de Protección de Datos Personales y las leyes locales
            vigentes y aplicables en la materia. La información que La app puede
            llegar a requerir, será utilizada específicamente para efecto de
            conectar servicios entre “Usuarios”, publicitar, difundir, promover,
            perfilar, prospectar, promocionar, desarrollo del servicio,
            Marketing, envío de información comercial, mercadotecnia o
            publicidad, prospección comercial, los servicios que los “Usuarios”
            deseen en materia de trasporte de mercancía y/o fletes, así como
            realizar cobros por comisión a favor de “LA APP”, realizar servicio
            de seguro sobre mercancías transportadas con las salvedades
            especificadas en el contrato de seguro respectivo, entre otros.
          </Text>

          <Text style={styles.text1}>
            Para dichos propósitos, “LA APP” puede llegar a requerir la
            siguiente información confidencial: nombre completo y/o denominación
            social, domicilio, números telefónicos (particular y celular),
            correo electrónico, cualquier dato de contacto, RFC (Registro
            Federal de Contribuyentes), CURP (Clave Única de Registro de
            Población), registro de cuentas bancarias, tarjetas de crédito,
            licencias de conducir, tarjetas de circulación de los vehículos
            registrados para realizar el servicio de fletes, entre otros. De
            igual forma, solicitaremos información no confidencial, tales como
            fecha y lugar de nacimiento, nacionalidad, ubicación, entre otros.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3D3F',
    marginBottom: 15,
  },
  text1: {
    marginVertical: 20,
    fontSize: 14,
    color: '#3E3D3F',
  },
});

export default AvisoP;
