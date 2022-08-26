import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../constants/colors";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";

const styles = StyleSheet.create({
  tabBarIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={20}
                color={colors.primary}
              />
              <Text>Shop</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={20}
                color={colors.primary}
              />
              <Text>Cart</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: "Orders",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={20}
                color={colors.primary}
              />
              <Text>Orders</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default Tabs;
