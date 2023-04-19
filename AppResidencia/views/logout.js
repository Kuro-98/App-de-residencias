import React, {Component} from 'react';
import {Alert} from 'react-native';

export default class LogoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {signOut} = this.props.context;
    const {push} = this.props.navigation;

    Alert.alert(
      'Cerrar Sesión',
      '¿Esta seguro que desea cerrar sesión?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            this.props.navigation.goBack();
          },
        },
        {
          text: 'Confirmar',
          onPress: () => {
            signOut();
            AsyncStorage.clear();
          },
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return null;
  }
}
