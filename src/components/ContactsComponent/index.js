import React from 'react';
import {View, Text, Modal} from 'react-native';
import AppModal from '../common/AppModal/index';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        modalFooter={<></>}
        modalBody={<View></View>}
        title="My @Username"
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />

      <CustomButton
        title="Open Modal"
        secondary
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ContactsComponent;
