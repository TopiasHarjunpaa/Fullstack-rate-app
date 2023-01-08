import { View, StyleSheet, FlatList } from "react-native";
import Text from "../components/Text";
import ReviewItem from "../components/ReviewItem";
import useMe from "../hooks/useMe";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const MyReviews = () => {
  const ItemSeparator = () => <View style={styles.separator} />;
  const [, data] = useMe(true);

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
        <ReviewItem review={item} reviewHeader={item.repository?.fullName} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyReviews;
