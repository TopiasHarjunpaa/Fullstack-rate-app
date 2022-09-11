import { View, Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ style, name }) => {
  return (
    <View style={style}>
        <Pressable>
					<Text color='textSecondary' fontSize='subheading' fontWeight='bold'>
						{name}
					</Text>
				</Pressable>
    </View>
  );
};

export default AppBarTab;
