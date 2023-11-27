import CompanyCard from '../CompanyCard/CompanyCard';
import CardList from '../../../common/CardList/CardList';

import { CompanyCardData } from '../../../../types/interface/core-interface';

interface CompanyCardListProps {
  companies: CompanyCardData[]
}
const CompanyCardList: React.FC<CompanyCardListProps> = ({ companies }) => {
  const WrappedCompanyList = CardList(CompanyCard);

  return <WrappedCompanyList data={companies} />
}

export default CompanyCardList;
