import React, { useEffect, useState} from 'react'
import allCartItems from '../data/cart.json'
import { View, Text, FlatList, StyleSheet } from "react-native";
import CartItem from '../components/CartItem'

const Cart = () => {
    const [cartItems, setCartItems] = useState ([]);
    const [total, setTotal] = useState(0);

useEffect(() => {
    const total = allCartItems.reduce((acumulador, currentItem)=> acumulador += (currentItem.quantity * currentItem.price), 0)
    setTotal(total)
    setCartItems(allCartItems);
},[]);

  return (
    <View>
      <FlatList 
      data={cartItems}
      renderItem={({item})=> <CartItem item={item} />}
      keyExtractor={(cartItem) => cartItem.id}
      />
      <Text>Total: ${total}</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})