import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import type { AxiosRequestConfig } from 'axios';
import {
  SalaryCustomerPageQuery,
  SalaryCustomerResultVO,
  SalaryCustomerSaveVO,
  SalaryCustomerUpdateVO,
} from '../../model/salary/customer';

const MODULAR = 'salaryCustomer';
const ServicePrefix = '/salary';

export const Api = {
  Page: {
    url: `${ServicePrefix}/${MODULAR}/page`,
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Detail: {
    url: `${ServicePrefix}/${MODULAR}/detail`,
    method: RequestEnum.GET,
  } as AxiosRequestConfig,
  Copy: {
    url: `${ServicePrefix}/${MODULAR}/copy`,
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: `${ServicePrefix}/${MODULAR}`,
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: `${ServicePrefix}/${MODULAR}`,
    method: RequestEnum.PUT,
  },
  Delete: {
    url: `${ServicePrefix}/${MODULAR}`,
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: `${ServicePrefix}/${MODULAR}/query`,
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const copy = (id: string) =>
  defHttp.request<SalaryCustomerResultVO>({ ...Api.Copy, params: { id } });

export const page = (params: PageParams<SalaryCustomerPageQuery>) =>
  defHttp.request<PageResult<SalaryCustomerResultVO>>({ ...Api.Page, params });

export const detail = (id: string) =>
  defHttp.request<SalaryCustomerResultVO>({ ...Api.Detail, params: { id } });

export const query = (params: SalaryCustomerPageQuery) =>
  defHttp.request<SalaryCustomerResultVO[]>({ ...Api.Query, params });

export const save = (params: SalaryCustomerSaveVO) =>
  defHttp.request<SalaryCustomerResultVO>({ ...Api.Save, params });

export const update = (params: SalaryCustomerUpdateVO) =>
  defHttp.request<SalaryCustomerResultVO>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
