import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform } from "react-native";

import { colors } from "../constants/colors";
import { CartScreen } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart" screenOptions=
      {{
        headerStyle: {
          backgroundColor:
            Platform.OS === "ios" ? colors.primary : colors.secondary,
        },
        headerTintColor: Platform.OS === "ios" ? colors.text : colors.textLight,
        headerTitleStyle: { fontFamily: "Lato-Bold" },
      }}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
