import styles from './CompanyCard.style';

import BaseText from '../../common/BaseText/BaseText';

import companyImages from '../../../constants/companiesImages';
import { COMPANIES_DETAILS_ROUTE } from '../../../constants/routerConstants';
import { CompanyInfoCommonProps } from '../../../types/interface/IProps';
import { useCurrentCompanyContext } from '../../../contexts/useCurrentCompanyContext';

import { router } from 'expo-router';
import { View, TouchableOpacity, Image } from 'react-native';

interface ComapnyCardProps extends CompanyInfoCommonProps {
  companyId: string;
}

const CompanyCard: React.FC<ComapnyCardProps> = ({
  companyId,
  name,
  imageUrl,
  location,
}) => {
  const { setCompanyId } = useCurrentCompanyContext();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setCompanyId(companyId);
        router.push(COMPANIES_DETAILS_ROUTE(companyId));
      }}
    >
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => router.push(COMPANIES_DETAILS_ROUTE(companyId))}
      >
        <Image
          style={styles.image}
          source={companyImages[imageUrl]}
          resizeMode='cover'
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <BaseText style={styles.companyName}>{name}</BaseText>

        <BaseText style={styles.location} numberOfLines={1}>
          {location}
        </BaseText>
      </View>
    </TouchableOpacity>
  );
};

export default CompanyCard;
