import { TouchableOpacity } from "react-native-gesture-handler"
import LogoutIcon from "../icons/LogoutIcon"

type Props = {
    onPress: () => void;
  }

const LogoutButton:React.FC<Props> = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LogoutIcon />
        </TouchableOpacity>
    );
};

export default LogoutButton;