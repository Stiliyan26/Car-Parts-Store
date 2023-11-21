import { AnimatedImageProps } from "../../../types/interface/IProps";

import { Animated, Easing } from "react-native";
import { useEffect } from "react";

const LevitationAnimation: React.FC<AnimatedImageProps> = ({
  source,
  dynamicStyles = {},
}) => {
  const translateY = new Animated.Value(0);

  useEffect(() => {
    const levitationAnimation = Animated.timing(translateY, {
      toValue: -5,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const resetAnimation = Animated.timing(translateY, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    });

    const sequence = Animated.sequence([levitationAnimation, resetAnimation]);

    Animated.loop(sequence).start();
  }, [translateY]);

  return (
    <Animated.Image
      source={source}
      style={[{ transform: [{ translateY }] }, dynamicStyles]}
    />
  );
};

export default LevitationAnimation;
