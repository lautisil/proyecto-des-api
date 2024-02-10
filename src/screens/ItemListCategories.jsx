import { View, Text, FlatList } from "react-native";
import products from '../data/products.json'
import ProductItem from "../components/ProductItem";

function ItemListCategories () {
    return (
        <View>
            <Text style={{fontSize: 30}}>C A T E G O R I A S</Text>

            <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem product={item} />}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ItemListCategories;