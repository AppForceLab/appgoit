import { TouchableOpacity } from "react-native-gesture-handler";
import AddIcon from "../../icons/AddIcon";

type Props = {
  onPress: () => void;
};

const AddBtn:React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AddIcon />
    </TouchableOpacity>
  );
};

export default AddBtn;
