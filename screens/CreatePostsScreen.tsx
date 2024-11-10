import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import TrashIcon from "../icons/TrashIcon";
import React, { useState, useRef } from "react";
import { Button } from "react-native";
import { useRoute } from "@react-navigation/native";

// import DisabledButton from "../components/DisabledButton";
import PostInput from "../components/PostInput";
import LocationIcon from "../icons/LocationIcon";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);
  const navigation = useNavigation();

//   const handleTitleChange = (text) => setTitle(text);
//   const handleLocationChange = (text) => setLocation(text);

  const onPublish = () => {
    console.log("Publish");
  };

  const handleDeletePress = () => {
    console.log("Delete");
  };

  // const openCameraScreen = () => {
  //   navigation.navigate("Camera", {
  //     onReturnImage: (imageUri) => setCapturedImage(imageUri)
  //   });
  // };

//   const openCameraScreen = () => {
//     navigation.navigate("Camera");
//   };

  return (
    <View style={styles.container}>
      <Image style={styles.placeholder} />
      <View style={styles.placeholderOverlay}>
        <TouchableOpacity onPress={()=>{}}>
          <View style={styles.placeholderCircle}>
            <CameraIcon />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Завантажте фото</Text>
      <View style={[styles.innerContainer, styles.inputContainer]}>
        <PostInput
          value={title}
          autofocus={true}
          placeholder="Назва..."
          onTextChange={()=>{}}
        />

        <PostInput
          value={location}
          placeholder="Місцевість..."
          leftButton={<LocationIcon />}
          onTextChange={()=>{}}
        />
      </View>
      <View style={styles.buttonContainer}>
        {/* <DisabledButton onPress={onPublish}>
          <Text style={[styles.text, styles.buttonText]}>Опублікувати</Text>
        </DisabledButton> */}
      </View>
      <TouchableOpacity style={styles.trashButton} onPress={handleDeletePress}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  postImage: {
    width: "100%",
    borderRadius: 8,
    height: 240,
  },
  placeholder: {
    width: "100%",
    borderRadius: 8,
    height: 240,
    backgroundColor: colors.grey,
    marginBottom: 8,
  },
  placeholderCircle: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderOverlay: {
    position: "absolute",
    top: 40,
    left: 20,
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.border_gray,
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  buttonText: {
    textAlign: "center",
  },
  trashButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grey,
    position: "absolute",
    bottom: 34,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: -25 }],
  },
  cameraContainer: {
    width: "100%",
    height: 240,
    backgroundColor: colors.grey,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 50,
  },
});

export default CreatePostsScreen;
