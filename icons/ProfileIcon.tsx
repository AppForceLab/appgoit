
import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
    fill?: string;
    width?: number;
    height?: number;
    color?:string;
  }


const ProfileIcon:React.FC<Props> = ({ color = "#212121" }, props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default ProfileIcon;
