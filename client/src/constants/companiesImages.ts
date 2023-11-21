import { ImageSourcePropType } from 'react-native';

interface CompanyImage {
    [key: string]: ImageSourcePropType
}

const companyImages: CompanyImage = {
    skyBatics: require('../../assets/images/companyLogo/skyBatics.png'),
    theFlight: require('../../assets/images/companyLogo/theFlight.jpg'),
    boing: require('../../assets/images/companyLogo/boing.jpg'),
    canopy: require('../../assets/images/companyLogo/canopy.png'),
}

export default companyImages;