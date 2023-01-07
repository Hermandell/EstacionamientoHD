import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { RestaurantStack } from "./EstacionaminetoStack";


import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { Icon } from "@rneui/base";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#00a680",
                tabarinactiveTintColor: "#646464",
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            })}
        >
            <Tab.Screen
                name={screen.estacionamiento.tab}
                component={RestaurantStack}
                options={{ title: "Estacionamiento" }}
            />
           

            <Tab.Screen
                name={screen.favoritos.tab}
                component={FavoritesScreen}
                options={{ title: "Favoritos" }}
            />
            <Tab.Screen
                name={screen.ranking.tab}
                component={RankingScreen}
                options={{ title: "Ranking" }}
            />
            <Tab.Screen
                name={screen.buscar.tab}
                component={SearchScreen}
                options={{ title: "Buscar" }}
            />
            <Tab.Screen
                name={screen.cuenta.tab}
                component={AccountScreen}
                options={{ title: "Cuenta" }}
            />
        </Tab.Navigator>
    );
};

const screenOptions = (route, color, size) => {
    let iconName;
    if (route.name === screen.estacionamiento.tab) {
        iconName = "compass-outline";
    } else if (route.name === screen.favoritos.tab) {
        iconName = "heart-outline";
    } else if (route.name === screen.ranking.tab) {
        iconName = "star-outline";
    } else if (route.name === screen.buscar.tab) {
        iconName = "magnify";
    } else if (route.name === screen.cuenta.tab) {
        iconName = "account-outline";
    }
    return (
        <Icon type="material-community" name={iconName} color={color} size={size} />
    );
};
