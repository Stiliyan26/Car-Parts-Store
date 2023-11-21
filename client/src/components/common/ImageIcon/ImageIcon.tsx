import {
    Image,
    ImageSourcePropType
} from 'react-native';

interface ImageIconProps {
    source: ImageSourcePropType,
    size: number,
    color: string
}

const ImageIcon: React.FC<ImageIconProps> = ({
    source,
    size,
    color
}) => {
    return (
        <Image
            source={source}
            style={[
                {
                    width: size,
                    height: size,
                    tintColor: color
                }
            ]}
        />
    )
}

export default ImageIcon;
