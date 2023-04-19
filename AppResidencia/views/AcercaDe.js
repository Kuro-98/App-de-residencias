import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HTML from 'react-native-render-html';

const AcercaDe = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20, marginVertical: 20}}>
      <KeyboardAwareScrollView>
        <HTML
          html={`
                    <p>Acerca de</p>
<p>&nbsp;</p>
<p>La empresa es una aplicaci&oacute;n m&oacute;vil compatible con iOS y Android para el sector de embarcadores&oacute;n donde se podr&aacute;n realizar:</p>
<ul>
<li>Buscar transportistas</li>
<li>Rastrea en tiempo real tu mercancia</li>
<li>Pagos de forma segura por tu producto</li>
<li>CMantente en comunicacion con tu transportista</li>
</ul>
<p>El objetivo principal de la app es ayudar a realizar las anteriores actividades en campo sin necesidad de una estaci&oacute;n de trabajo fija, desde tu Smartphone.</p>
<p>Generark, tiene la mejor seguridad y cuenta con la tecnolog&iacute;a para la satisfacci&oacute;n de los usuarios.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
`}
          imagesMaxWidth={Dimensions.get('window').width}
          style={{marginTop: 0, paddingTop: 0}}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AcercaDe;
