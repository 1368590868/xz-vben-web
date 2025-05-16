import { query } from '../../../api/salary/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '客户全程',
    dataIndex: 'name',
    width: 220,
    fixed: 'left',
    ellipsis: true,
  },
  {
    title: '客户简称',
    dataIndex: 'abbreviation',
    width: 160,
  },
  {
    title: '公司税号',
    dataIndex: 'taxNumber',
    width: 120,
  },
  {
    title: '公司负责人',
    dataIndex: 'companyLeader',
    width: 120,
  },
  {
    title: '开户银行',
    dataIndex: 'bank',
    width: 100,
  },
  {
    title: '开户银行账号',
    dataIndex: 'bankAccount',
    width: 100,
  },
  {
    title: '部门数量',
    dataIndex: 'deptCount',
    width: 100,
  },
  {
    title: '职工数量',
    dataIndex: 'employeeCount',
    width: 100,
  },
];

// customer modal form
export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    label: '客户全称',
    field: 'name',
    component: 'Input',
    required: true,
  },
  {
    label: '客户简称',
    field: 'abbreviation',
    component: 'Input',
    required: true,
  },
  {
    label: '公司税号',
    field: 'taxNumber',
    component: 'Input',
    rules: [
      {
        pattern: /^[A-Z0-9]{15,20}$/,
        message: '税号格式不正确，请输入15-20位数字或大写字母',
        trigger: 'blur',
      },
    ],
    componentProps: {
      placeholder: '请输入15-20位数字或大写字母',
      maxLength: 20,
      onChange: (e: Event) => {
        const target = e.target as HTMLInputElement;
        target.value = target.value.toUpperCase();
      },
    },
  },
  {
    label: '公司负责人',
    field: 'companyLeader',
    component: 'Input',
  },
  {
    label: '开户银行',
    field: 'bank',
    component: 'Input',
  },
  {
    label: '开户银行账号',
    field: 'bankAccount',
    component: 'Input',
    rules: [{ pattern: /^\d{16,19}$/, message: '请输入正确的银行卡号', validateTrigger: 'onBlur' }],
  },
];

// dept modal form
export const deptFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    label: '所属客户',
    field: 'customerId',
    component: 'ApiSelect',
    required: true,
    componentProps: {
      api: query,
      resultField: (res) => res.data.records,
      labelField: 'name',
      valueField: 'id',
      // 下拉后才请求数据
      immediate: false,
    },
  },
  {
    label: '部门名称',
    field: 'name',
    component: 'Input',
    required: true,
  },
];
