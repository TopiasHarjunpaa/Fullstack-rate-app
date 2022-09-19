import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    const token = data.authenticate.accessToken;
    console.log(token);
    await authStorage.setAccessToken(token);
    apolloClient.resetStore();

    return { data };
  };

  return [signIn, result];
};

export default useSignIn;
