import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import allProducts from '../data/products.json'
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

function ItemListCategories ({navigation, route}) {

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('');

    const {category} = route.params;
 
    useEffect(() => {
        if(category) {
            const products = allProducts.filter((product) => product.category === category)

            const filteredProducts = products.filter((product)=> product.title.includes(keyword)
            );
            setProducts(filteredProducts)
        }
    }, [])

    return (
        <View style={styles.container}>

            <Search onSearch={setKeyword}/>

            <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem product={item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
});