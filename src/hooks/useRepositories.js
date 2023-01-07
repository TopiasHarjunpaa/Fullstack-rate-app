import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ orderDirection, orderBy, searchKeyword }) => {
  const [repositories, setRepositories] = useState();
  const { data, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderDirection,
      orderBy,
      searchKeyword,
    },
  });

  useEffect(() => {
    try {
      setRepositories(data.repositories);
    } catch (e) {
      console.log(e);
    }
  }),
    [error, data];

  return { repositories };
};

export default useRepositories;
