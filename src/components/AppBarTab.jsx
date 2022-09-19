import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 0,
    padding: 20,
  },
});

const AppBarTab = ({ name, route, onPress }) => {
  return (
    <View style={styles.flexItem}>
      <Link to={route} onPress={onPress}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
          {name}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
