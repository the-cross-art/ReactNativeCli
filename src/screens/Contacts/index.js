import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import {CONTACT_DETAIL} from '../../constants/routeNames';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
import {navigate} from '../../navigations/SideMenu/RootNavigator';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  console.log('data:>>', data);
  console.log('loading:>>', loading);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" style={{padding: 10}} size={25} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
    />
  );
};

export default Contacts;
