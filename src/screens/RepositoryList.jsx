import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "../components/RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const ItemSeparator = () => <View style={styles.separator} />;
  const navigate = useNavigate();
  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigate(`/${item.id ? item.id : ""}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  );

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
