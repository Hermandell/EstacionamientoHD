import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.buscar.buscar}
                component={SearchScreen}
                options={{ title: "Buscar" }}
            />
        </Stack.Navigator>
    );
};
