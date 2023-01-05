import { useQuery } from "@apollo/client";
import { View, Pressable, StyleSheet } from "react-native";
import Text from "../components/Text";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/RepositoryItem";
import { GET_REPOSITORY } from "../graphql/queries";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: theme.colors.languageTagBackground,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    width: "90%",
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
  });

  if (!data?.repository) {
    return <Text>Something went wrong...</Text>;
  }
  return (
    <View>
      <RepositoryItem item={data?.repository} />
      <Pressable style={styles.button}>
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

export default SingleRepository;
