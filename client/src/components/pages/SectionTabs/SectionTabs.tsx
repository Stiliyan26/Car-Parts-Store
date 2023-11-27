import styles from "./SectionTabs.style";

import TabButton from "../../common/TabButton/TabButton";

import { FlatList } from "react-native";
import { TabsCommonProps } from "../../../types/interface/props-interface";

interface SectionTabsProps extends TabsCommonProps {
  sectionTabs: string[];
}

const SectionTabs: React.FC<SectionTabsProps> = ({
  sectionTabs,
  activeSectionTab,
  setActiveSectionTab,
}) => {
  return (
    <FlatList
      keyExtractor={(item) => item}
      data={sectionTabs}
      renderItem={({ item }) => (
        <TabButton
          name={item}
          activeSectionTab={activeSectionTab}
          setActiveSectionTab={setActiveSectionTab}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

export default SectionTabs;
