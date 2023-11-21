import styles from "./CustomButton.style";

import BaseText from "../BaseText/BaseText";

import { COLORS } from "../../../constants";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  textContent: string;
  bgColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  textContent,
  onPress,
  bgColor = COLORS.tertiary,
}) => {
  return (
    <TouchableOpacity
      style={[styles.createBtn, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <BaseText style={styles.btnContent}>{textContent}</BaseText>
    </TouchableOpacity>
  );
};

export default CustomButton;
