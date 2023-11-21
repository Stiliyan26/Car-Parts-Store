import { AnimatedImageProps } from "../../../types/interface/IProps";

import { Animated, Easing } from "react-native";
import { useEffect } from "react";

const RotationAnimation: React.FC<AnimatedImageProps> = ({
  source,
  dynamicStyles = {},
}) => {
  const rotateValue = new Animated.Value(0);

  useEffect(() => {
    const rotatingAnimation = Animated.timing(rotateValue, {
      toValue: 360,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    Animated.loop(rotatingAnimation).start();
  }, [rotateValue]);

  const rotateString = rotateValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.Image
      source={source}
      style={[{ transform: [{ rotate: rotateString }] }, dynamicStyles]}
    />
  );
};

export default RotationAnimation;
