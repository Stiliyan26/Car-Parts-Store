import styles from './CustomDrawer.style';

import DrawerOptions from '../DrawerOptions/DrawerOptions';
import BaseText from '../../common/BaseText/BaseText';

import { useAuthContext } from '../../../contexts/useAuthContext';
import { icons, images } from '../../../constants';

import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import {
    View,
    ImageBackground,
    Image,
    ImageSourcePropType
} from 'react-native';

export interface CustomDrawerProps {
    props: DrawerContentComponentProps,
    image: ImageSourcePropType
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
    props,
    image
}) => {
    const { user } = useAuthContext();
    
    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                contentContainerStyle={styles.drawerContentScrollView}
                bounces={false}
            >
                <ImageBackground
                    style={styles.drawerBackgroundImg}
                    source={images.drawerBackgroundImg}
                >
                    <Image
                        source={image}
                        style={styles.logo}
                    />

                    <BaseText style={styles.primaryText}>
                        {user ? user.email : 'User'}
                    </BaseText>

                    <View style={styles.secondaryTextWrapper}>
                        <BaseText style={styles.secondaryText}>
                            {'Sky batics'}
                        </BaseText>

                        <Image 
                            style={styles.secondaryImage}
                            source={icons.company}
                        />
                    </View>
                </ImageBackground>

                <View style={styles.drawerOptions}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            {/* Other drawer options */}
            <DrawerOptions />
        </View>
    )
}

export default CustomDrawer;
