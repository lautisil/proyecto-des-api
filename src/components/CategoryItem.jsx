import { Pressable, StyleSheet, Text } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ItemListCategories", {category})}>
      <Card style={styles.card}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
        fontFamily: 'InterRegular',
        paddingVertical: 2
    },

    card: {
      marginHorizontal: 30,
      marginVertical: 10,
      padding: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: colors.lightGray,
      borderRadius: 10,
    },
});