import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/AccountScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.ranking.ranking}
                component={AccountScreen}
                options={{ title: "Cuenta" }}
            />
        </Stack.Navigator>
    );
};
