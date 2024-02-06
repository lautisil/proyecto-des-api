import { StyleSheet, Text, View , Pressable, Modal } from 'react-native';
import { useState } from 'react';

const RemoveModal = () => {

    const removeItem = () => {
        const filteredArray = cartItems.filter((item)=> item.id !== itemSelected)
        setCartItems(filteredArray)
        setModalVisible(false)
      }
    
    const [modalVisible, setModalVisible] = useState(false)
    

    return (
      <Modal animationType='slide' transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>Quieres eliminar el producto?</Text>
          <Pressable onPress={()=> setModalVisible(false)}>
            <Text>NO</Text>
          </Pressable>
          <Pressable onPress={removeItem}>
            <Text>SI</Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  export default RemoveModal;

  const styles = StyleSheet.create({
    modalContainer: {
      justifyContent:'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      padding:30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation:5
    }
  })