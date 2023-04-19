import react, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';

import Viaje from './Viaje';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MisViajes = ({navigation}) => {
  const [viajes, setViajes] = useState([
    {
      id: '1',
      transportista: 'Raul Jimenez Gomez',
      origen:
        'Amado Nervo 137, Loma bonita, Cuautitlan, 54879 Cuautitlan, Méx, mexico',
      destino: 'Boulevard club de golf 15',
      producto: 'Jitomate',
      condiciones: 'Trailer 48 ft, Seco',
      fecha: '24/12/2022',
      precio: '25.00 MXN',
      peso: '20 T',
      distancia: '26 KM',
    },

    {
      id: '2',
      transportista: 'Alejandro Pineda Aguillon',
      origen:
        'Avenida, Av. 16 de Septiembre 54, Cabecera municipal, 55700 Méx.',
      destino: 'Bodega Aurrera huixquilucan',
      producto: 'Productos de limpieza',
      condiciones: 'Trailer 38 ft, Acondicionado',
      fecha: '12/01/2023',
      precio: '30.00 MXN',
      peso: '40 T',
      distancia: '29 KM',
    },
  ]);

  return (
    <View style={styles.principal}>
      <Text
        style={{
          color: '#2AFD98',
          height: 56,
          padding: 20,
          textAlign: 'center',
          backgroundColor: '#000',
        }}>
        MIS VIAJES
      </Text>

      <FlatList
        data={viajes}
        renderItem={({item}) => <Viaje viaje={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#2AFD98',
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default MisViajes;
