import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (sortOrder) => {
  const { orderDirection, orderBy } = sortOrder;

  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    arguments: {
      orderDirection,
      orderBy,
    },
  });

  return {
    repositories: data ? data.repositories : undefined,
  };
};

export default useRepositories;
