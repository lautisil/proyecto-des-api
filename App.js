import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import TapNavigator from './src/navigation/TapNavigator';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

return ( <TapNavigator /> )
}


/*   return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      {productDetailId ? (
        <ItemDetail productDetailId={productDetailId} /> 
        )  : categorySelected ? (
          <ItemListCategories 
          setCategorySelected={setCategorySelected} 
          category={categorySelected}
          setProductDetailId={setProductDetailId}
          />
        ): (
        <Home setCategorySelected={setCategorySelected}/>
      )}
    </SafeAreaView>
  )
}

 const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#ededed',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0 ,
  },
 }); */
/* 
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