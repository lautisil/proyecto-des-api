import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'

const CategoryItem = ({category}) => {
  return (
    <View>
        <Card style={{paddingTop: 10}}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
    }
});