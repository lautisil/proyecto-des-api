import { StyleSheet, Text, View } from "react-native"
import React, { useState, useEffect } from "react"
import TabNavigator from "./TapNavigator"
import AuthStack from "./AuthStack"
import { NavigationContainer } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { useGetProfileImageQuery } from "../services/shopService"
import { setProfileImage } from "../features/auth/authSlice"

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authReducer.value)
  const {data, error, isLoading} = useGetProfileImageQuery(localId)
  const dispatch = useDispatch()

  useEffect(()=> {
    if(data) {
      console.log(data.image);
      dispatch(setProfileImage(data.image))
    }
  }, [data])

  return (
    <NavigationContainer>
      {user ? 
      <TabNavigator /> :
       <AuthStack />
       }
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})