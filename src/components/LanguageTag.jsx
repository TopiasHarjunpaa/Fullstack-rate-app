import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.languageTagBackground,
    borderRadius: 5,
    padding: 6,
    alignSelf: "flex-start",
  },
});

const languageTag = ({ language }) => {
  return (
    <View style={styles.container}>
      <Text color="textSecondary" fontSize="subheading">
        {language}
      </Text>
    </View>
  );
};

export default languageTag;
