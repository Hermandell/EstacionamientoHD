import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { screen } from "../utils";
import { LoginScreen } from "../screens/Account/LoginScreen";

const Stack = createNativeStackNavigator();

export const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.cuenta.cuenta}
                component={AccountScreen}
                options={{ title: "Cuenta" }}
            />
            <Stack.Screen
                name={screen.cuenta.login}
                component={LoginScreen}
                options={{ title: "Iniciar Sesion" }}
            />
        </Stack.Navigator>
    );
};
