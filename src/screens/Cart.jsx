import React, { useEffect, useState} from 'react'
import allCartItems from '../data/cart.json'
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import CartItem from '../components/CartItem'
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService";


const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
   
    const [triggerPost, result] = usePostOrderMutation()

    const confirmCart = ()=> {
      triggerPost({ total, cartItems, user: "loggedUser"})
    }
  
  return (
    <View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text>Total: ${total}</Text>
          <Pressable onPress={confirmCart}>
            <Text>Confirm</Text>
          </Pressable>
        </>
      ) : (
        <Text>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart

const styles = StyleSheet.create({})