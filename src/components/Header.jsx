import { View, Text, StyleSheet } from "react-native";
import {colors} from '../global/colors'

function Header ({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.green,
        width: '100%',
    },
    text: {
        fontSize: 30, 
        color :'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});