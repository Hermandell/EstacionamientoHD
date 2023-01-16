import { View, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./LoadingModal.Styles";
import { Overlay, Text } from "@rneui/base";

export const LoadingModal = (props) => {
    const { show, text } = props;

    return (
        <Overlay isVisible={show} overlayStyle={{ backgroundColor: "gray" }} 
        windowBackgroundColor="rgba(0, 0, 0, .5)" overlaybackgroundColor="transparent"
         >
            <ActivityIndicator size="large" color="#00ff00" />
            {text && <Text>{text}</Text>}
        </Overlay>
    );
};

LoadingModal.defaultProps = {
    show: false,
    text: "",
};
