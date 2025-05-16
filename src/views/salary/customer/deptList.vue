<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @register="registerTable" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import { handleFetchParams } from '/@/utils/lamp/common';
  import { page } from '../../../api/salary/dept';
  import { columns } from './deptList.data';

  export default defineComponent({
    // 若需要开启页面缓存，请将此参数跟菜单名保持一致
    name: '部门管理维护',
    components: {
      BasicTable,
      PageWrapper,
    },
    setup() {
      const [registerModal] = useModal();

      // 表格
      const [registerTable] = useTable({
        title: '部门管理列表',
        api: page,
        columns: columns(),
        beforeFetch: handleFetchParams,
        useSearchForm: false,
        bordered: true,
        rowKey: 'id',
      });

      return {
        registerTable,
        registerModal,
      };
    },
  });
</script>
