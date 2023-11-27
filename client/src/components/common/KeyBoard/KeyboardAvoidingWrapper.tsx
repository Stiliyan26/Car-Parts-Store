import { ChildrenProps } from "../../../types/interface/props-interface";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KeyboardAvoidingWrapper: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      keyboardOpeningTime={0}
      extraScrollHeight={50}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidingWrapper;
