export interface CompaniesLocalStorage {
    [id: string]: CompanyDataContext
}

export interface AdminData {
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}

export interface AuthData {
    id: string,
    email: string,
    name: string
    isAdmin: boolean,
    role?: string,
    companyId?: string
    tokenData: TokenData
}

export interface TokenData {
    accessToken: string,
    refreshToken: string,
    exp: number
}

export interface CompanyDataContext {
    id: string,
    name: string,
    email: string,
    info: string,
    imageUrl: string,
    location: string,
    employees: Employee[],
    parts: Part[]
}

export interface Employee {
    id: string,
    name: string,
    email: string,
    role: string,
    password: string
}

export interface Part {
    id: string
    name: string,
    imageUrl: string,
    description: string,
    pricePerPiece: string,
    quantity: string
}

export interface ApiResponse {
    statusCode: number
}

export interface ApiSuccess extends ApiResponse {
    payload: any
}

export interface ApiError extends ApiResponse {
    errorMsg: string
} 

export interface ComapnyCommon {
    id: string,
    name: string,
    email: string,
    info: string,
    imageUrl: string,
    location: string
}
// export type ApiResponse = {
//     statusCode: number,
//     payload: any
// }

export interface CompanyCardData {
    id: string,
    name: string,
    imageUrl: string,
    location: string,
}

export interface CompanyData extends ComapnyCommon {
    employees: EmployeeData[]
}

export interface EmployeeData {
    name: string,
    email: string,
    role: string
}





