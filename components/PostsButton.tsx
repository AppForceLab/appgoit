import { TouchableOpacity } from "react-native-gesture-handler"
import PostsIcon from "../icons/PostsIcon"
import  colors  from "../styles/global";

type Props = {
    onPress: () => void;
    focused: boolean;
  }

const PostsButton:React.FC<Props> = ({onPress, focused}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <PostsIcon color={focused ? colors.orange : "#212121"}/>
        </TouchableOpacity>
    );
};

export default PostsButton;