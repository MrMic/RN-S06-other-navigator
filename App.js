import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "#3c0a6b",
          tabBarInactiveTintColor: "#ccc",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "Welcome",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "User",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="person" color={color} size={size} />;
            },
          }}
        />
      </BottomTab.Navigator>
      {/*  __________________________ DRAWER NAVIGATOR _______________________ */}
      {/* <Drawer.Navigator */}
      {/*   initialRouteName="Welcome" */}
      {/*   screenOptions={{ */}
      {/*     headerStyle: { */}
      {/*       backgroundColor: "#3c0a6b", */}
      {/*     }, */}
      {/*     headerTitleStyle: { */}
      {/*       fontWeight: "bold", */}
      {/*     }, */}
      {/*     // drawerStyle: { backgroundColor: "#ccc" }, */}
      {/*     headerTintColor: "#fff", */}
      {/*     drawerActiveBackgroundColor: "#f0e1ff", */}
      {/*     drawerActiveTintColor: "#3c0a6b", */}
      {/*   }} */}
      {/* > */}
      {/*   <Drawer.Screen */}
      {/*     name="Welcome" */}
      {/*     component={WelcomeScreen} */}
      {/*     options={{ */}
      {/*       drawerLabel: "Welcome Screen", */}
      {/*       drawerIcon: ({ color, size }) => ( */}
      {/*         <Ionicons name="home" color={color} size={size} /> */}
      {/*       ), */}
      {/*     }} */}
      {/*   /> */}
      {/*   <Drawer.Screen */}
      {/*     name="User" */}
      {/*     component={UserScreen} */}
      {/*     options={{ */}
      {/*       drawerLabel: "User Screen", */}
      {/*       drawerIcon: ({ color, size }) => ( */}
      {/*         <Ionicons name="person" color={color} size={size} /> */}
      {/*       ), */}
      {/*     }} */}
      {/*   /> */}
      {/* </Drawer.Navigator> */}
      {/*  ______________________________________________________________________ */}
    </NavigationContainer>
  );
}
