import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import AppBar from "./AppBar";

import theme from "../theme";
import SignIn from "../screens/SignIn";
import RepositoryList from "../screens/RepositoryList";
import SingleRepository from "../screens/SingleRepository";
import CreateReview from "../screens/CreateReview";
import SignUp from "../screens/SignUp";
import MyReviews from "../screens/MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/createreview" element={<CreateReview />} exact />
        <Route path="/myreviews" element={<MyReviews />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path=":id" element={<SingleRepository />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
