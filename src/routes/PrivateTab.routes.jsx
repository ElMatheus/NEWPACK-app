import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import Checkout from "../screens/Checkout";
import Address from "../screens/Address";
import ShoppingCart from "../screens/ShoppingCart";
import UserForm from "../screens/UserForm";
import { Text } from 'react-native';
import { CartContext } from '../../src/contexts/CartContext';
import { useContext } from "react";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Cart" component={ShoppingCart} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={ShoppingCart} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
    <Stack.Screen name="UserForm" component={UserForm} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="Checkout" component={Checkout} />
  </Stack.Navigator>
);

const PrivateTab = () => {
  const { cart } = useContext(CartContext);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 67,
        },
      }}>
        <Tab.Screen name="HomeTab" component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name="boxes-stacked"
                style={{ marginTop: 12 }}
                size={24}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color, fontFamily: 'Poppins_500Medium', fontSize: 13 }}>Produtos</Text>
            ),
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }}
        />
        <Tab.Screen name="CartTab" component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="shopping-cart"
                style={{ marginTop: 12 }}
                size={24}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color, fontFamily: 'Poppins_500Medium', fontSize: 13 }}>Carrinho</Text>
            ),
            tabBarBadge: cart.length > 0 ? cart.length : undefined,
            tabBarBadgeStyle: {
              backgroundColor: "#4B6584",
              color: "#fff",
              fontFamily: 'Poppins_500Medium',
              fontSize: 10,
              top: 0,
            },
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default PrivateTab;