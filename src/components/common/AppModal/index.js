import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

const AppModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.wrapper}></TouchableOpacity>
      <View style={styles.modalView}>
        <ScrollView>
          <Text>Hello from Modal</Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default AppModal;
