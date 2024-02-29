import { StyleSheet, Text, Image, useWindowDimensions, Pressable } from "react-native";
import Card from "./Card";
import { useEffect } from "react";
import { useState } from "react";

const ProductItem = ({product, navigation}) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const {width, height} = useWindowDimensions();

  /* Corrroboracion de vertial u horizontal */
  useEffect(() => {
    if(height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width,height])

  return (
    <>
      <Pressable style={styles.pressable}onPress={()=> navigation.navigate('ItemDetail', {id: product.id})}>
        <Card style={styles.card}>
          <Text style={width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
          <Image style={styles.image} source={{uri: product.images[0]}}/>
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  pressable: {
    padding: 20,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textMin: {
    fontSize: 14,
    width: '70%',
  },

  text: {
    fontSize: 20,
    width: '70%',
  },

  image: {
    width: 60,
    height: 60,
    marginLeft: 10, 
  },
});
