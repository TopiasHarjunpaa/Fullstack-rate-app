import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/queries";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    const { data } = await mutate({
      variables: {
        review: {
          ownerName,
          rating: parseInt(rating),
          repositoryName,
          text,
        },
      },
    });

    return { data };
  };

  return [createReview, result];
};

export default useCreateReview;
