import { BasicColumn } from '/@/components/Table';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

// 列表页字段
export const columns = (): BasicColumn[] => {
  return [
    {
      title: '部门名称',
      dataIndex: 'name',
    },
    {
      title: '添加时间',
      dataIndex: 'createdTime',
      sorter: true,
      width: 180,
    },
    {
      title: '添加人',
      dataIndex: 'createdOrgId',
    },
  ];
};

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
