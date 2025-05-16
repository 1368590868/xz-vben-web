<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="title"
    @ok="handleSubmit"
    :keyboard="true"
    :maskClosable="false"
    width="800px"
  >
    <div>
      <template v-if="!isUpdate">
        <BasicForm @register="registerFrom" v-if="getVisible" />
      </template>
      <template v-else>
        <DeptList />
      </template>
    </div>
  </BasicModal>
</template>

<script setup lang="ts">
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { deptFormSchema } from './customer.data';
  import { ref, unref } from 'vue';
  import { save, update, query } from '../../../api/salary/dept';
  import { message } from 'ant-design-vue';
  import DeptList from './deptList.vue';

  const [registerFrom, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    colon: true,
    schemas: deptFormSchema,
    showActionButtonGroup: false,
    baseColProps: { span: 24 },
    actionColOptions: {
      span: 23,
    },
  });
  const title = ref('添加部门');
  const isUpdate = ref(false);
  const id = ref(null);
  const emits = defineEmits(['success', 'register']);
  const [register, { setModalProps, closeModal, getVisible }] = useModalInner((data) => {
    id.value = data.id;
    isUpdate.value = data.isUpdate;
    title.value = isUpdate.value ? '编辑部门' : '添加部门';
    resetFields();
    setModalProps({ confirmLoading: false });
    if (data?.customerId) {
      getDeptDetail(data.customerId);
    }
  });

  async function getDeptDetail(customerId: string) {
    const res = await query({ customerId });
    setFieldsValue(res);
  }

  //   提交
  const handleSubmit = async () => {
    try {
      setModalProps({ confirmLoading: true });
      const values = await validate();
      if (!isUpdate.value) {
        values.orderNum = Number(values.orderNum);
        await save(values);
        message.success('添加成功');
      } else {
        await update({ ...values, id: unref(id) });
        message.success('修改成功');
      }
      closeModal();
      emits('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  };
</script>

<style scoped></style>
