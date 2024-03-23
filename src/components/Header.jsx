import { View, Text, StyleSheet, Pressable  } from "react-native"
import {colors} from '../global/colors'
import { AntDesign } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/auth/authSlice"
import { deleteSession } from "../db"

function Header ({ title }) {
    const {localId, user} = useSelector(state => state.authReducer.value)
    const dispatch = useDispatch()

    const onLogout = async () => {
        dispatch(logout())
        const deletedSession = await deleteSession({ localId })
    }

    return (
        <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        {user ? (
        <Pressable style={styles.logoutIcon} >
          <AntDesign name="logout" size={24} color="white" />
        </Pressable>
        ) : null}
 
        </View>
    )
}

export default Header;

const styles = StyleSheet.create ({
    container: {
        height: 50,
        width: "100%",
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        fontSize: 30, 
        color :'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    logout: {
        position: "absolute",
        right: 10,
    },
});