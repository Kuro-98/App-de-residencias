import React from 'react';
import {Screen} from './Inicio';

export const BuscarScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Buscar" />
);

export const ViajeScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Viajes" />
);

export const PerfilScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Perfil" />
);

export const AcercaScreen = ({navigation}) => (
  <Screen navigation={navigation} name="AcercaDe" />
);

export const SoporteScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Soporte" />
);

export const SalirScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Salir" />
);

export const CondicionesScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Condiciones" />
);
