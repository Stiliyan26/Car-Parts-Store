import CustomDrawer from '../../components/drawer/CustomDrawer/CustomDrawer';
import ImageIcon from '../../components/common/ImageIcon/ImageIcon';

import { COLORS, FONT, SIZES, icons, images } from '../../constants';

import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={props => (
                <CustomDrawer
                    props={props}
                    image={images.planeLogo}
                />
            )}
            screenOptions={{
                unmountOnBlur: true,
                headerShown: false,
                swipeEdgeWidth: 0,
                drawerActiveBackgroundColor: COLORS.lightPurple,
                drawerActiveTintColor: COLORS.lightGray,
                drawerInactiveTintColor: COLORS.black,
                drawerLabelStyle: {
                    marginLeft: -SIZES.large,
                    fontFamily: FONT.ChelaOneRegular,
                    fontSize: SIZES.medium
                }
            }}>
            <Drawer.Screen
                name='companies'
                options={{
                    drawerLabel: 'Companies',
                    title: 'Companies',
                    drawerIcon: ({ size, color }) => (
                        <ImageIcon
                            source={icons.company}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name='create_company'
                options={{
                    drawerLabel: 'Create Comapny',
                    title: 'Create Comapny',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome
                            name='plus'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer>
    );
}
