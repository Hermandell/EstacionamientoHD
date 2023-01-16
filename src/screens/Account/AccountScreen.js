import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggerScreen } from "./UserLoggerScreen";

export const AccountScreen = () => {
    const [hasLogged, setHasLogged] = useState(null);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setHasLogged(true);
            } else {
                setHasLogged(false);
            }
        });
    }, []);
    return hasLogged ? <UserLoggerScreen /> : <UserGuestScreen />;
};
