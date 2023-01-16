import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./UserGuest.Style";
import { Text, Button, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export const UserGuestScreen = () => {
    const navigation = useNavigation();
  const goToLogin = () => {
navigation.navigate(screen.cuenta.login);
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar Perfil </Text>
      <Text style={styles.description}>
        El mejor Parking esta frente a tu casa en el lugar mas comodo y seguro
        para tu vehiculo
      </Text>
      <Button title="Ver tu perfil" onPress={goToLogin} buttonStyle={styles.buttonStyle} />
    </ScrollView>
  );
};
