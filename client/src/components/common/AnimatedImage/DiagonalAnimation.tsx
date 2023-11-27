import { AnimatedImageProps } from "../../../types/interface/props-interface";

import { Animated, Easing } from "react-native";
import { useEffect } from "react";

const DiagonalAnimation: React.FC<AnimatedImageProps> = ({
  source,
  dynamicStyles = {},
}) => {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  useEffect(() => {
    const diagonalAnimation = Animated.parallel([
      Animated.timing(translateY, {
        toValue: -5,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(translateX, {
        toValue: 5,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]);

    const resetAnimation = Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]);

    const sequence = Animated.sequence([diagonalAnimation, resetAnimation]);

    Animated.loop(sequence).start();
  }, [translateX, translateY]);

  return (
    <Animated.Image
      source={source}
      style={[{ transform: [{ translateX }, { translateY }] }, dynamicStyles]}
    />
  );
};

export default DiagonalAnimation;
