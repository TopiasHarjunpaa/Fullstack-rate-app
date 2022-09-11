import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
		paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
		alignItems: 'flex-end',
		backgroundColor: theme.colors.appBarBackground,
		height: '15%',
  },
  flexItem: {
		flexGrow: 0,
		padding: 20,
	}
});

const AppBar = () => {
  return (
		<View style={styles.flexContainer}>
			<AppBarTab style={styles.flexItem} name={'Repositories'}/>
		</View>
	);
};

export default AppBar;