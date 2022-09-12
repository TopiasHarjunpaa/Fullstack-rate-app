import { View, StyleSheet } from 'react-native';
import Text from './Text';
import LanguageTag from './LanguageTag';


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		margin: 15,
		flexGrow: 0,
		flexDirection: 'column',
	},
	separator: {
		height: 25,
	}
});

const RepositoryIdentifier = ({ item }) => {
	return (
		<View style={styles.container}>
			<Text style={{height: 25}} fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
			<Text style={{height: 25}}>{item.description}</Text>
			<LanguageTag language={item.language} />
		</View>
	);
};

export default RepositoryIdentifier