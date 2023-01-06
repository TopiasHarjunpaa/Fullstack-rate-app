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
          <View style={{ flexDirection: "row" }}>
            <AppBarTab name={"Create a review"} route={"/review"} />
            <AppBarTab name={"Sign out"} route={"/"} onPress={signOut} />
          </View>
        ) : (
          <View>
            <AppBarTab name={"Sign in"} route={"/signin"} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
