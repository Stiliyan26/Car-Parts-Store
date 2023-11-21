import styles from "./FormButton.style";

import { COLORS } from "../../../constants";

import { TouchableOpacity } from "react-native";
import BaseText from "../../common/BaseText/BaseText";

interface FormButtonProps {
  bgColor?: string;
  btnLabel: string;
  textColor?: string;
  handlePress: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({
  bgColor = COLORS.primary,
  textColor = COLORS.lightGray,
  btnLabel = "Create",
  handlePress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bgColor }]}
      onPress={handlePress}
    >
      <BaseText style={[styles.content, { color: textColor }]}>
        {btnLabel}
      </BaseText>
    </TouchableOpacity>
  );
};

export default FormButton;
