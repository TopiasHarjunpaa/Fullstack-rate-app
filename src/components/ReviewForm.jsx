import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    width: "90%",
  },
  button: {
    margin: 10,
    backgroundColor: theme.colors.languageTagBackground,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    width: "90%",
  },
});

const ReviewForm = ({ handleSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textInput}
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        style={styles.textInput}
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.textInput}
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        style={styles.textInput}
        name="text"
        placeholder="Review"
        multiline={true}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text
          style={{ textAlign: "center" }}
          color="textSecondary"
          fontSize="subheading"
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
