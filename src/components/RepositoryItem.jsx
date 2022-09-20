import { View, Image, StyleSheet } from "react-native";
import theme from "../theme";
import RepositoryIdentifier from "./RepositoryIdentifier";
import RepositorySpec from "./RepositorySpec";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.repositoryItemBackground,
  },
  identifierContainer: {
    flexGrow: 0,
    flexDirection: "row",
  },
  specContainer: {
    flexGrow: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 15,
    marginRight: 15,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.flexContainer}>
      <View style={styles.identifierContainer}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <RepositoryIdentifier item={item} />
      </View>
      <View style={styles.specContainer}>
        <RepositorySpec value={item.stargazersCount} name="Stars" />
        <RepositorySpec value={item.forksCount} name="Forks" />
        <RepositorySpec value={item.reviewCount} name="Reviews" />
        <RepositorySpec value={item.ratingAverage} name="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
