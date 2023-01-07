import { Picker } from "@react-native-picker/picker";

const SortRepositoriesBar = ({ selectedValue, setSortOrder }) => {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSortOrder(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="Latest repositories" />
      <Picker.Item label="Highest rated repositories" value="Highest rated" />
      <Picker.Item label="Lowest rated repositories" value="Lowest rated" />
    </Picker>
  );
};

export default SortRepositoriesBar;
