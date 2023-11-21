import styles from './SectionFooter.style';

import SearchWrapper from '../../../../components/common/SearchWrapper/SearchWrapper';

import {
    KeyboardAvoidingView,
    Platform
} from 'react-native';

const SectionFooter = () => {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
            style={styles.container}
        >
            <SearchWrapper />
        </KeyboardAvoidingView>
    )
}

export default SectionFooter;
