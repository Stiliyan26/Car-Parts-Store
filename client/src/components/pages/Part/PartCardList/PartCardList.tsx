import PartCard from '../PartCard/PartCard';
import CardList from '../../../common/CardList/CardList';

import { Part } from '../../../../types/interface/core-interface';

interface PartCardListProps {
  parts: Part[]
}

const PartCardList: React.FC<PartCardListProps> = ({ parts }) => {
  const WrappedPardCard = CardList(PartCard);

  return <WrappedPardCard data={parts} />
}

export default PartCardList;
