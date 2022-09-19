import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useMe = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return [signOut, data];
};

export default useMe;
