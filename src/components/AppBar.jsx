import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

import theme from "../theme";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: theme.colors.appBarBackground,
    height: "15%",
  },
});

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBarTab name={"Repositories"} route={"/"} />
      <AppBarTab name={"Sign in"} route={"/signin"} />
    </View>
  );
};

export default AppBar;
