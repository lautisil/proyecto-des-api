import { StyleSheet, Text, View } from 'react-native'

const CategoryItem = ({category}) => {
  return (
    <View>
      <Text style={styles.text}>{category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
    }
});