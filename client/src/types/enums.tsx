//company tabs
export enum CompanySections {
    EMPLOYEE_TAB = 0,
    PURCHASED_PARTS_TAB,
    PARTS_FOR_SALE_TAB
}

export const companySectionsMapper: { [key in CompanySections]: string } = {
    [CompanySections.EMPLOYEE_TAB]: 'Employee',
    [CompanySections.PURCHASED_PARTS_TAB]: 'Purchased Parts',
    [CompanySections.PARTS_FOR_SALE_TAB]: 'Parts for Sale'
}

export enum FormSourcePages {
    CREATE_COMPANY = 0,
    CREATE_EMPLOYEE,
    CREATE_PART,
    LOGIN
}

export const formSourcePagesMapper: { [key in FormSourcePages]: string } = {
    [FormSourcePages.CREATE_COMPANY]: 'Create Company',   
    [FormSourcePages.CREATE_EMPLOYEE]: 'Create Employee',   
    [FormSourcePages.CREATE_PART]: 'Create Part',
    [FormSourcePages.LOGIN]: 'Login',
}

export enum EmpDashboardSections {
    INVENTORY = 0,
    SALES,
    REPORTS
}

export const empDashboardSectionsMapper: { [key in EmpDashboardSections]: string } = {
    [EmpDashboardSections.INVENTORY]: 'Inventory (6)',
    [EmpDashboardSections.SALES]: 'Sales',
    [EmpDashboardSections.REPORTS]: 'Reports',
}

export enum CookieStorageKey {
    ACCESS_TOKEN = 'accessToken',
    REFRESH_TOKEN = 'refreshToken',
    EXP_ACCESS_TOKEN = 'exp-access-token'
}
