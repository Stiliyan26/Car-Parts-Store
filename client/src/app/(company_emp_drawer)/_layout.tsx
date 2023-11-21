import CustomDrawer from '../../components/drawer/CustomDrawer/CustomDrawer';
import ImageIcon from '../../components/common/ImageIcon/ImageIcon';

import { COLORS, FONT, SIZES, icons, images } from '../../constants';
import useEmployeeData from '../../hooks/useEmployeeData';
import companyImages from '../../constants/companiesImages';

import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
    const { company } = useEmployeeData();

    const image = company
        ? companyImages[company.imageUrl]
        : images.planeLogo

    return (
        <Drawer
            drawerContent={props => (
                <CustomDrawer
                    props={props}
                    image={image}
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
                name='dashboard'
                options={{
                    drawerLabel: 'Dashboard',
                    title: 'Dashboard',
                    drawerIcon: ({ size, color }) => (
                        <ImageIcon
                            source={icons.dashboard}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name='create_part'
                options={{
                    drawerLabel: 'Create Part',
                    title: 'Create Part',
                    drawerIcon: ({ size, color }) => (
                        <ImageIcon
                            source={icons.part}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer>
    );
}
