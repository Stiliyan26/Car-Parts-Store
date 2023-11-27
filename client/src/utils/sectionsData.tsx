import EmployeeSection from '../components/pages/Sections/Employee/EmployeeSection/EmployeeSection';
import PurchasedPartsSection from '../components/pages/Sections/PurchasedParts/PurchasedPartsSection';
import SalePartsSection from '../components/pages/Sections/SaleParts/SalePartsSection';

import PartsInventory from '../components/pages/Sections/PartsInventory/PartsInventory';
import PartsSales from '../components/pages/Sections/PartsSales/PartsSales';
import PartsReports from '../components/pages/Sections/PartsReports/PartsReports';

import {
	CompanySections,
	EmpDashboardSections,
	companySectionsMapper,
	empDashboardSectionsMapper
} from '../types/enums';

export const companyComponents = {
	[companySectionsMapper[CompanySections.EMPLOYEE_TAB]]: <EmployeeSection />,
	[companySectionsMapper[CompanySections.PURCHASED_PARTS_TAB]]: <PurchasedPartsSection />,
	[companySectionsMapper[CompanySections.PARTS_FOR_SALE_TAB]]: <SalePartsSection />
}

export const empDashboardComponents = {
	[empDashboardSectionsMapper[EmpDashboardSections.INVENTORY]]: <PartsInventory />,
	[empDashboardSectionsMapper[EmpDashboardSections.SALES]]: <PartsSales />,
	[empDashboardSectionsMapper[EmpDashboardSections.REPORTS]]: <PartsReports />,
}