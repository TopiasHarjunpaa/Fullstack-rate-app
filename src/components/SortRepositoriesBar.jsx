import { Picker } from "@react-native-picker/picker";

const SortRepositoriesBar = ({ sortOrder, setSortOrder }) => {
  return (
    <Picker
      selectedValue={sortOrder}
      onValueChange={(itemValue) => setSortOrder(itemValue)}
    >
      <Picker.Item
        label="Latest repositories"
        value={{ orderDirection: "CREATED_AT", orderBy: "DESC" }}
      />
      <Picker.Item
        label="Highest rated repositories"
        value={{ orderDirection: "RATING_AVERAGE", orderBy: "DESC" }}
      />
      <Picker.Item
        label="Lowest rated repositories"
        value={{ orderDirection: "RATING_AVERAGE", orderBy: "ASC" }}
      />
    </Picker>
  );
};

export default SortRepositoriesBar;
