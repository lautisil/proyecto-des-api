import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TextInput } from 'react-native';
import Usuarios from './src/components/Usuarios';
import iconcarrito from './assets/iconcarrito.png'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.nav}>

        <Image style={{width:40 , height:40}} source={iconcarrito}/>
        <Text >C A R R I T O</Text>    

      </View>

      <TextInput 
      style={styles.textinput} 
      placeholder='Ingrese un producto'/>

      <Text>Remeras</Text>
      <Text>Pantalones</Text>
      <Text>Zapatillas</Text>
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
    gap:10
  },

  textinput: {
    borderColor:"black", 
    borderWidth: 1, 
    borderRadius:10, 
    width: '90%',
    textAlign:'center',
    paddingVertical:10,
    backgroundColor:"gray"
  }
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
 */