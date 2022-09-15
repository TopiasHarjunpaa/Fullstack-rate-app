import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

import theme from "../theme";

const styles = StyleSheet.create({
  appBar: {
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
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <AppBarTab name={"Repositories"} route={"/"} />
        <AppBarTab name={"Sign in"} route={"/signin"} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
