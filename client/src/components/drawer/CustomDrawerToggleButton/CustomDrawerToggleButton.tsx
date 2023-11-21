import styles from './CustomDrawerToggleButton.style';

import { icons } from '../../../constants';

import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerActions, ParamListBase, useNavigation } from "@react-navigation/native";
import { PlatformPressable } from '@react-navigation/elements';
import { Platform, Image, Keyboard } from "react-native";

type Props = {
  accessibilityLabel?: string;
  pressColor?: string;
  pressOpacity?: number;
  tintColor?: string;
};

export default function CustomDrawerToggleButton({ tintColor, ...rest }: Props) {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <PlatformPressable
      {...rest}
      accessible
      accessibilityRole="button"
      android_ripple={{ borderless: true }}
      onPress={() => {
        Keyboard.dismiss();
        navigation.dispatch(DrawerActions.toggleDrawer())
      }}
      style={styles.touchable}
      hitSlop={Platform.select({
        ios: undefined,
        default: { top: 16, right: 16, bottom: 16, left: 16 },
      })}
    >
      <Image
        style={[styles.icon, tintColor ? { tintColor } : null]}
        source={icons.drawerIcon}
        fadeDuration={0}
      />
    </PlatformPressable>
  );
}



