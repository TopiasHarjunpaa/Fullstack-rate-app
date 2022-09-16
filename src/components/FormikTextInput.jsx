import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.errorColor,
  },
  errorBorder: {
    borderColor: theme.colors.errorColor,
  },
  normalBorder: {
    borderColor: theme.colors.secondary,
  },
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const textInputStyle = [
    showError && styles.errorBorder,
    showError === false && styles.normalBorder,
    style,
  ];

  return (
    <>
      <TextInput
        style={textInputStyle}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
