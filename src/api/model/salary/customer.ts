export interface SalaryCustomerPageQuery {
  name?: string; // 客户全称
  abbreviation?: string; // 客户简称
  taxNumber?: string; // 公司税号
  companyLeader?: string; // 公司负责人
  bank?: string; // 开户银行
  bankAccount?: string; // 银行账号
  createdOrgId?: string; // 创建人组织
}

export interface SalaryCustomerSaveVO {
  name?: string; // 客户全称
  abbreviation?: string; // 客户简称
  taxNumber?: string; // 公司税号
  companyLeader?: string; // 公司负责人
  bank?: string; // 开户银行
  bankAccount?: string; // 银行账号
  createdOrgId?: string; // 创建人组织
}

export interface SalaryCustomerUpdateVO {
  id: string;
  name?: string; // 客户全称
  abbreviation?: string; // 客户简称
  taxNumber?: string; // 公司税号
  companyLeader?: string; // 公司负责人
  bank?: string; // 开户银行
  bankAccount?: string; // 银行账号
  createdOrgId?: string; // 创建人组织
}

export interface SalaryCustomerResultVO {
  echoMap?: any;
  id?: string; // ID
  createdBy?: string; // 创建人
  createdTime?: string; // 创建时间
  updatedBy?: string; // 更新人
  updatedTime?: string; // 更新时间
  name?: string; // 客户全称
  abbreviation?: string; // 客户简称
  taxNumber?: string; // 公司税号
  companyLeader?: string; // 公司负责人
  bank?: string; // 开户银行
  bankAccount?: string; // 银行账号
  createdOrgId?: string; // 创建人组织
}
