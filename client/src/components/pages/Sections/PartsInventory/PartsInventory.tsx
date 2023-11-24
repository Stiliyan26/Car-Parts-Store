import styles from './PartsInventory.style';

import HeaderForList from '../../../common/HeaderForList/HeaderForList';
import PartCard from '../../PartCard/PartCard';
import BaseText from '../../../../components/common/BaseText/BaseText';
import NoDataMsg from '../../../../components/common/NoDataMsg/NoDataMsg';

import { getFlexBasis } from '../../../../utils/UIHelper';

import { FlatList, View } from 'react-native';
import useEmployeeData from '../../../../hooks/useEmployeeData';

const columns = ['Image', 'Name', 'Price per piece', 'Quantity']

const PartsInventory = () => {
  const { company } = useEmployeeData();

  const parts = company?.parts;

  return (
    <View style={styles.container}>
      <HeaderForList
        headerTitle='Inventory'
      />

      <View style={styles.headerContainer}>
        {columns.map((col, index) => (
          <BaseText
            key={`${col} ${index}`}
            style={[
              styles.columnStyle,
              getFlexBasis(columns.length)
            ]}
          >
            {col}
          </BaseText>
        ))}
      </View>

      {company && company.parts && company.parts.length > 0
        ? (
          <FlatList
            data={parts}
            renderItem={({ item }) => (
              <PartCard
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                pricePerPiece={item.pricePerPiece}
                quantity={item.quantity}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listStyle}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        )
        : <NoDataMsg />
      }
    </View>
  )
}

export default PartsInventory;
