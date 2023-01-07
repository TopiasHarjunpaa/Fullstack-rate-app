import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    width: "90%",
  },
  button: {
    margin: 10,
    backgroundColor: theme.colors.languageTagBackground,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    width: "90%",
  },
});

const SignUpForm = ({ handleSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textInput}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.textInput}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikTextInput
        style={styles.textInput}
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text
          style={{ textAlign: "center" }}
          color="textSecondary"
          fontSize="subheading"
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
