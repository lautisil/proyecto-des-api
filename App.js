import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TextInput, TouchableOpacity, Pressable } from 'react-native';
import Usuarios from './src/components/Usuarios';
import iconcarrito from './assets/iconcarrito.png'
import { useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(0)

  const handleAddCounter = () => setCounter(counter + 1)


  const contador = 0

  return (
    <View style={styles.container}>

      <View style={styles.nav}>

        <Image style={{width:40 , height:40}} source={iconcarrito}/>
        <Text style={{fontSize:25}}>C A R R I T O</Text>    

      </View>

      <View style={{flexDirection:'row'}}>
        <TextInput 
          style={styles.textinput}
          placeholder='Ingrese un producto'/>
        
        <TouchableOpacity>
          <Text style={styles.boton}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containercategorias}>
        <Text style= {styles.categorias}>REMERAS</Text>
        <Text style= {styles.categorias}>PANTALONES</Text>
        <Text style= {styles.categorias}>ZAPATILLAS</Text>
        <Text style= {styles.categorias}>MEDIAS</Text>
        <Text style= {styles.categorias}>GORRAS</Text>
        <Text style= {styles.categorias}>CAMPERAS</Text>
        <Text style= {styles.categorias}>SHORTS</Text>
        <Text style= {styles.categorias}>BUZOS</Text>
        <Text style= {styles.categorias}>BOXERS</Text>
      </View>

      <Pressable onPress={handleAddCounter}>
        <Text style={{fontSize: 20}}>
           Contador: {counter} toques
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
    paddingVertical:20
  },

  nav: {
    flexDirection:'row', 
    alignItems:'center', justifyContent:'center', 
    fontSize:20,
    gap:10,
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
    fontSize:40,
    width:'auto',
    padding: 5,
    alignItems:'center',
    justifyContent:'center'
  },

  categorias: {
    fontSize: 15,
    padding: 4
  },

  containercategorias: {
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
    paddingVertical:20
  },

});


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
 */