import { ImageSourcePropType } from 'react-native';

interface PartImage {
    [key: string]: ImageSourcePropType
}

const partImages: PartImage = {
    airspreed: require('../../assets/images/parts/airspreed.jpg'),
    carburetor: require('../../assets/images/parts/carburetor.jpg'),
    gyro: require('../../assets/images/parts/gyro.jpg'),
    radar: require('../../assets/images/parts/radar.jpg'),
    battery: require('../../assets/images/parts/battery.jpg'),
    light: require('../../assets/images/parts/light.jpg'),
}

export default partImages;