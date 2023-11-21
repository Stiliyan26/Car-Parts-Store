import styles from './PartCard.style';

import RowWrapper from '../../common/RowWrapper/RowWrapper';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { getFlexBasis } from '../../../utils/UIHelper';
import partImages from '../../../constants/partImages';

interface PartCardProps {
    id: string,
    imageUrl: string,
    name: string,
    pricePerPiece: string,
    quantity: string
}

const columns = ['Image', 'Name', 'Price Per Piece', 'Quantity'];

const PartCard: React.FC<PartCardProps> = ({
    id,
    imageUrl,
    name,
    pricePerPiece,
    quantity
}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={[
                { alignItems: 'flex-start' },
                styles.infoItemImg,
                getFlexBasis(columns.length)
            ]}>
                <TouchableOpacity style={styles.logoContainer}>
                    <Image
                        style={styles.image}
                        source={partImages[imageUrl]}
                        resizeMode='cover'
                    />
                </TouchableOpacity>
            </View>

            <RowWrapper
                values={[
                    name,
                    pricePerPiece,
                    quantity
                ]}
                columns={columns}
                dynamicStyles={styles.infoItem}
            />
        </TouchableOpacity>
    )
}

export default PartCard;
