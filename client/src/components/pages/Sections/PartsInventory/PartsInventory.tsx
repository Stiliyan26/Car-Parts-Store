import styles from './PartsInventory.style';

import HeaderForList from '../../../common/HeaderForList/HeaderForList';
import BaseText from '../../../common/BaseText/BaseText';
import NoDataMsg from '../../../common/NoDataMsg/NoDataMsg';
import AppLoader from '../../../common/Loader/AppLoader';
import PartCardList from '../../Part/PartCardList/PartCardList';

import { useCompanyContext } from '../../../../contexts/useCompanyContext';

import { getFlexBasis } from '../../../../utils/UIHelper';

import { View } from 'react-native';

const columns = ['Image', 'Name', 'Price per piece', 'Quantity']

const PartsInventory = () => {
  const { parts, isLoading } = useCompanyContext();

  const getParts = () => {
    if (isLoading) {
      return <AppLoader />;
    } 
    
    if (parts.length === 0) {
      return <NoDataMsg />;
    }

    return <PartCardList parts={parts} />
  }

  return (
    <View style={styles.container}>
      <HeaderForList
        headerTitle='Inventory'
      />

      <View style={styles.headerContainer}>
        {columns.map((col, index) => (
          <BaseText
            key={`${col} ${index}`}
            style={[styles.columnStyle, getFlexBasis(columns.length)]}
          >
            {col}
          </BaseText>
        ))}
      </View>

      {getParts()}
    </View>
  )
}

export default PartsInventory;
