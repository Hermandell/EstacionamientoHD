import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { EstacionamientoScreen } from "../screens/Estacionamineto/EstacionamientoScreen";
import { AddEstacionamientoScreen } from "../screens/Estacionamineto/AddEstacionamientoScreen";

const Stack = createNativeStackNavigator();

export const RestaurantStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.estacionamiento.estacionamientos}
                component={EstacionamientoScreen}
                options={{ title: "Estacionamientos" }}
            />
             <Stack.Screen
                name={screen.estacionamiento.addEstacionamineto}
                component={AddEstacionamientoScreen}
                options={{ title: "Nuevo Estacionamiento" }}
            />
          
        </Stack.Navigator>
    );
};
