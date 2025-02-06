export interface IRole {
    roleId: number,
    role: string
}

export interface IDesdidgnation {

    designationId: number,
    designation: string

}


export interface APIResponseModel {
    message: string,
    result: boolean,
    data: any
}



export interface Employee {
    empName: string,
    empId: number,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    role: string,
    mobile: string
}
