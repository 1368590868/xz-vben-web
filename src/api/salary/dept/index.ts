import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import type { AxiosRequestConfig } from 'axios';
import {
  SalaryDeptResultVO,
  SalaryDeptPageQuery,
  SalaryDeptSaveVO,
  SalaryDeptUpdateVO,
} from '../../model/salary/dept';

const MODULAR = 'salaryDept';
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
  defHttp.request<SalaryDeptResultVO>({ ...Api.Copy, params: { id } });

export const page = (params: PageParams<SalaryDeptPageQuery>) =>
  defHttp.request<PageResult<SalaryDeptResultVO>>({ ...Api.Page, params });

export const detail = (id: string) =>
  defHttp.request<SalaryDeptResultVO>({ ...Api.Detail, params: { id } });

export const query = (params: SalaryDeptPageQuery) =>
  defHttp.request<SalaryDeptResultVO[]>({ ...Api.Query, params });

export const save = (params: SalaryDeptSaveVO) =>
  defHttp.request<SalaryDeptResultVO>({ ...Api.Save, params });

export const update = (params: SalaryDeptUpdateVO) =>
  defHttp.request<SalaryDeptResultVO>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
