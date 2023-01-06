import { useQuery } from "@apollo/client";
import { View, Pressable, StyleSheet, FlatList } from "react-native";
import * as Linking from "expo-linking";
import Text from "../components/Text";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/RepositoryItem";
import { GET_REPOSITORY } from "../graphql/queries";
import theme from "../theme";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  button: {
    margin: 10,
    backgroundColor: theme.colors.languageTagBackground,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    width: "90%",
  },
  reviewContainer: {
    display: "flex",
    backgroundColor: theme.colors.repositoryItemBackground,
    flexDirection: "row",
  },
  reviewInfoContainer: {
    margin: 7,
  },
  reviewTextContainer: {
    marginTop: 10,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderColor: theme.colors.languageTagBackground,
    borderWidth: 3,
    borderRadius: 25,
    alignItems: "center",
    margin: 10,
    paddingTop: 10,
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

const ReviewItem = ({ review }) => {
  const time = parseISO(review.createdAt);
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text
          style={{ color: "#0366d6" }}
          fontSize="subheading"
          fontWeight="bold"
        >
          {review.rating}
        </Text>
      </View>
      <View style={styles.reviewInfoContainer}>
        <Text fontSize="subheading" fontWeight="bold">
          {review.user.username}
        </Text>
        <Text style={{ color: "grey" }}>{format(time, "dd.MM.yyyy")}</Text>
        <Text style={styles.reviewTextContainer}>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const ItemSeparator = () => <View style={styles.separator} />;
  const { id } = useParams();
  const { data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId: id },
  });

  const reviewNodes = data?.repository?.reviews
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  if (!data?.repository) {
    return <Text>Something went wrong...</Text>;
  }

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryInfo repository={data?.repository} />
      )}
    />
  );
};

export default SingleRepository;
