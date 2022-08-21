import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform } from "react-native";

import { colors } from "../constants/colors";
import { CategoriesScreen, ProductScreen, ProductsScreen } from "../screens";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "ios" ? colors.primary : colors.secondary,
        },
        headerTintColor: Platform.OS === "ios" ? colors.text : colors.textLight,
        headerTitleStyle: { fontFamily: "Lato-Bold" },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Categorías" }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
