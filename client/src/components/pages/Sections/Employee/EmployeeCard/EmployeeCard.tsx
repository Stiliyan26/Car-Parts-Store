import styles from './EmployeeCard.style';

import RowWrapper from '../../../../../components/common/RowWrapper/RowWrapper';

import { getRowColor } from '../../../../../utils/UIHelper';

import { View } from 'react-native';

interface EmployeeCardProps {
  id: string,
  index: number,
  empInfo: {
    name: string,
    email: string,
    role: string
  }
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ empInfo, index, id }) => {
  const empInfoArr = Object.values(empInfo);

  return (
    <View
      style={[styles.infoRow, getRowColor(index)]}
      onStartShouldSetResponder={() => true}
    >
      <RowWrapper
        values={[...empInfoArr, 'Edit']}
        columnsLen={empInfoArr.length + 1}
        dynamicStyles={styles.infoText}
      />
    </View>
  )
}

export default EmployeeCard;
