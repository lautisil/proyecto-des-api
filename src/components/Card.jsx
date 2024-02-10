import { StyleSheet, Text, View } from 'react-native'

const Card = ( {children} ) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
};

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
})