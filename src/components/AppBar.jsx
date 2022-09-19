import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import useMe from "../hooks/useMe";

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
  const [signOut, data] = useMe();
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <AppBarTab name={"Repositories"} route={"/"} />
        {data?.me ? (
          <AppBarTab name={"Sign out"} route={"/"} onPress={signOut} />
        ) : (
          <AppBarTab name={"Sign in"} route={"/signin"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
