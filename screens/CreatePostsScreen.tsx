import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import TrashIcon from "../icons/TrashIcon";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import DisabledButton from "../components/disabledButton";
import PostInput from "../components/PostInput";
import LocationIcon from "../icons/LocationIcon";
import { useNavigation } from "@react-navigation/native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigation = useNavigation();

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const handleTitleChange = (text) => setTitle(text);
  const handleLocationChange = (text) => setLocation(text);
  const camera = useRef();

  const [albums, setAlbums] = useState(null);
  const [MediaPermissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions();

  async function getAlbums() {
    if (MediaPermissionResponse.status !== "granted") {
      await requestPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setAlbums(fetchedAlbums);
  }

  const takephoto = async () => {
    console.log("take photo");
    if (camera.current) {
      const photo = await camera.current.takePictureAsync();
      setCapturedImage(photo.uri);
      MediaLibrary.saveToLibraryAsync(photo.uri);
      console.log(photo.uri);
    }
  };

  const onPublish = async () => {
    console.log("Publish");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    console.log(location);
    console.log("Publish end");
    navigation.navigate("Posts");
  };

  const handleDeletePress = () => {
    console.log("Delete");
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // const openCameraScreen = () => {
  //   navigation.navigate("Camera", {
  //     onReturnImage: (imageUri) => setCapturedImage(imageUri)
  //   });
  // };

  // const openCameraScreen = () => {
  //   navigation.navigate("Camera");
  // };

  return (
    <View style={styles.container}>
      <Image style={styles.placeholder} />
      {/* <View style={styles.placeholderOverlay}>
        <TouchableOpacity onPress={()=>{}}>
          <View style={styles.placeholderCircle}>
            <CameraIcon />
          </View>
        </TouchableOpacity>
      </View> */}
      <CameraView
        ref={camera}
        style={styles.placeholderOverlay}
        facing={facing}
      >
        <TouchableOpacity onPress={takephoto}>
          <View style={styles.placeholderCircle}>
            <CameraIcon />
          </View>
        </TouchableOpacity>
      </CameraView>
      <Text style={styles.text}>Завантажте фото</Text>
      <View style={[styles.innerContainer, styles.inputContainer]}>
        <PostInput
          value={title}
          autofocus={true}
          placeholder="Назва..."
          onTextChange={handleLocationChange}
        />

        <PostInput
          value={location}
          placeholder="Місцевість..."
          leftButton={<LocationIcon />}
          onTextChange={handleTitleChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <DisabledButton onPress={onPublish} buttonStyle={styles.button}>
          <Text style={[styles.text, styles.buttonText]}>Опублікувати</Text>
        </DisabledButton>
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
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default CreatePostsScreen;
