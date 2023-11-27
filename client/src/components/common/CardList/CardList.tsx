import { SIZES } from '../../../constants';

import { FlatList } from 'react-native';

interface CardListProps<T> {
  data: T[];
}
const CardList =
  <T extends { id: string }>(WrappedComponent: React.FC<T>) => ({ data }: CardListProps<T>) => {
      return (
        <FlatList
          data={data}
          renderItem={({ item }) => <WrappedComponent {...item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{ borderRadius: SIZES.medium, }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      )
    }

export default CardList;
