import { View, StyleSheet } from "react-native";
import theme from "../theme";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import Text from "../components/Text";

const styles = StyleSheet.create({
  reviewContainer: {
    display: "flex",
    backgroundColor: theme.colors.repositoryItemBackground,
    flexDirection: "row",
  },
  reviewInfoContainer: {
    margin: 7,
    width: "80%",
  },
  reviewTextContainer: {
    marginTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
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

const ReviewItem = ({ review, reviewHeader }) => {
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
          {reviewHeader}
        </Text>
        <Text style={{ color: "grey" }}>{format(time, "dd.MM.yyyy")}</Text>
        <Text style={styles.reviewTextContainer}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
