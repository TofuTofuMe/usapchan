import React from 'react';
import {Modal, View, Text, Pressable} from 'react-native';
import Style from '../Style';

const PopupModal = ({modal, setModal}) => {
  return (
    <Modal visible={modal.visibility} animationType="fade" transparent={true}>
      <View style={Style.modalView}>
        <View style={Style.modalCard}>
          <Text style={Style.text}>{JSON.stringify(modal.message)}</Text>
          {modal.interactable === true && (
            <>
              <Pressable
                style={({pressed}) => [
                  Style.pressable,
                  pressed && Style.pressablePressed,
                ]}
                onPress={() =>
                  setModal(prevModal => ({
                    ...prevModal,
                    visibility: false,
                    interactable: false,
                  }))
                }>
                <Text style={Style.button}>OK</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;