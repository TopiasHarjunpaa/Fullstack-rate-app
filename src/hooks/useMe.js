import { useApolloClient, useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useMe = (includeReviews) => {
  const { data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: includeReviews,
    },
  });
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return [signOut, data];
};

export default useMe;
