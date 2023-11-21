import styles from "./InfoRowWithIcon.style";

import BaseText from "../BaseText/BaseText";

import { View, Image, ImageSourcePropType } from "react-native";

export interface InfoRowWithIconProps {
  icon: ImageSourcePropType;
  title: string;
}

const InfoRowWithIcon: React.FC<InfoRowWithIconProps> = ({ icon, title }) => {
  return (
    <View style={styles.rowWrapper}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={icon} />
      </View>

      <BaseText style={styles.title} numberOfLines={1}>
        {title}
      </BaseText>
    </View>
  );
};

export default InfoRowWithIcon;
