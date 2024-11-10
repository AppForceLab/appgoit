import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type FotoProps = {
  image: ImageSourcePropType;
  icon: ImageSourcePropType ;
  OnClick: () => void;
};

const Avatar = ({ image, icon, OnClick }: FotoProps) => {
  return (
    <View style={styles.fotoContainer}>
      <View style={styles.imgWrap}>
        <Image style={styles.foto} source={image} />

        <TouchableWithoutFeedback onPress={OnClick}>
          <View style={styles.iconWrap}>
            <Image style={styles.icon} source={icon} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  fotoContainer: {
    width: "100%",
    height: 0,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  foto: {
    position: "absolute",
    height: 120,
    width: 120,
    borderRadius: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconWrap: {
    position: "absolute",
    bottom: 10,
    right: -20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  imgWrap: {
    position: "relative",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: -90,
  }
});
