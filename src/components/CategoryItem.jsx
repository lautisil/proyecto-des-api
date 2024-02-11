import { Pressable, StyleSheet, Text, View } from 'react-native'
import Card from './Card'

const CategoryItem = ({category, setCategorySelected}) => {
  return (
    <View>
        <Card style={{paddingTop: 10}}>
            <Pressable onPress={()=> setCategorySelected(category)}>
            <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
        fontFamily: 'InterRegular',
        paddingVertical: 2
    },
});