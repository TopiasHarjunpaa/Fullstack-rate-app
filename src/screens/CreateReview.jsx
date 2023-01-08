import * as yup from "yup";

import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import ReviewForm from "../components/ReviewForm";
import useCreateReview from "../hooks/useCreateReview";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number("Rating needs to be number")
    .min(0, "Rating should be number between 0 and 100")
    .max(100, "Rating should be number between 0 and 100")
    .required("Rating is required"),
  text: yup.string().required("Review is required"),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, error }) => (
        <ReviewForm handleSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;

    try {
      const { data } = await createReview({
        ownerName,
        rating,
        repositoryName,
        text,
      });
      console.log(data);
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
