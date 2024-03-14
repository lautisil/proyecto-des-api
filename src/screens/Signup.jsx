import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import InputForm from "../components/InputForm"
import { useSignUpMutation } from "../services/authService"
import SubmitButton from "../components/SubmitButton"
import { useDispatch } from "react-redux"
import { setUser } from "../features/auth/authSlice"
import { signupSchema } from "../validations/signupSchema"
import { colors } from "../global/colors"

const Signup = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [errorMail, setErrorMail] = useState("")
  const [password, setPassword] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
  
  const [triggerSignup, result] = useSignUpMutation()

  
  const dispatch = useDispatch()

  const onSubmit = () => {
    // consola
    console.log("mail", errorMail)
    console.log("password", errorPassword)
    console.log("confirmPassword", errorConfirmPassword)

    try {
      setErrorMail("")
      setErrorPassword("")
      setErrorConfirmPassword("")

      signupSchema.validateSync({ password, confirmPassword, email });
      triggerSignup({ email, password })
      console.log("Registro exitoso")
    } 
    catch (err) {
      console.log("path", err.path)
      switch (err.path) {
        case "email":
          setErrorMail(err.message)
          break;
        case "password":
          setErrorPassword(err.message)
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message)
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result])

  return (
    <View style={styles.container}>
      <Text style={styles.textEncabezado}>R E G I S T E R</Text>
      <InputForm 
      label={"Email"} 
      error={errorMail} 
      onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      <InputForm
        label={"Confirm password"}
        error={errorConfirmPassword}
        onChange={setConfirmPassword}
        isSecure={true}
      />
      <Pressable onPress={() => navigation.navigate("Login")}
      style={styles.button}>
        <Text style={styles.text}>Go to Login</Text>
      </Pressable>
      <SubmitButton  title={"Register"} onPress={onSubmit} />
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    width:"auto"
  },
  textEncabezado: {
    fontFamily: "InterBold",
    fontSize: 22,
    color: "black",
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    width: '40%',
    padding: 10,
    borderRadius:8,
    color: "white"
  },
  text: {
    fontFamily: "InterRegular",
    fontSize: 18,
    color: "white",
  }
})