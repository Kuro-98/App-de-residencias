import react from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

const Onboarding = ({navigation}) => {
  const cambiarInicio = () => {
    navigation.navigate('Login');
    console.log('Hey');
  };

  return (
    <>
      <ScrollView>
        <View style={styles.principal}>
          <View style={styles.separador}>
            <View style={styles.logo}>
              <Image
                source={require('../assets/img/logo.png')}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>
          <View style={styles.viewSeparador2}>
            <Image
              style={styles.banner}
              source={require('../assets/img/main1.png')}
            />
          </View>
          <View style={styles.viewSeparador3}>
            <Text style={styles.Titulo}>"Bienvenido a App"</Text>
          </View>

          <View style={styles.viewSeparador}>
            <Text style={styles.text1}>
              Es la aplicación que une a los embarcadores y transportistas en
              una sola plataforma en la cual podrás:
            </Text>
          </View>

          <View style={styles.dobleView}>
            <Image
              style={styles.banner2}
              source={require('../assets/img/rectangle.png')}
            />
            <Text style={styles.text1}>Buscar transportistas</Text>
          </View>

          <View style={styles.dobleView}>
            <Image
              style={styles.banner2}
              source={require('../assets/img/rectangle.png')}
            />
            <Text style={styles.text1}>
              Rastrea en tiempo real tu mercancia
            </Text>
          </View>

          <View style={styles.dobleView}>
            <Image
              style={styles.banner2}
              source={require('../assets/img/rectangle.png')}
            />
            <Text style={styles.text1}>
              Pagos de forma segura por tu producto
            </Text>
          </View>

          <View style={styles.dobleView}>
            <Image
              style={styles.banner2}
              source={require('../assets/img/rectangle.png')}
            />
            <Text style={styles.text1}>Mantente en comunicación con tu</Text>
          </View>
          <View style={{marginTop: 5, marginLeft: 42}}>
            <Text style={styles.text1}> transportista</Text>
          </View>

          <View>
            <TouchableHighlight
              onPress={() => cambiarInicio()}
              style={styles.btnEliminar}>
              <Text style={styles.textoElminiar}>Continuar y entrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#2AFD98',
    flex: 1,
  },
  separador: {marginVertical: 10},
  logo: {
    marginTop: 40,
    height: 90,
    marginHorizontal: 150,
  },
  banner: {
    height: 219,
  },

  banner2: {
    alignContent: 'center',
    marginRight: 5,
  },

  viewSeparador: {
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 30,
  },

  viewSeparador2: {
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  viewSeparador3: {
    marginTop: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3E3D3F',
  },
  text1: {
    fontSize: 16,
    color: '#3E3D3F',
  },
  dobleView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 30,
  },

  btnEliminar: {
    height: 56,
    padding: 15,
    backgroundColor: '#3E3D3F',
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
    alignItems: 'center',
  },

  textoElminiar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;
