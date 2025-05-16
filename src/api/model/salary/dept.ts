export interface SalaryDeptPageQuery {
  name?: string; // 部门名称
  customerId?: string; // 客户ID
  createdOrgId?: string; // 创建人组织
}

export interface SalaryDeptSaveVO {
  name?: string; // 部门名称
  customerId?: string; // 客户ID
  createdOrgId?: string; // 创建人组织
}

export interface SalaryDeptUpdateVO {
  id: string;
  name?: string; // 部门名称
  customerId?: string; // 客户ID
  createdOrgId?: string; // 创建人组织
}

export interface SalaryDeptResultVO {
  echoMap?: any;
  id?: string; // ID
  createdBy?: string; // 创建人
  createdTime?: string; // 创建时间
  updatedBy?: string; // 更新人
  updatedTime?: string; // 更新时间
  name?: string; // 部门名称
  customerId?: string; // 客户ID
  createdOrgId?: string; // 创建人组织
}
