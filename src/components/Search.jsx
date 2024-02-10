import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  // filtra los productos segun lo que este en input
  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  };

  //limpia el imput
  const removeInput = () => {
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSearch}
          onChangeText={setInput}
          value={input}
          placeholder="Nombre del producto..."
        />
        <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={35} color="black" />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingTop: 10,
  },
  inputSearch: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
  },
});
