import styles from './DrawerOptions.style';

import BaseText from '../../common/BaseText/BaseText';

import { useAuthContext } from '../../../contexts/useAuthContext';
import { otherOptions } from '../../../utils/helperFunctions';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const DrawerOptions = () => {
  const { logout } = useAuthContext();

  return (
    <View style={styles.otherContainer}>
      {
        otherOptions(logout, router).map((otherOption, index) => (
          <TouchableOpacity
            key={`${index} ${otherOption.iconName} ${otherOption.textContent}`}
            onPress={async () => await otherOption.onClick()}
            style={styles.otherTouchableContainer}
          >
            <View style={styles.rowWrapper}>
              <Ionicons
                name={otherOption.iconName}
                size={22}
              />

              <BaseText style={styles.otherText}>
                {otherOption.textContent}
              </BaseText>
            </View>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default DrawerOptions;
