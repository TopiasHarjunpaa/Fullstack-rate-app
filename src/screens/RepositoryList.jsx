import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "../components/RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import SortRepositoriesBar from "../components/SortRepositoriesBar";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({
  repositories,
  sortOrder,
  setSortOrder,
}) => {
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
      ListHeaderComponent={() => (
        <SortRepositoriesBar
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      )}
    />
  );
};

const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState({
    orderDirection: "CREATED_AT",
    orderBy: "DESC",
  });

  const { repositories } = useRepositories(sortOrder);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
    />
  );
};

export default RepositoryList;
