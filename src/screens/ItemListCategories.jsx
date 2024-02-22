import { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import allProducts from '../data/products.json'
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

function ItemListCategories ({category, setCategorySelected, setProductDetailId}) {

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('');

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
            <Text style={{fontSize: 30}}>C A T E G O R I A S</Text>

            <Pressable onPress={()=>setCategorySelected('')}>
                <Text>Inicio</Text>
            </Pressable>

            <Search onSearch={setKeyword}/>

            <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem product={item} setProductDetailId={setProductDetailId}/>}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
      flex:1,
      width: '100%',
      paddingTop: '5%',
      alignItems:'center',
      justifyContent:'center',
    },
});