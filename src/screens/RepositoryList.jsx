import { Text, FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "../components/RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import SortRepositoriesBar from "../components/SortRepositoriesBar";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    this.navigate = useNavigate();

    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.keyword}
          onChangeText={(value) => this.props.setKeyword(value)}
          placeholder="Enter filtering keyword"
        />
        <SortRepositoriesBar
          selectedValue={this.props.selectedValue}
          setSortOrder={this.props.setSortOrder}
        />
      </View>
    );
  };

  render() {
    const ItemSeparator = () => <View style={styles.separator} />;

    const renderItem = ({ item }) => (
      <Pressable onPress={() => this.navigate(`/${item.id ? item.id : ""}`)}>
        <RepositoryItem item={item} />
      </Pressable>
    );

    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {
  const [selectedValue, setSelectedValue] = useState("Latest repositories");
  const [sortOrder, setSortOrder] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [keyword, setKeyword] = useState("");
  const [searchKeyword] = useDebounce(keyword, 500);

  const handleSetSortOrder = (value) => {
    setSelectedValue(value);
    switch (value) {
      case "Latest repositories":
        setSortOrder({ orderBy: "CREATED_AT", orderDirection: "DESC" });
        break;
      case "Highest rated":
        setSortOrder({ orderBy: "RATING_AVERAGE", orderDirection: "DESC" });
        break;
      case "Lowest rated":
        setSortOrder({ orderBy: "RATING_AVERAGE", orderDirection: "ASC" });
        break;
      default:
        setSortOrder({ orderBy: "CREATED_AT", orderDirection: "DESC" });
        break;
    }
  };

  const { repositories, fetchMore } = useRepositories({
    first: 6,
    orderDirection: sortOrder.orderDirection,
    orderBy: sortOrder.orderBy,
    searchKeyword: searchKeyword,
  });

  const onEndReach = () => {
    if (repositories?.pageInfo?.hasNextPage) {
      console.log("Fetching more");
      fetchMore();
    } else {
      console.log("No more left to fetch");
    }
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
      selectedValue={selectedValue}
      setSortOrder={handleSetSortOrder}
      keyword={keyword}
      setKeyword={setKeyword}
    />
  );
};

export default RepositoryList;
