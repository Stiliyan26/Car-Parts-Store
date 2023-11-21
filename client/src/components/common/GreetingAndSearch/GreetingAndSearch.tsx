import styles from './GreetingAndSearch.style';

import BaseText from '../BaseText/BaseText';
import SearchWrapper from '../SearchWrapper/SearchWrapper';

import { View } from 'react-native';

interface GreetingAndSearchProps {
    message: string
}

const GreetingAndSearch: React.FC<GreetingAndSearchProps> = ({
    message = 'User'
}) => {
    return (
        <>
            <BaseText style={styles.greetingMessage}>
                Hello, {message}!
            </BaseText>

            <View style={styles.searchContainer}>
                <SearchWrapper />
            </View>
        </>
    )
}

export default GreetingAndSearch;
