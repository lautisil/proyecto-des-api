import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TextInput } from 'react-native';
import Usuarios from './src/components/Usuarios';
import iconcarrito from './assets/iconcarrito.png'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10}}>

        <Image style={{width:40 , height:40}} source={iconcarrito}/>
        <Text >C A R R I T O</Text>    

      </View>

      <TextInput 
      style={{borderColor:"black", 
        borderWidth: 1, 
        borderRadius:10, 
        width: '90%',
        textAlign:'center',
        paddingVertical:10,
        backgroundColor:"gray"
      }} 
      placeholder='Ingrese un producto'/>

      <Text>Remeras</Text>
      <Text>Pantalones</Text>
      <Text>Zapatillas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
 */