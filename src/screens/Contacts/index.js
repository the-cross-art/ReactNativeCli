import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/container';
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text style={{padding: 10}}>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Contacts;
