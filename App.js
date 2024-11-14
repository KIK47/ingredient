import * as React from "react";
import { View, Text } from "react-native";
import Splash from "./sceens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./sceens/Home";
import Detail from "./sceens/Detail";
import Ingredient from "./sceens/Ingredient";
import Addingredient from "./sceens/Addingredient";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown:false,
            title: "Recipe",
            headerStyle: {
              backgroundColor: "#2E8B57",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "ค้นหาวัตถุดิบ" }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "ข้อมูลวัตถุดิบ" }}
        />
        <Stack.Screen
          name="Ingredient"
          component={Ingredient}
          options={{ title: "วัตถุดิบในคลัง" }}
        />
        <Stack.Screen
          name="Addingredient"
          component={Addingredient}
          options={{ title: "เพิ่มวัตถุดิบในคลัง" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
