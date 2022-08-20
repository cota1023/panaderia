import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import AppNavigator from "./navigation";

import Categories from "./screens/categories";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
    "Lato-Italic": require("../assets/fonts/Lato-Italic.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator size="large" color="red" />;
  }

  return <AppNavigator />;
}
