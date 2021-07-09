import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import LoginComponent from '../../components/Login';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return <LoginComponent />;
};

export default Login;
