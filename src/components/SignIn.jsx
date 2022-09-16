import * as yup from "yup";

import { Formik } from "formik";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, error }) => (
        <SignInForm handleSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

export default SignIn;
