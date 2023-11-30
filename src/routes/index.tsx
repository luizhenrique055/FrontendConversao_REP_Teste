import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme, Box } from "native-base";
import { useState } from "react";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];

  return (
    <Box flex={1} bg={"gray.600"}>
      <NavigationContainer theme={theme}>
         <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
