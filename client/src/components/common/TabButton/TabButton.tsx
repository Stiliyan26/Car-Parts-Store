import styles from "./TabButton.style";

import BaseText from "../BaseText/BaseText";

import { TabsCommonProps } from "../../../types/interface/props-interface";
import { getTabColor, getTabTextColor } from "../../../utils/UIHelper";
import { TouchableOpacity } from "react-native";

interface TabButtonProps extends TabsCommonProps {
  name: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  name,
  activeSectionTab,
  setActiveSectionTab,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tabContainer, getTabColor(name, activeSectionTab)]}
      onPress={() => setActiveSectionTab(name)}
    >
      <BaseText
        style={[styles.btnText, getTabTextColor(name, activeSectionTab)]}
      >
        {name}
      </BaseText>
    </TouchableOpacity>
  );
};

export default TabButton;
