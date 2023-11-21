import styles from './AppLoader.style';

import { View, ActivityIndicator } from 'react-native';

const AppLoader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} />
        </View>
    )
}

export default AppLoader;