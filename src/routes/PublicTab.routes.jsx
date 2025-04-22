import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

const PublicTab = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },

      }}>
        <Tab.Screen name="Login" component={Login} options={
          {
            tabBarItemStyle: {
              display: 'none',
            },
          }
        } />

      </Tab.Navigator>
      <StatusBar style="auto" />
    </>
  );
};

export default PublicTab;