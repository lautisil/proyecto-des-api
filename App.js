import { useState } from 'react';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { useFonts } from 'expo-font';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')

  const [fontsLoaded] = useFonts();

  if (!fontsLoaded) {
    return null
  }


  return (
    <>
    {categorySelected ? (
      <ItemListCategories />
    ): (
      <Home setCategorySelected={setCategorySelected}/>
    )}
    </>
  )
}

/* const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#ededed',
    paddingTop: Constants.statusBarHeight
  },

   modalContainer: {
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding:30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation:5
  },

  nav: {
    flexDirection:'row', 
    alignItems:'center', justifyContent:'center', 
    fontSize:20,
    gap:10,
    paddingBottom:10
  },

  textinput: {
    borderColor:"black", 
    borderWidth: 1, 
    borderRadius:10, 
    width: '80%',
    textAlign:'center',
    paddingVertical:10,
    backgroundColor:"gray"
  },

  boton: {
    borderColor:"black", 
    borderWidth: 1, 
    borderRadius:10, 
    fontSize: 50,
    padding: 5,
  },

  categorias: {
    fontSize: 20,
    paddingVertical:4,
  },

  contcategorias: {
    backgroundColor: '#ededed',
    gap:10,
    paddingVertical:10
  }, 

});
*/

/* 
<Text>Hola, Coder!</Text>
<Text>Bienvenidos a mi Aplicacion</Text>
<Usuarios/>
<StatusBar style="auto" />

IMAGEN CON URL
<Image
style={{ width:50 , height:50}}
source={{uri: "https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiliiyiVGYjUnLSGnVLIi6.jpg"}} 
/>

BOTONES
TouchableOpacity (hace animacion de opacidad)
Pressable (no hace animacion de opacidad)
 


 const [inputValue, setInputValue] = useState('')
  const [cartItems, setCartItems] = useState(DATA)
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState(null)


  const handleInputChange = (value) => setInputValue
  (value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  }


  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime()
    }
    setCartItems([...cartItems, newItem])
  }

  const removeItem = () => {
    const filteredArray = cartItems.filter((item)=> item.id !== itemSelected)
    setCartItems(filteredArray)
    setModalVisible(false)
  }

  const RemoveModal = () => {
    return (
      <Modal animationType='slide' transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>Quieres eliminar el producto?</Text>
          <Pressable onPress={()=> setModalVisible(false)}>
            <Text>NO</Text>
          </Pressable>
          <Pressable onPress={removeItem}>
            <Text>SI</Text>
          </Pressable>
        </View>
      </Modal>
    );
  };


  return (
    <View style={styles.container}>

      <View style={styles.nav}>

        <Image 
          style={{width:40, 
          height:40}} 
          source={iconcarrito}
        />
        
        <Text 
          style={{fontSize:25}}>
          C A R R I T O
        </Text>    
      </View>


      <View style={{flexDirection:'row'}}>
        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.textinput}
          placeholder='Ingrese un producto'
        />
        <Pressable onPress={addItem}>
          <Text style={styles.boton}>
            +
          </Text>
        </Pressable>
      </View>

      <RemoveModal />

      <View style={styles.contcategorias}>
        <FlatList 
          data = {cartItems}
          renderItem={({item}) => (
            <View style={{width:400, flexDirection: 'row'}}>
              <Text style={styles.categorias}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{fontSize:20, paddingLeft:20}}>Borrar</Text>
              </Pressable>
            </View>
            )}
            keyExtractor={(item) => item.id}
          /> 
      </View>

    </View>
  );*/