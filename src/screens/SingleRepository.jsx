import { View, Pressable, StyleSheet, FlatList } from "react-native";
import * as Linking from "expo-linking";
import Text from "../components/Text";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/RepositoryItem";
import useRepository from "../hooks/useRepository";
import ReviewItem from "../components/ReviewItem";
import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  button: {
    margin: 10,
    backgroundColor: theme.colors.languageTagBackground,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    width: "90%",
    alignSelf: "center",
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem item={repository} />
      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL(repository?.url)}
      >
        <Text
          style={{ textAlign: "center" }}
          color="textSecondary"
          fontSize="subheading"
        >
          Open in Github
        </Text>
      </Pressable>
    </View>
  );
};

const SingleRepository = () => {
  const ItemSeparator = () => <View style={styles.separator} />;
  const { id } = useParams();
  const { repository, fetchMore, loading } = useRepository({
    repositoryId: id,
    first: 5,
  });

  const reviewNodes = repository?.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  if (loading || !repository) {
    return <Text>Loading...</Text>;
  }

  const onEndReach = () => {
    if (repository?.reviews?.pageInfo?.hasNextPage) {
      console.log("Fetching more");
      fetchMore();
    } else {
      console.log("No more left to fetch");
    }
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <ReviewItem review={item} reviewHeader={item?.user?.username} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
