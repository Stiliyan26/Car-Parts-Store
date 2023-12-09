import styles from './ImageInput.style';

import BaseText from '../../BaseText/BaseText';

import { useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface ImageInputProps {
  onSelectImage: (file: string) => void
}

const ImageInput: React.FC<ImageInputProps> = ({ onSelectImage }) => {
  const [file, setFile] = useState<string>('');
  const [error, setError] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        `Sorry, we need camera roll permission to upload images.`);
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        onSelectImage(result.assets[0].uri);
        setFile(result.assets[0].uri);
        setError(null);
      }
    }
  }

  const loadImage = () => {
    return file ? (
      <View style={styles.imageContainer}>
        <Image source={{ uri: file }} style={styles.image} />
      </View>
    ) : (
      <BaseText>{error}</BaseText>
    );
  }

  return (
    <View style={styles.container}>
      {loadImage()}

      <TouchableOpacity style={styles.button}
        onPress={pickImage}
      >
        <BaseText style={styles.buttonText}>Choose Logo</BaseText>
      </TouchableOpacity>
    </View>
  );
}

export default ImageInput;

