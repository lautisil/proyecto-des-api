import { useState } from 'react';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { fonts } from './src/global/fonts';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')

  const [fontsLoaded] = useFonts(fonts);

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