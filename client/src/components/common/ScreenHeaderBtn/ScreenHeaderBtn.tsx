import styles from "./screenheader.style";

import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  DimensionValue,
} from "react-native";

interface ScreenHeaderBtnProps {
  image: ImageSourcePropType;
  dimension: DimensionValue | undefined;
  handlePress?: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  image,
  dimension = "60%",
  handlePress = () => {},
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        style={[{ width: dimension, height: dimension }, styles.btnImg]}
        source={image}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
