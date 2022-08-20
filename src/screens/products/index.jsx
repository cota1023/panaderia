import React from "react";
import { Text, View, Button } from "react-native";

import { styles } from "./styles";

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button
        title="Ir a Producto"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
};

export default Products;
