import styles from "./CompanyDetailsTitle.style";

import InfoRowWithIcon from "../../../common/InfoRowWithIcon/InfoRowWithIcon";
import BaseText from "../../../common/BaseText/BaseText";

import companyImages from "../../../../constants/companiesImages";
import { CompanyInfoCommonProps } from "../../../../types/interface/props-interface";
import { icons } from "../../../../constants";

import { View, Image, ImageSourcePropType } from "react-native";

interface CompanyDetailsTitleProps extends CompanyInfoCommonProps {
  email: string;
}

interface RowInfoData {
  icon: ImageSourcePropType,
  title: string
}

const CompanyDetailsTitle: React.FC<CompanyDetailsTitleProps> = ({
  imageUrl,
  name,
  location,
  email,
}) => {
  const infoArray: RowInfoData[] = [
    { icon: icons.mail, title: email },
    { icon: icons.location, title: location },
  ];

  const getInfo = () =>
    infoArray.map((info, index) => (
      <InfoRowWithIcon
        key={`${info.title} ${index}`}
        icon={info.icon}
        title={info.title}
      />
    ));

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logoImage} source={companyImages[imageUrl]} />
      </View>

      <BaseText style={styles.title}>{name}</BaseText>

      <View style={styles.infoRowWrapper}>{getInfo()}</View>
    </View>
  );
};

export default CompanyDetailsTitle;
