import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { ProductItem } from "../../components";
import { PRODUCTS } from "../../constants/data/products";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const productCategory = PRODUCTS.filter(
    (product) => product.category === categoryId
  );
  const keyExtractor = (item) => item.id.toString();
  const onSelected = (item) => {
    navigation.navigate("Product", {
      productId: item.id,
      name: item.name,
    });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productCategory}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Products;
