import * as yup from "yup";

import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import useSignUp from "../hooks/useSignUp";
import SignUpForm from "../components/SignUpForm";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .max(30, "Maximum length is 30 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Minimum length is 5 characters")
    .max(50, "Maximum length is 50 characters")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password confirm is required"),
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, error }) => (
        <SignUpForm handleSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const signInResult = await signUp({ username, password });
      const signUpResult = await signIn({ username, password });

      console.log(signInResult.data);
      console.log(signUpResult.data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
