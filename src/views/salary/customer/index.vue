<template>
  <div>
    <BasicTable @register="registerTable" @selection-change="onSelectionChange">
      <template #toolbar>
        <a-button type="primary" @click="onAdd"> 添加客户 </a-button>
        <a-button @click="onAddDept"> 添加部门 </a-button>
      </template>

      <!-- action slot -->
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '删除',
              color: 'error',
              popConfirm: {
                title: '是否确认删除？',
                confirm: handleDelete.bind(null, record),
              },
            },
            {
              label: '部门管理',
              onClick: handleDept.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <CustomerModal @register="registerModal" @success="handleSuccess" />
    <DeptModal @register="registerDeptModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { message, TypographyText } from 'ant-design-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { page, remove } from '../../../api/salary/customer';
  import CustomerModal from './customerModal.vue';
  import DeptModal from './deptModal.vue';
  import { columns } from './customer.data';
  import { ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { handleFetchParams } from '/@/utils/lamp/common';

  defineOptions({
    name: '客户管理',
  });

  const [registerModal, { openModal }] = useModal();
  const [registerDeptModal, { openModal: openDeptModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '客户管理列表',
    api: page,
    columns,
    beforeFetch: handleFetchParams,
    indexColumnProps: {
      title: '序号',
      width: 100,
    },
    clickToRowSelect: false,
    useSearchForm: false,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: true,
    actionColumn: {
      width: 230,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  });

  // 新增或编辑成功回调
  function handleSuccess() {
    reload();
  }

  function onAdd() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function onAddDept() {
    openDeptModal(true, {
      isUpdate: false,
    });
  }

  const handleEdit = (record: Recordable) => {
    openModal(true, {
      ...record,
      isUpdate: true,
    });
  };

  // 批量删除
  async function batchDelete(ids: string[]) {
    await remove(ids);
    message.success('删除成功');
    handleSuccess();
  }

  // 点击单行删除
  function handleDelete(record: Recordable, e: Event) {
    e?.stopPropagation();
    if (record?.id) {
      batchDelete([record.id]);
    }
  }

  function handleDept(record: Recordable) {
    openDeptModal(true, {
      customerId: record.id,
      isUpdate: true,
    });
  }

  let selectId = ref<string | null>(null);
  // 勾选事件触发
  const onSelectionChange = async (e) => {
    selectId.value = e.rows[0].id;
  };
  // // 导出
  // const exportExcel = async () => {
  //   console.log('download');
  //   try {
  //     let params = unref(selectId);
  //     console.log(params);
  //     const res = await exportApi(params, searchParams.value);
  //     const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' });
  //     const blobURL = window.URL.createObjectURL(blob);

  //     const tempLink = document.createElement('a');
  //     tempLink.style.display = 'none';
  //     tempLink.href = blobURL;
  //     tempLink.setAttribute('download', '项目支出统计.xlsx');
  //     if (typeof tempLink.download === 'undefined') {
  //       tempLink.setAttribute('target', '_blank');
  //     }
  //     document.body.appendChild(tempLink);
  //     tempLink.click();
  //     document.body.removeChild(tempLink);
  //     window.URL.revokeObjectURL(blobURL);

  //     message.success('导出成功');
  //   } catch (error) {}
  // };
  // const debounceExportExcel = useDebounce(exportExcel, 1000);
</script>

<style lang="less" scoped>
  // :global(.ant-input-number) {
  //   width: 100%;
  // }

  // :global(.ant-calendar-picker, .ant-calendar-picker-default) {
  //   width: 100%;
  // }
</style>
../../../api/salary/customer
