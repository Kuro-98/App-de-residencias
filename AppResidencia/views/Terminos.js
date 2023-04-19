import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Terminos = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20, marginVertical: 20}}>
      <KeyboardAwareScrollView>
        <View>
          <Text style={styles.Titulo}>
            Términos y Condiciones de Uso de LA APP, S.A. de C.V.
          </Text>
          <Text style={styles.text1}>
            La app S.A. de C.V (en adelante “La app” o “Nosotros”) con domicilio
            en Amado Nervo 137 Loma Bonita Cuautitlan , Estado de México, C.P.
            54879, con teléfonos de contacto 595-133-4398 y 595-133-35-41; pone
            a su disposición los "Términos y Condiciones" siguientes, mismos que
            rigen el uso y restricciones que el usuario (“Transportista” y
            “Embarcador”) le dé a esta plataforma digital, sitio web, o
            cualquier canal de distribución de servicios disponible propiedad de
            “lA APP”. El “Usuario” está de acuerdo que “La App” se reserva el
            derecho a modificar, reformar, adicionar o eliminar disposiciones de
            los presentes “Términos y Condiciones” en cualquier momento sin
            necesidad de realizar previa notificación, sino que será suficiente
            realizar una notificación a todos los “Usuarios” a través de la
            plataforma digital, sitio web o cualquier canal de distribución de
            servicios propiedad de “La app” del cambio que este documento tenga,
            en caso, de que usted no se encuentre de acuerdo y en consecuencia
            no acepte estos “Términos y Condiciones”, no podrá tener acceso ni
            usar la plataforma digital, sitio web, etc., de ninguna manera.
          </Text>

          <Text style={styles.Titulo}>1. DEFINICIONES</Text>

          <Text style={styles.text1}>
            Canales de distribución: Plataformas digitales, páginas web y todos
            los espacios propiedad de “La App” donde los usuarios publican,
            difunden, comercializan y promueven sus servicios de transportación
            y/o fletes.
          </Text>

          <Text style={styles.text1}>
            Cookie: Archivo de datos que se almacena en el disco duro de la
            computadora del “Usuario” cuando éste acceda al Sitio.
          </Text>

          <Text style={styles.text1}>
            Deducible: Suma preestablecida que el “Embarcador” debe pagar a “La
            App” para que opere el contrato de seguro, en caso de siniestro de
            las mercancías aseguradas.
          </Text>

          <Text style={styles.text1}>
            Embarcadores: Aquella persona física o moral que pretende o contrata
            los servicios trasportación y/o de fletes.
          </Text>

          <Text style={styles.text1}>
            Flete: Alquiler de un transporte para mercancías.
          </Text>

          <Text style={styles.text1}>
            “La App”: “La app” S.A. de C.V., agente facilitador para crear
            conexión comercial entre “Embarcadores” y “Transportistas”. De igual
            manera otorga la opción de asegurar las mercancías transportadas de
            los “Embarcadores”.
          </Text>

          <Text style={styles.text1}>
            LFPDPPP: Ley Federal de Protección de Datos Personales en Posesión
            de los Particulares.
          </Text>

          <Text style={styles.Titulo}>2. OBJETO</Text>

          <Text style={styles.text1}>
            2.1. El “Usuario” conoce y acepta que “LA APP” pone a su disposición
            su plataforma digital, página web, etc., para que mediante estos
            canales puedan difundir, comercializar, promover y contratar, entre
            otros similares, personas interesadas en servicios de fletes y
            transportación. En este sentido, se precisa que “LA APP” únicamente
            es un intermediario que mediante sus canales de distribución pone en
            contacto a “Transportistas” y a “Embarcadores”, sin que exista
            ningún tipo de contratación formal por los servicios de flete y
            transportación entre “Usuarios” y “LA APP”.
          </Text>

          <Text style={styles.text1}>
            2.2 Sin perjuicio de lo anterior, “LA APP” ofrece a los
            “Embarcadores” el servicio de seguro de mercancías, el cual crea una
            relación jurídica solo entre ambas partes desde el momento que
            inicia el traslado (siendo este cuando la mercancía se encuentra
            arriba del trasporte de fletes) y concluye cuando la mercancía llega
            al destino contratado, lo anterior a cambio de una contraprestación
            económica. Consultar los detalles correspondientes de los presentes
            “Términos y Condiciones”.
          </Text>

          <Text style={styles.Titulo}>
            3. DERECHOS DE PROPIEDAD INDUSTRIAL E INTELECTUAL
          </Text>

          <Text style={styles.text1}>
            Derechos de Los “Usuarios” harán uso de los canales de distribución
            de servicios de “LA APP”, sin embargo, en ningún caso el acceso a
            nuestras plataformas implica, enunciativa pero no limitativamente,
            la cesión, transmisión o cualquier otro tipo de renuncia total ni
            parcial, de los derechos de propiedad intelectual o industrial de
            “LA APP”, entre otros, marcas, software, imágenes, videos, logos,
            nombres comerciales, audios, avisos comerciales, gráficos, códigos,
            slogans, etc. El “Usuario” que acceda a nuestra plataforma y canales
            de distribución únicamente podrá visualizar y obtener copia privada
            de los contenidos siempre y cuando dicha copia sea, única y
            exclusivamente, para su uso personal y privado; quedando
            estrictamente prohibida su utilización para fines comerciales y/o
            lucrativos. El “Usuario” deberá abstenerse de suprimir, alterar,
            eludir
          </Text>

          <Text style={styles.text1}>
            o manipular cualquier dispositivo de protección o sistemas de
            seguridad que puedan estar instalados en la misma. El uso no
            autorizado de los materiales e información protegida por derechos
            industriales e intelectuales, registrada o no, contenida en los
            canales de distribución de “LA APP” puede suponer la violación de la
            legislación normativa aplicable. Consecuentemente, “LA APP” se
            reserva, el derecho de perseguir judicialmente cualquier infracción
            de sus derechos de propiedad intelectual e industrial, así como
            exigir el pago de daños y perjuicios al infractor respectivo.
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

export default Terminos;
