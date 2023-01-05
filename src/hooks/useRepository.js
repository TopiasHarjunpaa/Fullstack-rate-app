import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = () => {
  const getRepository = async ({ repositoryId }) => {
    const { data } = await useQuery(GET_REPOSITORY, {
      variables: { repositoryId },
    });

    return { data };
  };

  return getRepository;
};

export default useRepository;
