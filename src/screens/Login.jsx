import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"
import { useDispatch } from "react-redux"
import { setUser } from "../features/auth/authSlice"
import { useLoginMutation } from "../services/authService"
import { loginSchema } from "../validations/loginSchema"
import { colors } from "../global/colors"
import { insertSession } from "../db"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [errorMail, setErrorMail] = useState("")
  const [password, setPassword] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [triggerSignin, result] = useLoginMutation()

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(result);
    if (result.data) {
      dispatch(setUser(result.data))
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      })
      .then((result) => console.log(result))
      .catch(err => console.log(err.message))
    }
  }, [result])

  const onSubmit = () => {
    try {
      loginSchema.validateSync({ password, email })
      triggerSignin({ email, password })
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message)
          break;
        case "password":
          setErrorPassword(err.message)
          break;
        default:
          break;
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textEncabezado}>L O G I N</Text>
      <InputForm 
      label={"Email"}
      error={errorMail}
      onChange={setEmail} 
      />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      {
      result.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff"
        />
        ) : (
          <SubmitButton title={"Login"} onPress={onSubmit} />
        )
      }
      <Pressable onPress={() => navigation.navigate("Signup")} style={styles.button}>
        <Text style={styles.text}>Go to register</Text>
      </Pressable>
    </View>
  )
}

export default Login

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
  },
})