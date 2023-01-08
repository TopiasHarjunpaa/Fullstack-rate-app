import { View, StyleSheet, FlatList, Pressable, Alert } from "react-native";
import Text from "../components/Text";
import ReviewItem from "../components/ReviewItem";
import useMe from "../hooks/useMe";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  viewButton: {
    margin: 10,
    backgroundColor: theme.colors.languageTagBackground,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    alignSelf: "center",
    width: "45%",
  },
  deleteButton: {
    margin: 10,
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    alignSelf: "center",
    width: "45%",
  },
});

const ReviewItemWithButtons = ({ review, reviewHeader, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const deleteReviewAndRefetch = () => {
    deleteReview(review.id);
    refetch();
    console.log("Preview deleted");
  };

  const alertOnDelete = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteReviewAndRefetch() },
      ]
    );

  return (
    <View>
      <ReviewItem review={review} reviewHeader={reviewHeader} />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.viewButton}
          onPress={() => navigate(`/${review.repository.id}`)}
        >
          <Text
            style={{ textAlign: "center" }}
            color="textSecondary"
            fontSize="subheading"
          >
            View repository
          </Text>
        </Pressable>
        <Pressable style={styles.deleteButton} onPress={() => alertOnDelete()}>
          <Text
            style={{ textAlign: "center" }}
            color="textSecondary"
            fontSize="subheading"
          >
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const MyReviews = () => {
  const ItemSeparator = () => <View style={styles.separator} />;
  const [, data, refetch] = useMe(true);

  const reviewNodes = data?.me?.reviews
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  if (!data?.me?.reviews) {
    return <Text>Something went wrong...</Text>;
  }

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <ReviewItemWithButtons
          review={item}
          reviewHeader={item.repository?.fullName}
          refetch={refetch}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyReviews;
