import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Products from "../screens/Products";
import ProductDetails from "../screens/Products/[id]/index";
import Checkout from "../screens/Checkout";
import Address from "../screens/Address";
import EmailForm from "../screens/EmailForm";
import ShoppingCart from "../screens/ShoppingCart";
import UserForm from "../screens/UserForm";
import Sucess from "../screens/SucessScreen";
import { Text } from 'react-native';
import { CartContext } from '../../src/contexts/CartContext';
import { useContext } from "react";
import UserInfos from "../screens/UserInfos";
import UserOrders from "../screens/UserOrders";
import HelpPage from "../screens/HelpPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProductsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="Cart" component={ShoppingCart} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} initialParams={{ id: null, quantityParams: null }} />
    <Stack.Screen name="UserInfos" component={UserInfos} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="EmailForm" component={EmailForm} />
    <Stack.Screen name="UserOrders" component={UserOrders} />
    <Stack.Screen name="Help" component={HelpPage} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={ShoppingCart} />
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} initialParams={{ id: null, quantityParams: null }} />
  </Stack.Navigator>
);

const FinishStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Checkout" component={Checkout} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="EmailForm" component={EmailForm} />
    <Stack.Screen name="UserForm" component={UserForm} />
  </Stack.Navigator>
);

const PrivateTab = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 67,
        },
      }}>
        <Tab.Screen name="ProductsTab" component={ProductsStack}
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
        <Tab.Screen name="FinishTab" component={FinishStack}
          options={{
            tabBarVisible: false,
            tabBarItemStyle: {
              display: "none",
            },
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen name="Sucess" component={Sucess}
          options={{
            tabBarVisible: false,
            tabBarItemStyle: {
              display: "none",
            },
            tabBarStyle: { display: 'none' },
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </>
  );
};

export default PrivateTab;