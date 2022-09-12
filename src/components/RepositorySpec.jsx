import { View, StyleSheet } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		padding: 10,
		flexDirection: 'column',
		alignItems: 'center',
	},
});

function formatValue(value) {
	return value > 999 ? (value / 1000).toFixed(1) + 'k' : value
}

const RepositorySpec = ({ value, name }) => {
	return (
		<View style={styles.container}>
			<Text style={{height: 25}} fontSize='subheading' fontWeight='bold'>{formatValue(value)}</Text>
			<Text style={{height: 25}} fontSize='body'>{name}</Text>
		</View>
	);
};

export default RepositorySpec