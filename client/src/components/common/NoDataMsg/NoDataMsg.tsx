import BaseText from '../BaseText/BaseText';
import styles from './NoDataMsg.style';

const NoDataMsg = () => {
  return (
    <BaseText style={styles.textStyles}>
      No such data!
    </BaseText>
  )
}

export default NoDataMsg;
